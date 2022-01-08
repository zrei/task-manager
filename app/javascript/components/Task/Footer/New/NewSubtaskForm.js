
import React, { useState, useReducer } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../Task.css';
import PastDate from '../../../Functions/PastDate';

const formReducer = (state, event) => {
	if (event.reset) {
		return {
			name: '',
			description: '',
			deadline: ''
		};
	}
	return {
		...state,
		[event.name]: event.value
	};
};

const NewSubtaskForm = (props) => {
	let navigate = useNavigate();
	const subtasks = props.subtasks;
	const setSubtasks = props.setSubtasks;
	const task_id = props.task_id;
	const modalAction = props.modalAction;
	const [formData, setFormData] = useReducer(formReducer, {});
	const [submitting, setSubmitting] = useState(false);
	
	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitting(true);
		axios.post('/api/v1/subtasks', { task_id: task_id, name: formData.name, description: formData.description ? formData.description : null, deadline: formData.deadline ? formData.deadline : null })
  		.then( (resp) => {
  			console.log("posted data");
  			setFormData({
       			reset: true
     		});
  			setSubmitting(false);
  			setSubtasks([...subtasks, resp.data.data]);
  			modalAction();
			}
		)
  		.catch( (resp) => {
  			console.log(resp);
  			navigate('/error');
  		});
	};

	const handleChange = (event) => {
		setFormData({
			name: event.target.name,
			value: event.target.value
		});
	};

	return (
		<div>
			<h1>Create a new subtask</h1>
			<p>A <span className="red-text">*</span> indicates compulsory fields that must be filled in before the form can be submitted.</p>
			{submitting && 
				<div>
         			Submitting...
       			</div>
         	}
			<form onSubmit={handleSubmit}>
				<fieldset disabled={submitting}>
					<label>
						Name <span className="red-text">*</span><br />
						<input name="name" onChange={handleChange} value={formData.name || ''} />
					</label>
				</fieldset><br />
				<fieldset disabled={formData.name == undefined || formData.name == '' || submitting}>
					<label>
						Description<br />
						<textarea name="description" onChange={handleChange} value={formData.description || ''} />
					</label><br />
					<label>
						Deadline<br />
						{ (formData.deadline && PastDate(formData.deadline)) &&
							<div className="red-text">
								This deadline is in the past!
							</div>
						}
						<input type="date" name="deadline" onChange={handleChange} value={formData.deadline || ''} />
					</label>
				</fieldset><br />
				<button className="form-btn" type="submit" disabled={formData.name == undefined || formData.name == '' || submitting || (formData.deadline && PastDate(formData.deadline))}>Submit</button>
				<button 
					disabled={submitting} 
					type="button"
					onClick={()=>{
						setFormData({
							reset: true
						});}
					}>Clear
				</button>
			</form>
		</div>
	);
};

export default NewSubtaskForm;
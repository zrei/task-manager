
import React, { useState, useReducer } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../Task.css';

const formReducer = (state, event) => {
	if (event.reset) {
		return {
			name: event.task.name,
			description: event.task.description,
			deadline: event.task.deadline,
		};
	};
	if (event.clear) {
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

const EditTaskForm = (props) => {
	let navigate = useNavigate();
	const task = props.task;
	const setTask = props.setTask;
	const modalAction = props.modalAction;
	const [formData, setFormData] = useReducer(formReducer, {
		name: task.attributes.name,
		description: task.attributes.description,
		deadline: task.attributes.deadline
	});
	const [submitting, setSubmitting] = useState(false);
	
	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitting(true);
		const slug = task.attributes.slug;
		const url = "/api/v1/tasks/" + slug;
		axios.patch(url, {name: formData.name, description: formData.description ? formData.description : null, deadline: formData.deadline ? formData.deadline : null})
		.then( (resp) => {
			setTask(resp.data.data);
			setSubmitting(false);
			modalAction();
			setFormData({
       			reset: true,
       			task: {
       				name: formData.name,
       				description: formData.description,
       				deadline: formData.deadline
       			}
     		});
		})
		.catch( (resp) => {
			console.log("TaskForm error");
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
			<h1>Edit Task</h1>
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
						<input type="date" name="deadline" onChange={handleChange} value={formData.deadline || ''} />
					</label>
				</fieldset><br />
				<button className="form-btn" type="submit" disabled={formData.name == undefined || formData.name == '' || submitting}>Submit</button>
				<button 
					className="form-btn" 
					type="button" 
					disabled={submitting} 
					onClick={()=>{
						setFormData({
							reset: true,
							task: {
								name: task.attributes.name,
								description: task.attributes.description,
								deadline: task.attributes.deadline
							}
						});}
					}>Reset
				</button>
				<button 
					className="form-btn"
					type="button"
					disabled={submitting}
					onClick={() => {
						setFormData({
							clear: true
						});
					}}>Clear
				</button>
			</form>
		</div>
	);
};

export default EditTaskForm;
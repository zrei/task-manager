
import React, { useReducer, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Tasks.css';
import PastDate from '../Functions/PastDate';

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

const NewTaskForm = (props) => {
	let navigate = useNavigate();
	const tasks = props.tasks;
	const [formData, setFormData] = useReducer(formReducer, {});
	const [submitting, setSubmitting] = useState(false);
	
	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitting(true);
		axios
			.post('/api/v1/tasks', {
				name: formData.name, 
				description: formData.description ? formData.description : null, 
				deadline: formData.deadline ? formData.deadline : null
			})
	  		.then((resp) => {
	  			const slug = resp.data.data.attributes.slug;
	  			const url = '/task/' + slug;
	  			navigate(url);
	  		})
	  		.catch((resp) => { 
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
			<h2>Create a new task</h2>
			<p>
				A <span className="red-text">*</span> indicates compulsory fields that must be filled in before the form can be submitted.
			</p>
			{submitting && <div>Submitting...</div>}
			<form onSubmit={handleSubmit}>
				<fieldset disabled={submitting}>
					<label>
						Name <span className="red-text">*</span>
						<br />
						{formData.name && 
							tasks.reduce( 
								(x,y) => 
									x || 
									y.attributes.slug === formData.name.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g,'-'), 
								false
							) && (
								<div className="red-text">Another task has the same name!</div>
						)}
						<input 
							name="name" 
							onChange={handleChange} 
							value={formData.name || ''} 
						/>
					</label>
				</fieldset>
				<br />
				<fieldset 
					disabled={
						formData.name === undefined || formData.name === '' || submitting
					}
				>
					<label>
						Description
						<br />
						<textarea 
							name="description" 
							onChange={handleChange} 
							value={formData.description || ''} 
						/>
					</label>
					<br />
					<label>
						Deadline
						<br />
						{formData.deadline && PastDate(formData.deadline) && (
							<div className="red-text">This deadline is in the past!</div>
						)}
						<input 
							type="date" 
							name="deadline" 
							onChange={handleChange} 
							value={formData.deadline || ''} 
						/>
					</label>
				</fieldset>
				<br />
				<button 
					className="form-btn" 
					type="submit" 
					disabled={
						formData.name === undefined || 
						formData.name === '' || 
						submitting || 
						(formData.deadline && PastDate(formData.deadline)) || 
						(formData.name && 
							tasks.reduce( 
								(x,y) => 
									x || 
									y.attributes.slug === formData.name.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g,'-'), 
								false
						))
					}
				>
					Submit
				</button>
				<button 
					disabled={submitting} 
					type="button"
					onClick={() => {
						setFormData({
							reset: true
						});
					}}
				>
					Clear
				</button>
			</form>
		</div>
	);
};

export default NewTaskForm;
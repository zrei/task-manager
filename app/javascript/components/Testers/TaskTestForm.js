
import React, { useReducer, useState } from 'react';

const formReducer = (state, event) => {
	if (event.reset) {
		return {
			name: '',
			description: '',
			deadline: '',
		};
	};
	return {
		...state,
		[event.name]: event.value
	};
};

const TaskTestForm = () => {
	const [formData, setFormData] = useReducer(formReducer, {});
	const [submitting, setSubmitting] = useState(false);
	
	const handleSubmit = event => {
		event.preventDefault();
		setSubmitting(true);
		setTimeout( () => {
			setSubmitting(false);
			setFormData({
				reset: true
			});
		}, 3000);
	};

	const handleChange = event => {
		setFormData({
			name: event.target.name,
			value: event.target.value
		});
	};

	return (
		<div>
			<h1>Create a new task</h1>
			<p>A * indicates compulsory fields that must be filled in before the form can be submitted.</p>
			{submitting && 
				<div>
					You are submitting the following:
         			<ul>
           				{Object.entries(formData).map(([name, value]) => (
             				<li key={name}><strong>{name}</strong>: {value.toString()}</li>
           				))}
         			</ul>
         		</div>
         	}
			<form onSubmit={handleSubmit}>
				<fieldset disabled={submitting}>
					<label>
						Name:<br />
						<input name="name" onChange={handleChange} value={formData.name || ''} />
					</label>
				</fieldset><br />
				<fieldset disabled={formData.name == undefined || formData.name == '' || submitting}>
					<label>
						Description: <br />
						<textarea name="description" onChange={handleChange} value={formData.description || ''} />
					</label><br />
					<label>
						Deadline:<br />
						<input type="date" name="deadline" onChange={handleChange} value={formData.deadline || ''} />
					</label>
				</fieldset><br />
				<button type="submit" disabled={formData.name == undefined || formData.name == '' || submitting}>Submit</button>
			</form>
		</div>
	);
};

export default TaskTestForm;
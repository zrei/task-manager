
import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import '../../Task.css';
import { useNavigate } from 'react-router-dom';

const DeleteSubtaskConfirmation = (props) => {
	const subtasks = props.subtasks;
	const setSubtasks = props.setSubtasks;
	const id = props.id;
	const url = "/api/v1/subtasks/" + id;
	const modalAction = props.modalAction;
	let navigate = useNavigate();
	const confirmAction = () => {
		axios.delete(url)
	    .then( () => {
	      	setSubtasks(subtasks.filter( subtask => subtask.id != id));
	     })
	    .catch( (resp) => {
	      	console.log(resp);
	      	navigate('/error');
	    });	
	    modalAction();
	};
	return (
		<div className="task-buttons">
			<Button variant="danger" onClick={confirmAction}>Confirm</Button>
		</div>
	);
};

export default DeleteSubtaskConfirmation;
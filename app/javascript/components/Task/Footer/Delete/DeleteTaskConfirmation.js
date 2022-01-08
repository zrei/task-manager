
import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import '../../Task.css';
import { useNavigate } from 'react-router-dom';

const DeleteTaskConfirmation = (props) => {
	const slug = props.slug;
	const url = "/api/v1/tasks/" + slug;
	let navigate = useNavigate();
	const confirmAction = () => {
		axios.delete(url)
	    .then( () => {
	      	navigate('/');
	     })
	    .catch( (resp) => {
	      	console.log(resp);
	      	navigate('/error');
	    });	
	}
	return (
		<div className="task-buttons">
			<Button variant="danger" onClick={confirmAction}>Confirm</Button>
		</div>
	);
};

export default DeleteTaskConfirmation;
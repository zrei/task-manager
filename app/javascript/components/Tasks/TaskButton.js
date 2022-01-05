
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tasks.css';
import ConvertDeadline from '../Functions/ConvertDeadline';
import { useNavigate } from 'react-router-dom';

const TaskButton = (props) => {
	let navigate = useNavigate();
	const {name, deadline, slug} = props.attributes;
	const url = "/task/" + slug;
	return (
		<div className="d-grid gap-2">
  			<Button variant="primary" size="lg" className="custom-btn" onClick={() => navigate(url)}>
    			<span className="tasktitle">{name}</span>
    			<ul>
    				{deadline != null && <li>Deadline: {ConvertDeadline(deadline)}</li>}
    				<li>Number of subtasks: {props.numsubtasks}</li>
    			</ul>
  			</Button>
  		</div>
	);
};

export default TaskButton;
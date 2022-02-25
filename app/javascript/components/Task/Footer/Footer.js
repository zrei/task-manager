
import React from 'react';
import Button from 'react-bootstrap/Button';
import NewSubtaskButton from './New/NewSubtaskButton';
import EditTaskButton from './Edit/EditTaskButton';
import DeleteTaskButton from './Delete/DeleteTaskButton';
import { useNavigate } from 'react-router-dom';
import '../Task.css';

const Footer = (props) => {
	let navigate = useNavigate();
	const task_id = props.task_id;
	const subtasks = props.subtasks;
	const setSubtasks = props.setSubtasks;
	const task = props.task;
	const setTask = props.setTask;
	const category = props.category;
	const categoryUrl = "/category/" + category;
	return (
		<div className="Footer">
			<Button 
				className="home-button" 
				variant="success" 
				onClick={() => navigate('/')}
			>
				Home
			</Button>
			<Button 
				className="task-buttons"
				variant="info"
				onClick={() => navigate(categoryUrl)}
			>
				Cateogry: {category}
			</Button>
			<NewSubtaskButton 
				task_id={task_id} 
				subtasks={subtasks} 
				setSubtasks={setSubtasks}
			/>
			<EditTaskButton task={task} setTask={setTask} />
			<DeleteTaskButton attributes={task.attributes} />
		</div>
	);
};

export default Footer;
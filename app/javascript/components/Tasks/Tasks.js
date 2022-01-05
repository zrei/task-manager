
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskButton from './TaskButton';
import NewTaskForm from './NewTaskForm';
import { useNavigate } from 'react-router-dom';
import './Tasks.css';

const Tasks = () => {
	let navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [tasks, setTasks] = useState([]);
	const [subtask, setSubtask] = useState([]);

	useEffect( () => {
		const fetchTasks = async () => {
			setLoading(true);
			try {
				const {data: response} = await axios.get('/api/v1/tasks.json');
				setTasks(response.data);
			} catch (error) {
				console.error(error.message);
				navigate('/error');
			}
			setLoading(false);
		}
		fetchTasks();
	}, []);
	

  	const taskdisplay = tasks && !loading && tasks.map( (task, index) => {
  		return (
  			<TaskButton 
  				key={index}
  				attributes={task.attributes}
  				numsubtasks={task.relationships.subtasks.data.length}
  			/ >
  		);
  	});


	return (
		<div>
			<div className="Header">
				<div className="header-title"><h1>TASK MANAGER</h1></div>
				<h3>You have <u>{tasks.length}</u> tasks remaining.</h3>
			</div>
			<div className="Column-1">
				<div className="taskList">
					<h2>Remaining Tasks</h2>
					{taskdisplay}
				</div>
			</div>
			<div className="Column-2">
				<NewTaskForm tasks={tasks}/>
			</div>
		</div>
	);
};

export default Tasks;
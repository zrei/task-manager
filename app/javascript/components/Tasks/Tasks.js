
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskButton from './TaskButton';
import { useNavigate } from 'react-router-dom';
import './Tasks.css';
import Actions from './Actions/Actions.js';

const Tasks = () => {
	let navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [tasks, setTasks] = useState([]);
	const [sort, setSort] = useState("deadline");
	const current = new Date();
	const date = "Today's Date: " + `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

	useEffect(() => {
		const fetchTasks = async () => {
			setLoading(true);
			try {
				const { data: response} = await axios.get('/api/v1/tasks');
				setTasks(response.data);
			} catch (error) {
				console.error(error.message);
				navigate('/error');
			}
			setLoading(false);
		};
		fetchTasks();
	}, []);
	
	let tasksWithDeadline = tasks.filter(
		(task) => task.attributes.deadline != null
	);
	let sortedTasksByDeadline = tasksWithDeadline.sort(
		(a, b) => 
			new Date(...a.attributes.deadline.split('/').reverse()) - new Date(...b.attributes.deadline.split('/').reverse())
	);

	let tasksWithoutDeadline = tasks.filter(
		(task) => task.attributes.deadline == null
	);

	let sortedTasksByName = tasks.sort(
		(a, b) =>
			a.attributes.name.localeCompare(b.attributes.name)
	);

  	const withDeadlineTaskDisplay = 
  		sortedTasksByDeadline && 
  		!loading && 
  		sort == "deadline" &&
  		sortedTasksByDeadline.map((task, index) => {
	  		return (
	  			<TaskButton 
	  				key={index}
	  				attributes={task.attributes}
	  				numsubtasks={task.relationships.subtasks.data.length}
	  			/>
	  		);
  	});

  	const withoutDeadlineTaskDisplay = 
  		tasksWithoutDeadline && 
  		!loading && 
  		sort == "deadline" &&
  		tasksWithoutDeadline.map((task, index) => {
	  		return (
	  			<TaskButton 
	  				key={index}
	  				attributes={task.attributes}
	  				numsubtasks={task.relationships.subtasks.data.length}
	  			/>
	  		);
  	});

  	const SortByNameDisplay = 
  		sortedTasksByName && 
  		!loading && 
  		sort == "name" &&
  		sortedTasksByName.map((task, index) => {
	  		return (
	  			<TaskButton 
	  				key={index}
	  				attributes={task.attributes}
	  				numsubtasks={task.relationships.subtasks.data.length}
	  			/>
	  		);
  	});



	return (
		<div>
			<div className="Header">
				<div className="header-title">
					<h1>TASK MANAGER</h1>
				</div>
				<h3>
					You have <u>{tasks.length}</u> tasks remaining.
				</h3>
				<div className="current-date">
					<h4>{date}</h4>
				</div>
			</div>
			<div className="Column-1">
				<div className="taskList">
					<h2>Remaining Tasks</h2>
					{withDeadlineTaskDisplay}
					{withoutDeadlineTaskDisplay}
					{SortByNameDisplay}
				</div>
			</div>
			<div className="Column-2">
				<Actions tasks={tasks} setSort={setSort}/>
			</div>
		</div>
	);
};

export default Tasks;
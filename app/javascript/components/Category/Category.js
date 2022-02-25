
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import TaskButton from '../Tasks/TaskButton';
import './Category.css';

const Category = () => {
	let navigate = useNavigate();
	const { category } = useParams();
	const [loading, setLoading] = useState(true);
	const [tasks, setTasks] = useState([]);

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

	let tasksInCategory = tasks.filter(
		(task) => task.attributes.tag == category
	);

	let tasksWithDeadline = tasksInCategory.filter(
		(task) => task.attributes.deadline != null
	);
	let sortedTasks = tasksWithDeadline.sort(
		(a, b) => 
			new Date(...a.attributes.deadline.split('/').reverse()) - new Date(...b.attributes.deadline.split('/').reverse())
	);
	let tasksWithoutDeadline = tasksInCategory.filter(
		(task) => task.attributes.deadline == null
	);

	const withDeadlineTaskDisplay = 
  		sortedTasks && 
  		!loading && 
  		sortedTasks.map((task, index) => {
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
  		tasksWithoutDeadline.map((task, index) => {
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
			<div className="header">
				<Header numTasks={tasksInCategory.length} category={category} />
			</div>
			<div className="taskBody">
				{withDeadlineTaskDisplay}
				{withoutDeadlineTaskDisplay}
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
};

export default Category;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import TaskButton from '../Tasks/TaskButton';
import './SearchResults.css';

const SearchResults = () => {
	let navigate = useNavigate();
	const { searchTerm } = useParams();
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

	let tasksWithSearchTerm = tasks.filter(
		(task) => task.attributes.name.toLowerCase().includes(searchTerm)
	);

	let tasksWithDeadline = tasksWithSearchTerm.filter(
		(task) => task.attributes.deadline != null
	);
	let sortedTasks = tasksWithDeadline.sort(
		(a, b) => 
			new Date(...a.attributes.deadline.split('/').reverse()) - new Date(...b.attributes.deadline.split('/').reverse())
	);
	let tasksWithoutDeadline = tasksWithSearchTerm.filter(
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

  	const noResults = tasksWithSearchTerm.length == 0 && 
  		(<>
  			We couldn't find what you were looking for!
  		</>);

	return (
		<div>
			<div className="header">
				<Header searchTerm={searchTerm} numResults={tasksWithSearchTerm.length} />
			</div>
			<div className="taskBody">
				{withDeadlineTaskDisplay}
				{withoutDeadlineTaskDisplay}
				{noResults}
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
};

export default SearchResults;
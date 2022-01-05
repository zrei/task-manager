
import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Functions/Loading';
import Subtask from './Subtasks/Subtask';
import Footer from './Footer/Footer';
import './Task.css';

const Task = () => {
	let navigate = useNavigate();
	const [task, setTask] = useState({});
	const [subtasks, setSubtasks] = useState([]);
	const [loading, setLoading] = useState(true);
	const { slug } = useParams();
	const url = '/api/v1/tasks/' + slug;
	
	useEffect( () => {	
		const fetchTask = async () => {
			setLoading(true);
			try {
				const {data: response} = await axios.get(url);
				if (response.data == null) {
					navigate('/notfound');
				}
				setTask(response.data);
				setSubtasks(response.included);
			} catch (error) {
				console.error(error.message);
				navigate('/error');
			}
			setLoading(false);
		}
		fetchTask();
	}, []);

	const subtaskdisplay = subtasks && !loading && subtasks.map( (subtask, index) => {
  		return (
  			<Subtask 
  				key={index}
  				attributes={subtask.attributes}
  				id={subtask.id}
  				subtasks={subtasks}
  				setSubtasks={setSubtasks}
  			/ >
  		);
  	});

	return (
		<div className="subtask-page">
			{loading &&
				<Loading />
			}
			{!loading &&
				<Header attributes={task.attributes} />
			}
			{!loading && 
				<div className="subtaskContainer">
					<h3>{subtasks.length} Subtasks</h3>
					{subtaskdisplay}
				</div>
			}
			{! loading && 
				<Footer task_id={task.id} subtasks={subtasks} setSubtasks={setSubtasks} task={task} setTask={setTask}/>
			}
		</div>
	);
};

export default Task;
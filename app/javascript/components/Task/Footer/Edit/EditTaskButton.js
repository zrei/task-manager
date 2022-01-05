
import React, { useState } from 'react';
import Button from 'react-bootstrap/button';
import Modal from 'react-modal';
import EditTaskForm from './EditTaskForm';
import '../../Task.css';

const EditTaskButton = (props) => {
	const task = props.task;
	const setTask = props.setTask;
	Modal.setAppElement('body');
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const setModalIsOpenToTrue = () => {
		setModalIsOpen(true);
	}
	const setModalIsOpenToFalse = () => {
		setModalIsOpen(false);
	}
	return (
		<div className="task-buttons">
			<Button variant="info" onClick={setModalIsOpenToTrue}>Edit Task</Button>
			<Modal isOpen={modalIsOpen}>
				<Button variant="primary" onClick={setModalIsOpenToFalse}>Close</Button>
				<EditTaskForm modalAction={setModalIsOpenToFalse} task={task} setTask={setTask}/>
			</Modal>
		</div>
	);
};

export default EditTaskButton;
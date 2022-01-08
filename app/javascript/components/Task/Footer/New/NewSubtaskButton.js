
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';
import NewSubtaskForm from './NewSubtaskForm.js';
import '../../Task.css';

const NewSubtaskButton = (props) => {
	const subtasks = props.subtasks;
	const setSubtasks = props.setSubtasks;
	const task_id = props.task_id;
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
			<Button variant="primary" onClick={setModalIsOpenToTrue}>+ Subtask</Button>
			<Modal isOpen={modalIsOpen}>
				<Button variant="primary" onClick={setModalIsOpenToFalse}>Close</Button>
				<NewSubtaskForm modalAction={setModalIsOpenToFalse} task_id={task_id} subtasks={subtasks} setSubtasks={setSubtasks}/>
			</Modal>
		</div>
	);
};


export default NewSubtaskButton;
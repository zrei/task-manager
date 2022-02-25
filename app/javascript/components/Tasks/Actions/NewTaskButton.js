
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';
import NewTaskForm from './NewTaskForm';
import '../Tasks.css';

const NewTaskButton = (props) => {
	const tasks = props.tasks;
	Modal.setAppElement('body');
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const setModalIsOpenToTrue = () => {
		setModalIsOpen(true);
	};
	const setModalIsOpenToFalse = () => {
		setModalIsOpen(false);
	};
	return (
		<div className="task-buttons">
			<Button variant="success" onClick={setModalIsOpenToTrue}>
				Add New Task
			</Button>
			<Modal isOpen={modalIsOpen}>
				<Button variant="primary" onClick={setModalIsOpenToFalse}>
					Close
				</Button>
				<NewTaskForm 
					modalAction={setModalIsOpenToFalse} 
					tasks={tasks}
				/>
			</Modal>
		</div>
	);
};

export default NewTaskButton;
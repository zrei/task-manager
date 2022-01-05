
import React, { useState } from 'react';
import Button from 'react-bootstrap/button';
import Modal from 'react-modal';
import SubtaskContent from './SubtaskContent';
import DeleteSubtaskConfirmation from './DeleteSubtaskConfirmation';
import '../../Task.css';

const DeleteSubtaskButton = (props) => {
	const subtasks = props.subtasks;
	const setSubtasks = props.setSubtasks;
	const id = props.id;
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
			<Button variant="danger" onClick={setModalIsOpenToTrue}>Delete Subtask</Button>
			<Modal isOpen={modalIsOpen}>
				<SubtaskContent attributes={props.attributes}/>
				<Button variant="primary" onClick={setModalIsOpenToFalse} className="task-buttons">Cancel</Button>
				<DeleteSubtaskConfirmation modalAction={setModalIsOpenToFalse} id={id} subtasks={subtasks} setSubtasks={setSubtasks}/>
			</Modal>
		</div>
	);
}

export default DeleteSubtaskButton;
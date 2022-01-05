
import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/button';
import TaskContent from './TaskContent';
import DeleteTaskConfirmation from './DeleteTaskConfirmation';
import '../../Task.css';

const DeleteTaskButton = (props) => {
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
			<Button variant="danger" onClick={setModalIsOpenToTrue}>Delete Task</Button>
			<Modal isOpen={modalIsOpen}>
				<TaskContent attributes={props.attributes}/>
				<Button variant="primary" onClick={setModalIsOpenToFalse} className="task-buttons">Cancel</Button>
				<DeleteTaskConfirmation slug={props.attributes.slug}/>
			</Modal>
		</div>
	);
	
}

export default DeleteTaskButton;
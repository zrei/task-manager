
import React, { useState } from 'react';
import Button from 'react-bootstrap/button';
import Modal from 'react-modal';
import EditSubtaskForm from './EditSubtaskForm';
import '../../Task.css';

const EditSubtaskButton = (props) => {
	const attributes = props.attributes;
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
			<Button variant="info" onClick={setModalIsOpenToTrue}>Edit Subtask</Button>
			<Modal isOpen={modalIsOpen}>
				<Button variant="primary" onClick={setModalIsOpenToFalse}>Close</Button>
				<EditSubtaskForm modalAction={setModalIsOpenToFalse} subtasks={subtasks} setSubtasks={setSubtasks} attributes={attributes} id={id}/>
			</Modal>
		</div>
	);
};
export default EditSubtaskButton;
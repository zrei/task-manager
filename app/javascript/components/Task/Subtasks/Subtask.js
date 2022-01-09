
import React from 'react';
import ConvertDeadline from '../../Functions/ConvertDeadline';
import EditSubtaskButton from './Edit/EditSubtaskButton';
import DeleteSubtaskButton from './Delete/DeleteSubtaskButton';
import '../Task.css';
import PastDate from '../../Functions/PastDate';

const Subtask = (props) => {
	const { name, description, deadline } = props.attributes;
	let namechange = name;
	if (deadline != null && PastDate(deadline)) {
		namechange += " - OVERDUE";
	}
	const subtasks = props.subtasks;
	const setSubtasks = props.setSubtasks;
	const id = props.id;
	return (
		<div className="subtask-box">
			<div className="subtask-content">
				<div className="subtask-title">{namechange}</div>
				<ul>
					{description != null && (
						<li>
							<b>Description:</b> {description}
						</li>
					)}
					{deadline != null && (
						<li>
							<b>Deadline:</b> {ConvertDeadline(deadline)}
						</li>
					)}
				</ul>
			</div>
			<div className="subtask-footer">
				<EditSubtaskButton 
					attributes={props.attributes} 
					subtasks={subtasks} 
					setSubtasks={setSubtasks} 
					id={id}
				/>
				<DeleteSubtaskButton 
					id={id} 
					subtasks={subtasks} 
					setSubtasks={setSubtasks} 
					attributes={props.attributes}
				/>
			</div>
		</div>
	);
};

export default Subtask;
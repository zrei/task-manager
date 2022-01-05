
import React from 'react';
import '../Task.css';
import ConvertDeadline from '../../Functions/ConvertDeadline';

const Deadline = (props) => {
	const deadline = props.deadline;
	return (
		<div className="task-deadline">
			<b>Deadline:</b> {ConvertDeadline(deadline)}
		</div>
	);
};

export default Deadline;
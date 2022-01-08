
import React from 'react';
import '../../Task.css';

const Content = (content) => {
	if (content) {
		return <>{content}</>;
	} else {
		return <><span className="grey-text">(None)</span></>;
	}
};

const SubtaskContent = (props) => {
	const { name, description, deadline } = props.attributes;
	return (
		<div>
			Do you <i>really</i> want to <span className="red-text">delete</span> this subtask?
			<ul>
				<li><b>Subtask name:</b> <span className="subtask-content-title">{name}</span></li>
				<li><b>Description:</b> {Content(description)}</li>
				<li><b>Deadline:</b> {Content(deadline)}</li>
			</ul>
		</div>
	);
};

export default SubtaskContent;
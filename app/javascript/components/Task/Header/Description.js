
import React from 'react';
import '../Task.css';

const Description = (props) => {
	const description = props.description;
	return (
		<div className="task-description">
			<b>Description:</b> {description}
		</div>
	);
};

export default Description;
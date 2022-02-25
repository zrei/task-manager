
import React from 'react';
import '../Task.css';

const Category = (props) => {
	const tag = props.tag;
	return (
		<div className="task-category">
			<b>Category:</b> {tag}
		</div>
	);
};

export default Category;
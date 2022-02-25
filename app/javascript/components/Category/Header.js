
import React from 'react';

const Header = (props) => {
	const category = props.category;
	return (
		<>
			<h1>Category: {category}</h1>
			<b><u>{props.numTasks}</u></b> tasks 
		</>
	);
};

export default Header;


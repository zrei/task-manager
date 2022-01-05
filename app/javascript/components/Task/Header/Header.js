
import React from 'react';
import '../Task.css';
import Deadline from './Deadline';
import Description from './Description';

const Header = (props) => {
	const {name, description, deadline} = props.attributes;
	
	return (
		<div className="header">
			<div className="task-title"><h1>{name}</h1></div>
			{deadline != null && <Deadline deadline={deadline}/>}
			{description != null && <Description description={description}/>}
		</div>
	);
}

export default Header;
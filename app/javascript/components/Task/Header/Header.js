
import React from 'react';
import '../Task.css';
import Deadline from './Deadline';
import Description from './Description';
import PastDate from '../../Functions/PastDate';

const Header = (props) => {
	const { name, description, deadline } = props.attributes;
	let namechange = name;
	if (deadline != null && PastDate(deadline)) {
		namechange += " (overdue)";
	}
	return (
		<div className="header">
			<div className="task-title"><h1>{namechange}</h1></div>
			{deadline != null && <Deadline deadline={deadline}/>}
			{description != null && <Description description={description}/>}
		</div>
	);
};

export default Header;
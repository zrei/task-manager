
import React from 'react';
import NewTaskButton from './NewTaskButton.js';
import SearchBar from './SearchBar.js';
import CategoryButton from './CategoryButton.js';
import './Actions.css';
import Sort from './Sort';

const Actions = (props) => {
	const tasks = props.tasks;
	return (
		<>
			<div className="sort-by">
				<Sort setSort={props.setSort}/>
			</div>
			<div className="filter">
				Filter current tasks by category: 
				<CategoryButton category="School" />
				<CategoryButton category="Work" />
				<CategoryButton category="Personal" />
			</div>
			<div className="new-task-button">
				<NewTaskButton tasks={tasks} /><br /><br />
			</div>
			<div>
				<SearchBar message="Search tasks by title"/>
			</div>
		</>
	);
};

export default Actions;


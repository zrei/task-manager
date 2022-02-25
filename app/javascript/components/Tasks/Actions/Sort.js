
import React from 'react';
import './Actions.css';

const Sort = (props) => {
	const setSort = props.setSort;
	const handleChange = (event) => {
		setSort(event.target.value);
	};
	return (
		<div>
			<form>
				<label>
					Sort current tasks by: 
				</label>
				<select
					name="sort"
					onChange={handleChange}
					className="sort-select"
				>
					<option value="deadline">Deadline</option>
					<option value="name">Name</option>
				</select>
			</form>
		</div>
	);
};

export default Sort;


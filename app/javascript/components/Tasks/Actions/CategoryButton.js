
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './Actions.css';

const CategoryButton = (props) => {
	let navigate = useNavigate();
	const category = props.category;
	const url = '/category/' + category;
	return (
		<>
			<Button 
				className="category-btn"
				variant="info"
				onClick={() => navigate(url)} 
			>
				{category}
			</Button>
		</>
	);
};

export default CategoryButton;
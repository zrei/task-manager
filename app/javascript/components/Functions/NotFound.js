
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './Functions.css';

const NotFound = () => {
	let navigate = useNavigate();
	return (
		<div className="not-found-box">
			<h1>Sorry!</h1>
			<p>What you were looking for could not be found.</p>
			<Button variant="primary" onClick={() => navigate('/')}>
				Home
			</Button>
		</div>
	);
};

export default NotFound;
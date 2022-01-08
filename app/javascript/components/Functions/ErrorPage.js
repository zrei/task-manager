
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './Functions.css';

const ErrorPage = () => {
	let navigate = useNavigate();
	return (
		<div className="error-box">
			<h1>Oops!</h1>
			<p>Something went wrong.</p>
			<Button variant="primary" onClick={() => navigate('/')}>Home</Button>
		</div>
	);
};

export default ErrorPage;
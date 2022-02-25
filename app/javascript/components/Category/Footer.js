
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
	let navigate = useNavigate();
	return (
		<>
			<Button variant="success" onClick={() => navigate('/')}>
				Home
			</Button>
		</>
	);
};

export default Footer;
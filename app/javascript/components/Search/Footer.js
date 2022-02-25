
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../Tasks/Actions/SearchBar';

const Footer = () => {
	let navigate = useNavigate();
	return (
		<>
			<Button className="first-btn" variant="success" onClick={() => navigate('/')}>
				Home
			</Button>
			<SearchBar message="Search again?"/>
		</>
	);
};

export default Footer;
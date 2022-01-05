
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const nodeadline = [];

const numsubtasks = <li key={numsubtasks} >5</li>;

const TestButton = () => {
	return (
		<div className="d-grid gap-2">
  		<Button variant="primary" size="lg">
    		NAME OF THE TASK
    		<ul>
    			{nodeadline}
    			{numsubtasks}
    		</ul>
  		</Button>
  		<Button variant="primary" size="lg">
    		NAME OF THE TASK
    		<ul>
    			<li>12/08/2022</li>
    			<li>0</li>
    		</ul>
  		</Button>
  		</div>
	);
};

export default TestButton;
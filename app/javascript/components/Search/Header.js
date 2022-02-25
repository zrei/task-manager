
import React from 'react';

const Header = (props) => {
	const searchTerm = props.searchTerm;
	const numResults = props.numResults;
	return (
		<div>
			<span className="search-title">Searching For: {searchTerm}</span><br />
			Number of Results: <u><b>{numResults}</b></u>
		</div>
	);
};

export default Header;

import React from 'react';

const ConvertDeadline = (deadline) => {
	const deadlinestring = deadline.toString();
	return (
		<>
			{deadlinestring.slice(8, 10)}/{deadlinestring.slice(5, 7)}/{deadlinestring.slice(0,4)}
		</>
	);
};

export default ConvertDeadline;
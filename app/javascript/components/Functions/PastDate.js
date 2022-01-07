
import React from 'react';

const PastDate = (secondDate) => {
	const today = new Date();
	const d2 = Date.parse(secondDate);
	return d2 < today;
}

export default PastDate;
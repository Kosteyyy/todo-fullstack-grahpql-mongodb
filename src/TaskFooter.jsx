import React from 'react';
import Filter from './Filter.jsx';
import { FooterCounter, ShowDateButton } from './styles.js';

export default function TaskFooter({ taskCount, setFilter, showDate, onChangeShowDate }) {
	return (
		<React.Fragment>
			<FooterCounter>{taskCount} active tasks</FooterCounter>
			<Filter setFilter={setFilter} />
			<ShowDateButton onClick={onChangeShowDate}>{showDate ? "Hide date" : "Show date"}</ShowDateButton>
		</React.Fragment>
		
	);
}
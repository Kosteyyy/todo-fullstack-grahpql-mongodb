import React from 'react';
import Filter from './Filter.jsx';
import { FooterCounter, ShowDateButton, FooterContainer } from './styles.js';

export default function TaskFooter({ taskCount, setFilter, showDate, onChangeShowDate }) {
	return (
		<FooterContainer>
			<FooterCounter>{taskCount} active tasks</FooterCounter>
			<Filter setFilter={setFilter} />
			<ShowDateButton onPress={onChangeShowDate} title={showDate ? "Hide date" : "Show date"} />
		</FooterContainer>
		
	);
}

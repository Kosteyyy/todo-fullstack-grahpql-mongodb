import React from 'react';
import Filter from './Filter.jsx';
import { FooterCounter, ShowDateButton, FooterContainer, InlineContainer } from './styles.js';

export default function TaskFooter({ taskCount, setFilter, showDate, onChangeShowDate }) {
	return (
		<FooterContainer>
			<FooterCounter>{taskCount} active tasks</FooterCounter>
			<InlineContainer style={{justifyContent : "space-between"}}>
				<Filter setFilter={setFilter} />
				<ShowDateButton style={{ marginRight: 100 }} onPress={onChangeShowDate} title={showDate ? "Hide date" : "Show date"} />
			</InlineContainer>
			
		</FooterContainer>
		
	);
}

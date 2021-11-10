import React from 'react';

export default function TaskFooter({ taskCount }) {
	return (
		<React.Fragment>
			<div>{taskCount} active tasks</div>
		</React.Fragment>
		
	);
}
import React from 'react';
import { FilterButton } from "./styles.js";

export default class Filter extends React.Component {
	//Implement filter buttons and pass to parents filter Name via props.setFilter
	constructor(props) {
		super(props)
		this.state = {
			activeFilter: 'All'
		};
	}

	render () {
		const filters = ['All', 'Active', 'Completed'];
		
		return (
			<>
				{filters.map((filter, i) => <FilterButton 
						onClick={() => {
							this.setState({ activeFilter: filter });
							this.props.setFilter(filter)
						}} 
						key={i} 
						className={this.state.activeFilter===filter ? "active" : ""}
					>
						{filter}
					</FilterButton>
				)}
			</>
		)
	}
}


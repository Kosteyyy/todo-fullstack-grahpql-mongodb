import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FilterButton, InlineContainer } from "./styles.js";

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
			<InlineContainer>
				{filters.map((filter, i) => 
					<View key={i} style={{ marginLeft: 10 }}>
						<FilterButton 
							onPress={() => {
								this.setState({ activeFilter: filter });
								this.props.setFilter(filter)
							}} 
							color={this.state.activeFilter===filter ? "peru" : "skyblue"}
							title={filter}
						/>
					</View>
				)}
			</InlineContainer>
		)
	}
}

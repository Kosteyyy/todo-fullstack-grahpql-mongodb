import React, { useState } from 'react';
import { FilterButton } from "./styles.js";

export default function Filter({ setFilter }) {
	const filters = ['All', 'Active', 'Completed'];
	const [activeFilter, setActiveFilter] = useState('All');

	return (
		<>
			{filters.map((filter, i) => <FilterButton onClick={() => {setActiveFilter(filter); setFilter(filter)}} key={i} className={activeFilter===filter ? "active" : ""}>{filter}</FilterButton>)}
		</>
	)
}
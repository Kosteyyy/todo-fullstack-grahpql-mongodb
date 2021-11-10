const initialState = {
	tasks: [
		{	
			id: 1,
			status: "active",
			title: "Fix bug in line 8",
			description: "Short description",
			created: "2021-10-15",
		},
		{	
			id: 2,
			status: "completed",
			title: "Kill Bill",
			description: "Long description",
			created: "2021-10-17",
		},
		{	
			id: 3,
			status: "active",
			title: "Win a JackPot",
			description: "Long description",
			created: "2021-10-17",
		},
]};


export default function reducer(state = initialState, action) {
	switch (action.type) {
		default: return state;
	}
}
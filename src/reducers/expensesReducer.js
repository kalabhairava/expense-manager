const expenseReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.payload];
		case 'REMOVE_EXPENSE':
			return state.filter(expense => expense.id !== action.payload.id);
		case 'EDIT_EXPENSE':
			return state.map(expense => {
				if (expense.id === action.payload.id) {
					return {
						...expense,
						...action.payload.updates
					};
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};

export default expenseReducer;

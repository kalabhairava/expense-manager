import uuid from 'uuid';

// Add expense
export const addExpense = ({
	description = '',
	note = '',
	amount = '',
	createdAt = 0
} = {}) => ({
	type: 'ADD_EXPENSE',
	payload: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

// Remove expense
export const removeExpense = ({ id }) => ({
	type: 'REMOVE_EXPENSE',
	payload: {
		id
	}
});

// Edit expense
export const editExpense = ({ id, updates }) => ({
	type: 'EDIT_EXPENSE',
	payload: {
		id,
		updates
	}
});

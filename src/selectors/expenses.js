const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter(expense => {
			const startDateMatch =
				typeof startDate !== 'number' || expense.createdAt >= startDate;
			const endDateMatch =
				typeof endDate !== 'number' || expense.createdAt <= endDate;
			const textMatch = expense.description
				.toLowercase()
				.includes(text.toLowercase());

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1; // createdAt is number of milliseconds since epoch timte.
			} else if (sortBy === 'amount') {
				return a.amount < b.amount ? -1 : 1;
			} else {
				return 0;
			}
		});
};

export default getVisibleExpenses;

import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer';

export default () => {
	return createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer
		})
	);
};

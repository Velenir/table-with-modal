import {combineReducers} from 'redux';
import {REMOVE_PAYMENT, SAVE_AND_CLOSE_MODAL} from "../actions/actionTypes";

export function rowReducer(state = {}, action) {
	switch (action.type) {
		case REMOVE_PAYMENT:
			return {...state, addedPayment: null};
		case SAVE_AND_CLOSE_MODAL:
			return {
				...state,
				// не уверен как считается экономия (saving)
				addedPayment: {value: action.value, saving: 25000}
			};
		default:
			return state;
	}
}

export function rowsReducer(state = [], action) {
	switch (action.type) {
		case REMOVE_PAYMENT:
		case SAVE_AND_CLOSE_MODAL:
			{
				const {rowInd} = action;
				const newRow = rowReducer(state[rowInd], action);
				return state.map((row, i) => i === rowInd ? newRow : row);
			}
		default:
			return state;
	}
}

export default combineReducers({
	head: (state = []) => state,
	rows: rowsReducer
});

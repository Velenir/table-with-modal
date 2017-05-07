import {createStore} from 'redux';
import reducer from "../reducers";

function getDefaultInitialState() {
	return {
		tableData: {
			head: ["№", "Дата", "Сумма переплат", "Остаток задолженности", "Основной долг", "Начисленные проценты", "Платеж"],
			rows: [
				{date: "05.16", values: [30000, 3450000, 10000, 30000, 40000], disabled: true},
				{date: "06.16", values: [60000, 3440000, 10000, 30000, 40000], focused: true},
				{date: "07.16", values: [90000, 3430000, 10000, 30000, 40000], addedPayment: {value: 10000, saving: 25000}},
				{date: "08.16", values: [120000, 3420000, 10000, 30000, 40000]},
			]
		},
		currency: "i"
	};
}

export default function createMyStore(initialState = getDefaultInitialState()) {
	// eslint-disable-next-line no-underscore-dangle
	return createStore(reducer, initialState, process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
		serialize: {
			options: {
				symbol: true
			}
		}
	}) : undefined);
}

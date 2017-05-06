import {createStore} from 'redux';

function getDefaultInitialState() {
	return {
		head: ["№", "Дата", "Сумма переплат", "Остаток задолженности", "Основной долг", "Начисленные проценты", "Платеж"],
		rows: [
			{date: "05.16", values: ["30 000", "3 450 000", "10 000", "30 000", "40 000"], disabled: true},
			{date: "06.16", values: ["60 000", "3 440 000", "10 000", "30 000", "40 000"], focused: true},
			{date: "07.16", values: ["90 000", "3 430 000", "10 000", "30 000", "40 000"], addedPayment: {value: "10 000", saving: "25 000"}},
			{date: "08.16", values: ["120 000", "3 420 000", "10 000", "30 000", "40 000"]},
		],
		currency: "i"
	};
}

export default function createMyStore(initialState = getDefaultInitialState()) {
	// eslint-disable-next-line no-underscore-dangle
	return createStore(st => st, initialState, process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
		serialize: {
			options: {
				symbol: true
			}
		}
	}) : undefined);
}

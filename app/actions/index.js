import * as TYPES from "./actionTypes";

export function openModal(rowInd) {
	return {
		type: TYPES.OPEN_MODAL,
		rowInd
	};
}

export function closeModal() {
	return {
		type: TYPES.CLOSE_MODAL
	};
}

export function saveAndCloseModal(rowInd, value) {
	return {
		type: TYPES.SAVE_AND_CLOSE_MODAL,
		rowInd,
		value
	};
}

export function removePayment(rowInd) {
	return {
		type: TYPES.REMOVE_PAYMENT,
		rowInd
	};
}

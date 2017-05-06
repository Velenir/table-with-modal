import * as TYPES from "./actionTypes";

export function openModal() {
	return {
		type: TYPES.OPEN_MODAL
	};
}

export function closeModal() {
	return {
		type: TYPES.CLOSE_MODAL
	};
}

export function saveAndCloseModal() {
	return {
		type: TYPES.SAVE_AND_CLOSE_MODAL
	};
}

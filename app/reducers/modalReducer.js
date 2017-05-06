import {OPEN_MODAL, CLOSE_MODAL, SAVE_AND_CLOSE_MODAL} from "../actions/actionTypes";

export default function(state = {open: false, rowInd: null}, action) {
	switch (action.type) {
		case OPEN_MODAL:
			return {open: true, rowInd: action.rowInd};
		case CLOSE_MODAL:
		case SAVE_AND_CLOSE_MODAL:
			return {open: false, rowInd: null};
		default:
			return state;
	}
}
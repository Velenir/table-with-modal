import {combineReducers} from 'redux';

import tableData from './tableDataReducer';
import modal from './modalReducer';


export default combineReducers({
	tableData,
	modal,
	currency: (val = "i") => val
});

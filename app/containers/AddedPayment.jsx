import {connect} from 'react-redux';
import {removePayment} from '../actions';

import AddedPayment from '../components/AddedPayment';


const mapStateToProps = ({tableData, currency}, {rowInd}) => ({
	currency,
	...tableData.rows[rowInd].addedPayment
});

export default connect(mapStateToProps, {removePayment})(AddedPayment);
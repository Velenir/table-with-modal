import {connect} from 'react-redux';
import {openModal, removePayment} from '../actions';

import TableRow from '../components/TableRow';


const mapStateToProps = ({tableData: {rows}, currency}, {ind}) => ({row: rows[ind], currency});


export default connect(mapStateToProps, {openModal, removePayment})(TableRow);
import {connect} from 'react-redux';
import {saveAndCloseModal} from '../actions';

import AddPaymentDialog from '../components/AddPaymentDialog';


const mapStateToProps = ({modal: {rowInd}, currency}) => ({rowInd, currency});

export default connect(mapStateToProps, {saveAndCloseModal})(AddPaymentDialog);
import {connect} from 'react-redux';
import {closeModal} from '../actions';

import Modal from '../components/Modal';


const mapStateToProps = ({modal}) => ({open: modal.open});

export default connect(mapStateToProps, {closeModal})(Modal);
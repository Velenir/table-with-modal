import {connect} from 'react-redux';
import * as actions from '../actions';

import Main from '../components/Main';


const mapStateToProps = ({tableData, currency}) => ({...tableData, currency});
const mapActionsToProps = {...actions, closeModal: undefined, saveAndCloseModal: undefined};


export default connect(mapStateToProps, mapActionsToProps)(Main);
import {connect} from 'react-redux';
import * as actions from '../actions';

import Main from '../components/Main';


const mapStateToProps = state => state;


export default connect(mapStateToProps, actions)(Main);
import {connect} from 'react-redux';
import Table from '../components/Table';

const mapStateToProps = ({tableData: {rows, head}, currency}) => ({
	rowsLength: rows.length,
	currency,
	head
});

export default connect(mapStateToProps)(Table);
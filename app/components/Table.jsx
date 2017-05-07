import React, {Component} from 'react';
import TableRow from "../containers/TableRow";
import TableHeadRow from "./TableHeadRow";

import "../styles/table.scss";

export default class Table extends Component {
	getTableRows() {
		const {rowsLength} = this.props, rows = [];
		
		for (let i = 0; i < rowsLength; ++i) {
			rows.push(<TableRow key={i} ind={i}/>);
		}
		
		return rows;
	}
	
	render() {
		return (
			<table className="table-contents">
				<thead className="table-contents__head">
					<TableHeadRow row={this.props.head}/>
				</thead>
				<tbody className="table-contents__body">
					{this.getTableRows()}
				</tbody>
			</table>
		);
	}
}

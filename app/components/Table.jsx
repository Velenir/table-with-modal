import React, {Component} from 'react';
import TableRow from "./TableRow";
import TableHeadRow from "./TableHeadRow";

export default class Table extends Component {
	render() {
		const {head, rows, currency} = this.props;
		
		return (
			<table className="table-contents">
				<thead className="table-contents__head">
					<TableHeadRow row={head}/>
				</thead>
				<tbody className="table-contents__body">
					{rows.map((row, i) => <TableRow key={i} row={row} ind={i} currency={currency}/>)}
				</tbody>
			</table>
		);
	}
}

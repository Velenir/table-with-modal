import React, {Component} from 'react';
import TableRow from "./TableRow";

export default class Table extends Component {
	render() {
		const {head, rows, currency} = this.props;
		
		return (
			<table className="table-contents">
				<thead className="table-contents__head">
					<tr>
						{head.map((title, i) => <th key={i}>{title}</th>)}
						<th></th>
					</tr>
				</thead>
				<tbody className="table-contents__body">
					{rows.map((row, i) => <TableRow key={i} row={row} ind={i} currency={currency}/>)}
				</tbody>
			</table>
		);
	}
}

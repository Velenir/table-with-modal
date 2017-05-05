import React, {Component} from 'react';
import TableRow from "./TableRow";

export default class Table extends Component {
	render() {
		const {head, rows, currency} = this.props;
		
		return (
			<table className="table-contents">
				<thead>
					<tr>
						{head.map((title, i) => <th key={i}>{title}</th>)}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, i) => <TableRow key={i} row={row} ind={i} currency={currency}/>)}
				</tbody>
			</table>
		);
	}
}

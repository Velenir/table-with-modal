import React, {Component} from 'react';
import TableRow from "./TableRow";

export default class Table extends Component {
	render() {
		const {head, rows} = this.props;
		
		return (
			<table className="table-contents">
				<thead>
					<tr>
						{head.map((title, i) => <th key={i}>{title}</th>)}
					</tr>
				</thead>
				<tbody>
					{rows.map((val, i) => <TableRow key={i} values={val} ind={i}/>)}
				</tbody>
			</table>
		);
	}
}

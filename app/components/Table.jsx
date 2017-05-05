import React, {Component} from 'react';

const headCells = ["No", "Дата", "Сумма переплат", "Остаток задолженности", "Основной долг", "Начисленные проценты", "Платеж"];

export default class Table extends Component {
	render() {
		return (
			<table>
				<thead>
					<tr>
						{headCells.map((title, i) => <th key={i}>{title}</th>)}
					</tr>
				</thead>
			</table>
		);
	}
}

import React from 'react';
 
const TableRow = ({row: {date, values}, ind, currency}) => (
	<tr>
		<td>{ind}</td>
		<td>{date}</td>
		{values.map((val, i) => <td key={i}>{val} <span className="rouble">{currency}</span></td>)}
		<td><a href="#">Добавить платеж</a></td>
	</tr>
);

export default TableRow;
import React from 'react';
 
const TableRow = ({values, ind}) => (
	<tr>
		<td>{ind}</td>
		{values.map((val, i) => <td key={i}>{val}</td>)}
		<td><a href="#">Добавить платеж</a></td>
	</tr>
);

export default TableRow;
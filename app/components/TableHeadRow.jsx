import React from 'react';
 
const TableHead = ({row}) => (
	<tr>
		{row.map((title, i) => <th key={i}>{title}</th>)}
		<th></th>
	</tr>
);

export default TableHead;
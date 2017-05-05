import React from 'react';
import AddedPayment from "./AddedPayment";

// conditional classes
const moreClasses = ({disabled, focused}) => {
	let classNames = "";
	if(focused) classNames += " table-contents__row--focused";
	if(disabled) classNames += " table-contents__row--disabled";
	
	return classNames;
};
 
const TableRow = ({row, row: {date, values, addedPayment}, ind, currency}) => (
	<tr className={"table-contents__row" + moreClasses(row)}>
		<td>{ind}</td>
		<td>{date}</td>
		{values.map((val, i) => <td key={i}>{val} <span className="rouble">{currency}</span></td>)}
		<td>
			{addedPayment ? <AddedPayment {...addedPayment} currency={currency}/> : <a href="#" className="button table-contents__button">Добавить платеж</a>}
		</td>
	</tr>
);

export default TableRow;
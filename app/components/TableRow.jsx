import React from 'react';
import AddedPayment from "./AddedPayment";
import ControlButton from "./ControlButton";

// conditional classes
const moreClasses = ({disabled, focused}) => {
	let classNames = "";
	if(focused) classNames += " table-contents__row--focused";
	if(disabled) classNames += " table-contents__row--disabled";
	
	return classNames;
};
 
const TableRow = ({row, row: {date, values, addedPayment, disabled}, ind, currency, onButtonClicked}) => (
	<tr className={"table-contents__row" + moreClasses(row)}>
		<td>{ind+1}</td>
		<td>{date}</td>
		{values.map((val, i) => <td key={i}>{val} <span className="rouble">{currency}</span></td>)}
		<td>
			{addedPayment ? <AddedPayment {...addedPayment} currency={currency}/> :
				<ControlButton className="button table-contents__button"
					onClick={disabled ? undefined : onButtonClicked}>
					Добавить платеж
				</ControlButton>}
		</td>
	</tr>
);

export default TableRow;
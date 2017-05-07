import React, {Component} from 'react';
import AddedPayment from "../containers/AddedPayment";
import ControlButton from "./ControlButton";

import {formatMoney} from "../helpers";

// conditional classes
const moreClasses = ({disabled, focused}) => {
	let classNames = "";
	if(focused) classNames += " table-contents__row--focused";
	if(disabled) classNames += " table-contents__row--disabled";
	
	return classNames;
};
 
class TableRow extends Component {
	onButtonClicked = () => {
		const {ind, openModal} = this.props;
		openModal(ind);
	}
	
	render() {
		const {row, row: {date, values, addedPayment, disabled}, ind, currency} = this.props;
		
		return (
			<tr className={"table-contents__row" + moreClasses(row)}>
				<td>{ind+1}</td>
				<td>{date}</td>
				{values.map((val, i) => <td key={i} className="rouble">{formatMoney(val, currency)}</td>)}
				<td>
					{addedPayment ? <AddedPayment rowInd={ind}/> :
						<ControlButton className="button table-contents__button"
							onClick={disabled ? undefined : this.onButtonClicked}>
							Добавить платеж
						</ControlButton>}
				</td>
			</tr>
		);
	}
}

export default TableRow;

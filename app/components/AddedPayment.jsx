import React, {Component} from 'react';

import "../styles/addedPayment.scss";
import CloseButton from "./CloseButton";

import {formatMoney} from "../helpers";

class AddedPayment extends Component {
	removePayment = () => {
		const {removePayment, rowInd} = this.props;
		removePayment(rowInd);
	}
	render() {
		const {value, saving, currency} = this.props;
		
		return (
			<div className="added-payment">
				<CloseButton className="added-payment__button" onClick={this.removePayment}/>
				<div>
					<p className="added-payment__value rouble">{formatMoney(value)}</p>
					<p className="added-payment__saving rouble">Экономия {formatMoney(saving)}</p>
				</div>
			</div>
		);
	}
}

export default AddedPayment;
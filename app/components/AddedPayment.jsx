import React, {Component} from 'react';

import "../styles/addedPayment.scss";
import CloseButton from "./CloseButton";
 
// const AddedPayment = ({value, saving, currency}) => (
// 	<div className="added-payment">
// 		<a className="close-button added-payment__button" href="#"><CloseButton height="100%" width={undefined}/></a>
// 		<div>
// 			<p className="added-payment__value">{value} <span className="rouble">{currency}</span></p>
// 			<p className="added-payment__saving">{saving} <span className="rouble">{currency}</span></p>
// 		</div>
// 	</div>
// );


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
					<p className="added-payment__value">{value} <span className="rouble">{currency}</span></p>
					<p className="added-payment__saving">Экономия {saving} <span className="rouble">{currency}</span></p>
				</div>
			</div>
		);
	}
}

export default AddedPayment;
import React from 'react';

import "../styles/addedPayment.scss";
import CloseButton from "../images/closeButton.svg";
 
const AddedPayment = ({value, saving, currency}) => (
	<div className="added-payment">
		<a className="close-button added-payment__button" href="#"><CloseButton height="100%" width={undefined}/></a>
		<div>
			<p className="added-payment__value">{value} <span className="rouble">{currency}</span></p>
			<p className="added-payment__saving">{saving} <span className="rouble">{currency}</span></p>
		</div>
	</div>
);

export default AddedPayment;
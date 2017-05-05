import React from 'react';
 
const AddedPayment = ({value, saving, currency}) => (
	<div className="added-payment">
		<a className="close-button added-payment__button" href="#">X</a>
		<div>
			<p className="added-payment__value">{value} <span className="rouble">{currency}</span></p>
			<p className="added-payment__saving">{saving} <span className="rouble">{currency}</span></p>
		</div>
	</div>
);

export default AddedPayment;
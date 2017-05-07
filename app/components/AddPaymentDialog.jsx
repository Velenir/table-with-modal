import React, {Component} from 'react';
import ControlButton from "./ControlButton";
import MoneyInput from "./MoneyInput";

class AddPaymentDialog extends Component {
	state = {buttonDisabled: true}
	
	onSaveClicked = () => {
		const val = this.input.value;
		if(val == null || val <= 0) return;
		
		const {rowInd, saveAndCloseModal} = this.props;
		saveAndCloseModal(rowInd, val);
	}
	
	onInputChange = () => {
		const inputInvalid = !this.input.checkValidity();
		
		if(this.state.buttonDisabled !== inputInvalid) {
			this.setState({
				buttonDisabled: inputInvalid
			});
		}
	}
	
	render() {
		return (
			<div>
				<h3 className="modal__title">Сумма платежа</h3>
				<MoneyInput className="modal__input" ref={c => this.input = c} onChange={this.onInputChange} currency={this.props.currency}/>
				<div className="modal__controls">
					<ControlButton className="modal__controls__button" onClick={this.onSaveClicked} disabled={this.state.buttonDisabled}>
						Сохранить
					</ControlButton>
				</div>
			</div>
		);
	}
}

export default AddPaymentDialog;
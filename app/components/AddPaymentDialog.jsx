import React, {Component} from 'react';
import ControlButton from "./ControlButton";
import MoneyInput from "./MoneyInput";

class AddPaymentDialog extends Component {
	onSaveClicked = () => {
		const {rowInd, saveAndCloseModal} = this.props;
		saveAndCloseModal(rowInd, this.input.value);
	}
	
	render() {
		return (
			<div>
				<h3 className="modal__title">Сумма платежа</h3>
				<input type="text" className="modal__input" defaultValue="0 a" ref={c => this.input = c}/>
				<MoneyInput className="modal__input"/>
				<div className="modal__controls">
					<ControlButton className="modal__controls__button" onClick={this.onSaveClicked}>
						Сохранить
					</ControlButton>
				</div>
			</div>
		);
	}
}

export default AddPaymentDialog;
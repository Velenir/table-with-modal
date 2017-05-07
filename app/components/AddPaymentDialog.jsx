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
		// this.setState({
		// 	buttonDisabled: !this.input.checkValidity()
		// });
	}
	
	render() {
		return (
			<div>
				<h3 className="modal__title">Сумма платежа</h3>
				<input type="text" className="modal__input" defaultValue="0 a" ref={c => this.input = c}/>
				<MoneyInput className="modal__input" ref={c => this.input = c} onChange={this.onInputChange} currency={this.props.currency}/>
				<div className="modal__controls">
					<ControlButton className="modal__controls__button" onClick={this.onSaveClicked} disabled={this.state.buttonDisabled}>
						Сохранить
					</ControlButton>
				</div>
			</div>
		);
	}
	
	componentDidUpdate(prevProps, prevState) {
		const updatedProps = {};
		for(let prop in prevProps) {
			const prevProp = prevProps[prop];
			const currentProp = this.props[prop];
			if(prevProp !== currentProp) {
				updatedProps[prop] = `${prevProp} -> ${currentProp}`;
			}
		}
		
		const updatedState = {};
		for(let prop in prevState) {
			const prevProp = prevState[prop];
			const currentProp = this.state[prop];
			if(prevProp !== currentProp) {
				updatedState[prop] = `${prevProp} -> ${currentProp}`;
			}
		}
		console.log(`AddPaymentDialog UPDATED with props`, updatedProps);
		console.log(`AddPaymentDialog UPDATED with state`, updatedState);
	}
	
	shouldComponentUpdate() {
		return false;
	}
}

export default AddPaymentDialog;
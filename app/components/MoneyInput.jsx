import React, {Component} from 'react';

import {formatMoney} from "../helpers";
import "../styles/moneyInput.scss";


class MoneyInut extends Component {
	state = {value: " ₽", caretColor: "auto"}
	
	onChange = (e) => {
		const {target, target: {value}} = e;
		const oldValue = this.state.value;
		let start = target.selectionStart;
		let newValue = value.replace(/\D/g, "");
		
		if(newValue === "") {
			this.setState({value: " ₽"}, this.resetCaret);
			newValue !== oldValue && this.props.onChange && this.props.onChange(e);
			return;
		}
		
		newValue = formatMoney(parseInt(newValue));
		
		// fixes caret jump on invalid (non-numeric) paste
		if(newValue === oldValue) {
			start -= value.length - oldValue.length;
		}
		
		// account for adding spaces (e.g. 1 000)
		if(newValue.length - value.length > 0) {
			++start;
		}
		
		// don't allow carret past rouble symbol
		if(start > newValue.length - 2) start = newValue.length - 2;
		
		this.setState({
			value: newValue
		}, () => {
			// asynchronously (after re-render) move caret to the calculated offset
			target.selectionStart = target.selectionEnd = start;
			newValue !== oldValue && this.props.onChange && this.props.onChange(e);
		});
		
	}
	
	onKeyDown(e) {
		const {key, target} = e;
		const {selectionStart: start, selectionEnd: end, value: {length}} = target;
		
		// don't allow caret past rouble symbol
		switch (key) {
			case "ArrowRight":
				if(!e.shiftKey && end > length - 3) {
					// start !== end accounts for ongoing selection
					target.selectionEnd = length - (start !== end ? 2 : 3);
					// fixes not being able to scroll past rouble symbol when text overflows input
					target.scrollLeft = target.scrollWidth;
				}
				break;
			case "ArrowDown":
			case "End":
				target.selectionStart = target.selectionEnd = length - 2;
				target.scrollLeft = target.scrollWidth;
				e.preventDefault();
				break;
			default:
		}
	}
	
	onClick = ({target}) => {
		const len = target.value.length;
		this.setState({
			caretColor: "auto"
		});
		
		// when previously had selection start and end are reported stale
		// correct stats on the next tick
		requestAnimationFrame(() => {
			if(target.selectionStart > len - 2 && target.selectionStart === target.selectionEnd) {
				target.selectionStart = target.selectionEnd = len - 2;
			}
		});
		
	}

	onMouseDown = () => {
		// hide caret to avoid visual jump
		this.setState({
			caretColor: "transparent"
		});
	}
	
	resetCaret = () => {
		this.input.selectionStart = this.input.selectionEnd = 0;
	}
	
	componentDidMount() {
		this.resetCaret();
	}
	
	checkValidity() {
		return this.input.checkValidity();
	}
	
	render() {
		return (
			<input type="text" className={"money-input " + (this.props.className || "")}
				value={this.state.value} onChange={this.onChange} onKeyDown={this.onKeyDown}
				onClick={this.onClick} onMouseDown={this.onMouseDown}
				ref={c => this.input = c} autoFocus
				style={{caretColor: this.state.caretColor}}
				pattern="^[1-9]\d{0,2}\s(\d{1,3}\s)*₽$"
			/>
		);
	}
}

export default MoneyInut;
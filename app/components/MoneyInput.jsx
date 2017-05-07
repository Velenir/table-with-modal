import React, {PureComponent} from 'react';

import {formatMoney} from "../helpers";
import "../styles/moneyInput.scss";


class MoneyInut extends PureComponent {
	currencySymbol = formatMoney(0, this.props.currency).slice(-1)
	suffix = " " + this.currencySymbol
	suffixLength = this.suffix.length
	
	state = {value: this.suffix, caretColor: "auto"}
	
	onChange = (e) => {
		const {target, target: {value}} = e;
		const oldValue = this.state.value;
		let start = target.selectionStart;
		let newValue = value.replace(/\D/g, "");
		
		if(newValue === "") {
			if(newValue === oldValue.slice(0, -2)) {
				requestAnimationFrame(this.resetCaret);
				return;
			}
			this.setState({value: this.suffix}, this.resetCaret);
			newValue !== oldValue && this.props.onChange && this.props.onChange(e);
			return;
		}
		
		newValue = formatMoney(parseInt(newValue), this.props.currency);
		
		// fixes caret jump on invalid (non-numeric) paste
		if(newValue === oldValue) {
			// delay effect till after reflow(?)
			requestAnimationFrame(() => {
				target.selectionStart = target.selectionEnd = start - (value.length - newValue.length);
			});
			return;
		}
		
		// account for adding spaces (e.g. 1 000)
		if(newValue.length - value.length > 0) {
			++start;
		}
		
		// don't allow carret past rouble symbol
		if(start > newValue.length - this.suffixLength) start = newValue.length - this.suffixLength;
		
		this.setState({
			value: newValue
		}, () => {
			// asynchronously (after re-render) move caret to the calculated offset
			target.selectionStart = target.selectionEnd = start;
			newValue !== oldValue && this.props.onChange && this.props.onChange(e);
		});
		
	}
	
	onKeyDown = (e) => {
		const {key, target} = e;
		const {selectionStart: start, selectionEnd: end, value: {length}} = target;
		
		// don't allow caret past rouble symbol
		switch (key) {
			case "ArrowRight":
				if(!e.shiftKey && end > length - this.suffixLength - 1) {
					// start !== end accounts for ongoing selection
					target.selectionEnd = length - this.suffixLength - (start !== end ? 0 : 1);
					// fixes not being able to scroll past rouble symbol when text overflows input
					target.scrollLeft = target.scrollWidth;
				}
				break;
			case "ArrowDown":
			case "End":
				target.selectionStart = target.selectionEnd = length - this.suffixLength;
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
		
		// when previously had a selection, start and end are reported stale
		// correct stats on the next tick
		requestAnimationFrame(() => {
			if(target.selectionStart > len - this.suffixLength && target.selectionStart === target.selectionEnd) {
				target.selectionStart = target.selectionEnd = len - this.suffixLength;
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
	
	get value() {
		const val = this.state.value.replace(/\D/g, "");
		return val === "" ? null : parseInt(val);
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
				pattern={`^[1-9]\\d{0,2}\\s(\\d{1,3}\\s)*${this.currencySymbol}$`}
			/>
		);
	}
}

export default MoneyInut;
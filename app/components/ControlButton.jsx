import React from 'react';
import "../styles/button.scss";
 
const ControlButton = ({children, onClick, disabled, className = ""}) => (
	<a href="#" className={"button " + (disabled ? "button--disabled " : "") + className} onClick={(e) => (e.preventDefault(), !disabled && onClick && onClick())}>
		{children}
	</a>
);

export default ControlButton;
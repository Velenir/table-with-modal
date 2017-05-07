import React from 'react';
import "../styles/button.scss";
 
const ControlButton = ({children, onClick, className = ""}) => (
	<a href="#" className={"button " + className} onClick={(e) => (e.preventDefault(), onClick && onClick())}>
		{children}
	</a>
);

export default ControlButton;
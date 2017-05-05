import React from 'react';
 
const ControlButton = ({children, onClick, className = ""}) => (
	<a href="#" className={"button " + className} onClick={(e) => (e.preventDefault(), onClick && onClick())}>
		{children}
	</a>
);

export default ControlButton;
import React from 'react';
import CloseButtonSVG from "../images/closeButton.svg";

import "../styles/closeButton.scss";
 
const CloseButton = ({onClick, className = ""}) => (
	<a href="#" className={"close-button " + className} onClick={(e) => (e.preventDefault(), onClick && onClick())}>
		<CloseButtonSVG height="100%" width={undefined}/>
	</a>
);

export default CloseButton;
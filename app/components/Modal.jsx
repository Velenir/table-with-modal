import React, {Component} from 'react';

import '../styles/modal.scss';
import CloseButton from "../images/closeButton.svg";

class Modal extends Component {
	render() {
		const {closeModal, children} = this.props;
		
		return (
			<div className="modal__overlay">
				<div className="modal__contents">
					<a className="close-button modal__close" href="#" onClick={closeModal}><CloseButton height="100%" width={undefined}/></a>
					{children}
				</div>
			</div>
		);
	}
}

export default Modal;

import React, {Component} from 'react';

import '../styles/modal.scss';
import CloseButton from "./CloseButton";

class Modal extends Component {
	render() {
		// if(!this.props.open) return null;
		
		const {closeModal, children} = this.props;
		
		return (
			<div className="modal__overlay">
				<div className="modal__contents">
					<CloseButton className="modal__close" onClick={closeModal}/>
					{children}
				</div>
			</div>
		);
	}
}

export default Modal;

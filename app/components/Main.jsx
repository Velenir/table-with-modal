import React, {Component} from 'react';

import TableTitle from "./TableTitle";
import Table from "../containers/Table";
import TableControls from "./TableControls";
import Modal from "../containers/Modal";
import AddPaymentDialog from "../containers/AddPaymentDialog";

import "../styles/main.scss";


class Main extends Component {	
	render() {
		return (
			<div className="container">
				<TableTitle/>
				<Table/>
				<TableControls/>
				<Modal>
					<AddPaymentDialog/>
				</Modal>
			</div>
		);
	}
}


export default Main;
import React from 'react';

import TableTitle from "./TableTitle";
import Table from "./Table";
import TableControls from "./TableControls";

const Main = () => (
	<div className="container">
		<TableTitle/>
		<Table/>
		<TableControls/>
	</div>
);

export default Main;
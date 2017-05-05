import React from 'react';

import TableTitle from "./TableTitle";
import Table from "./Table";
import TableControls from "./TableControls";

import "../styles/main.scss";

const tableData = {
	head: ["№", "Дата", "Сумма переплат", "Остаток задолженности", "Основной долг", "Начисленные проценты", "Платеж"],
	rows: [
		{date: "05.16", values: ["30 000", "3 450 000", "10 000", "30 000", "40 000"]},
		{date: "06.16", values: ["60 000", "3 440 000", "10 000", "30 000", "40 000"]},
		{date: "07.16", values: ["90 000", "3 430 000", "10 000", "30 000", "40 000"]},
		{date: "08.16", values: ["120 000", "3 420 000", "10 000", "30 000", "40 000"]},
	],
	currency: "i"
};

const Main = () => (
	<div className="container">
		<TableTitle/>
		<Table {...tableData}/>
		<TableControls/>
	</div>
);

export default Main;
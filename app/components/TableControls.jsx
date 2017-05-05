import React from 'react';

import ControlButton from "./ControlButton";
 
export default () => (
	<div className="table-controls">
		<ControlButton className="table-controls__button table-controls__button--save">Сохранить расчеты</ControlButton>
		<ControlButton className="table-controls__button table-controls__button--print">Распечатать</ControlButton>
	</div>
);
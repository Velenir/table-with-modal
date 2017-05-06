import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from './helpers';

import Main from './containers/Main';

const store = createStore();

render(
	<Provider store={store}>
		<Main/>
	</Provider>,
	document.getElementById("app")
);
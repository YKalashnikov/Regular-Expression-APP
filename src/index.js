import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './store';

import './styles/app.styl';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<App />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);

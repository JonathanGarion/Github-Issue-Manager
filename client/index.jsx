// Application entrypoint.

// Load up the application styles
require( './scss/main.scss' );

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App.jsx';

const store = configureStore();

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById( 'react-root' )
);

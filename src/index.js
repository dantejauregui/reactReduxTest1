import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import Pages from './pages';

//siempre se deja en general a ruta ./reducers:
import reducers from './reducers';
import './index.css';


//const store = createStore(reducers);

ReactDOM.render(
	<Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
  		<Pages />
	</Provider>,
  document.getElementById('root')
);

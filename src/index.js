import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';

//siempre se deja en general a ruta ./reducers:
import reducers from './reducers';
import './index.css';


//const store = createStore(reducers);

ReactDOM.render(
	<Provider store={createStore(reducers)}>
  	<App />
	</Provider>,
  document.getElementById('root')
);

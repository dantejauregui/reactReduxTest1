import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import App from './components/App.js';

function Pages() {
	return (
		<main role="application">
			{/* <Header /> */}

			<Router>
				{/* List de artículos */}
				<Route
					path="/"
					exact
					component={App}
				/>
				
				{/* <Route component={Error404} /> */}
			</Router>
		</main>
	);
}

export default Pages;
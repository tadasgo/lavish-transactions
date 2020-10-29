import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import App from './App';

// IconContext apply default styling to all icons in wrapped components
ReactDOM.render(
	<BrowserRouter>
		<IconContext.Provider value={{ color: '#fff' }}>
			<App />
		</IconContext.Provider>
	</BrowserRouter>,
	document.getElementById('root')
);

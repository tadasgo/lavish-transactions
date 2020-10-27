import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" />
			</Switch>
		</>
	);
}

export default App;

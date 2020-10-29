import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './pages/Footer/Footer';
import Home from './pages/HomePage/Home';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;

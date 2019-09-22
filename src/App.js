import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import JumboHome from './components/JumboHome';
import Navbar from './components/Navbar'

class App extends Component {
	render() {
		return (
			<>
				<Navbar />
				<JumboHome />
				<Footer />
			</>
		);
	}
}

export default App;

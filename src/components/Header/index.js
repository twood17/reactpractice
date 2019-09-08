import React, { Component } from 'react';
import Button from '../Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.css';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHidden: true
		};
		this.toggleHidden = this.toggleHidden.bind(this);
	}

	toggleHidden() {
		this.setState((prevState) => ({ isHidden: !prevState.isHidden }));
	}

	render() {
		return (
			<Row className="headerTesting">
				<Col sm={9} className="logo">PREPAIRED</Col>
				<Col sm={2}>
					<Button onClick={this.toggleHidden} className="logIn">
						{this.state.isHidden ? "Log In" : "Logoff"}
					</Button>
					<Button className="signUp">
						Sign Up
					</Button>
				</Col>
			</Row>
		);
	}
}

export default Header;

import React, { Component } from 'react';
// import logo from './logo.svg';
import GetUser from './components/getUser/GetUser';
import Projects from './components/projects/Projects';
import Login from './components/login/Login';
import './App.css';

class App extends Component {

	render() {
		return (
			<div className="App">
				<aside className="aside">
					<nav className="aside__menu">
						<li className="aside__menu-item">User</li>
						<li className="aside__menu-item">Projects</li>
						<li className="aside__menu-item">testlol</li>
					</nav>
				</aside>
				<section className="main">
					<Projects />
					{/* <GetUser /> */}
					{/* <Login /> */}
				</section>
			</div>
		);
	}
}

export default App;

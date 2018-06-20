import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			id: '',
			location: '',
			avatar: ''
		}
	}

	getUser(username) {
		return fetch(`https://api.github.com/users/${ username }`)
		.then( response => response.json() )
		.then( response => {
			console.log( "response: " , response )
			return response;
		})
	}

	async handleSubmit(e) {
		e.preventDefault();
		let user = await this.getUser( this.refs.username.value );
		this.setState({ username: user.login, id: user.id, location: user.location, avatar: user.avatar_url })
		console.log( "user " , user );
	}





	render() {
		let user;
		return (
			<div className="App">
				<header className="App-header">
					<img src={ logo } className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to the jungle</h1>
				</header>
				<form onSubmit={ e => this.handleSubmit(e) }>
					<input ref="username" type="text" placeholder="username" />
				</form>
				<p className="App inro">
					{ this.state.username }<br/>
					{ this.state.id }<br/>
					{ this.state.location }<br/>
				</p>

				<img className="avatar" src={ this.state.avatar } alt={ this.state.username} />

			</div>
		);
	}
}

export default App;

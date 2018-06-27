import React, { Component } from 'react';
import logo from '../../img/logo.svg';

class GetUser extends Component {
	constructor() {
		super();
		this.state = {
			username: null,
			id: null,
			location: null,
			avatar: null,
			email: null
		}
	}

	getUser(username) {
		return fetch(`https://api.github.com/users/${ username }`)
		.then( response => response.json() )
		.then( response => {
			return response;
		})
	}

	async handleSubmit(e) {
		e.preventDefault();
		let user = await this.getUser( this.refs.username.value );
		this.setState({
			username:  user.login,
			id:        user.id,
			location:  user.location,
			avatar:    user.avatar_url,
			email:     user.email,
			followers: user.followers,
			following: user.following,
			created:   user.created_at
		})
	}



	render() {
		let user;
		let status;

		if( this.state.username ) {
			user =
			<section className="user-container">
				<div>
					<img className="avatar" src={ this.state.avatar } alt={ this.state.username} /> 
				</div>
				<p className="user-info">
					<b>username:</b> { this.state.username }<br/>
					<b>id:</b> { this.state.id }<br/>
					<b>location:</b> { this.state.location }<br/>
					<b>email:</b> { this.state.email }<br/>
					<b>followers:</b> { this.state.followers }<br/>
					<b>following:</b> { this.state.following }<br/>
					<b>created account at:</b> { this.state.created }<br/>
				</p>
			</section>
		}
		else {
			user =
				<h2>User not found</h2>
		}

		return (
			<div className="container">
				<header className="App-header">
					<img src={ logo } className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Github</h1>
				</header>
				<div className="App intro">
					<form onSubmit={ e => this.handleSubmit(e) }>
						<input ref="username" type="text" placeholder="username" />
					</form>
					{ user }
				</div>
			</div>
		);
	}
}

export default GetUser;

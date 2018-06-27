import React, { Component } from 'react';
import logo from '../../img/logo.svg';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			user: {}
		}
	}

	getUser(auth) {
		return fetch(`https://github.com/login/oauth/authorize`)
		.then( response => response.json() )
		.then( response => {
			return response;
		})
	}

	// async handleSubmit(e) {
	// 	e.preventDefault();
	// 	let user = await this.getUser( this.refs.username.value );
	// 	this.setState({
	// 		username:  user.login,
	// 		id:        user.id,
	// 		location:  user.location,
	// 		avatar:    user.avatar_url,
	// 		email:     user.email,
	// 		followers: user.followers,
	// 		following: user.following,
	// 		created:   user.created_at
	// 	})
	// }



	render() {

		return (
			<div className="container">
				<header className="App-header">
					<img src={ logo } className="App-logo" alt="logo" />
					<h1 className="App-title"> {"login"} </h1>
				</header>
				{/* <form onSubmit={ e => this.handleSubmit(e) }> */}
					<input ref="name" type="text" placeholder="username"/>
				{/* </form> */}
				{/* <div className="App intro">

				</div> */}
			</div>
		);
	}
}

export default Login;

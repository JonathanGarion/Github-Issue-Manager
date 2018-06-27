import React, { Component } from 'react';
import logo from '../../img/logo.svg';

class Projects extends Component {
	constructor() {
		super();
		this.state = {
			owner: null,
			repo: null
		}
	}

	Projects(owner, repo) {
		// return fetch(`https://api.github.com//repos/${ owner }/${ repo }/projects/`)
		return fetch(`https://api.github.com//users/JonathanGarion/repos/website/`)
		.then( response => response.json() )
		.then( response => {
			return response;
		})
	}

	async handleSubmit(e) {
		e.preventDefault();
		let user = await this.Projects( this.refs.owner.value );
		this.setState({
			owner:  Projects.owner_url,
			repo:   Projects.id
		})
	}





	render() {
		let project;

		if( this.state.owner ) {
			project =
			<section className="project__container">
				<div>
					{ this.state.owner }<br/>
					{ this.state.repo }
				</div>
			</section>
		}
		else {
			project =
			<section className="container">
				<h2>Project not found</h2>
			</section>
		}

		return (
			<div className="project">
				<header className="App-header">
					<img src={ logo } className="App-logo" alt="logo" />
					<h1 className="App-title"> {"projectname"} </h1>
				</header>
				<form onSubmit={ e => this.handleSubmit(e) }>
					<input ref="owner" type="text" placeholder="owner" />
					<input ref="repo" type="text" placeholder="repo" />
					{/* <input ref="username" type="text" placeholder="username" /> */}
				</form>
				<div className="App intro">
					{ project }
				</div>
			</div>
		);
	}
}

export default Projects;

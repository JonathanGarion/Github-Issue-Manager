import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sidebar from './components/sidebar/Sidebar';
import Datatable from './components/content/datatable/Datatable';
import Dashboard from './components/content/dashboard/Grid';
import { employeesFetchData } from './actions/employees';

class App extends Component {

	componentWillMount() {
		this.props.fetchData( 'https://api.github.com' );
	}

	render() {
		return (
			<div className='app'>
				<aside className='app__aside'>
					<Sidebar />
				</aside>
				<HashRouter>
					<section className='app__content'>
						<Route exact path="/" component={ Dashboard }/>
						<Route path="/employees" component={ Datatable }/>
					</section>
				</HashRouter>
			</div>
		);
	}
}

App.propTypes = {
	fetchData : PropTypes.func.isRequired
};

const mapDispatchToProps = ( dispatch ) => {
	return {
		fetchData : ( url ) => dispatch( employeesFetchData( url ))
	};
};

export default connect( null, mapDispatchToProps )( App );

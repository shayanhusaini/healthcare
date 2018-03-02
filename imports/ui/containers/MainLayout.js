import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../components/Header/Header';
import Home from '../pages/Home';

export default class MainLayout extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<Switch>
						<Route exact path='/' component={Home} />
					</Switch>
				</div>
			</Router>
		);
	}
}
import React from 'react';
import { Switch, Route , Redirect} from 'react-router-dom';

import Home from '../pages/Home'
import Login from '../pages/Login'

function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Login />
			</Route>
			<Route exact path="/home">
				<Home />
			</Route>
			<Route>
				<Redirect to="/" />
			</Route>
		</Switch>
	);
}

export default Routes;
import React, {
	Component
} from 'react';

import './App.css';

import {
	BrowserRouter as Router,
Redirect,Route,Switch
} from 'react-router-dom'
import wxindex from './wxcomponents/wxindex'


class App extends Component {
	render() {
		return (

			<div className = "App" >
				<Router >
				<Switch>
					<Route path='/wxindex' component={wxindex}></Route>
					<Redirect to='/wxindex' />
					</Switch>
					</Router> 
				
			</div>
		);
	}
}

export default App;

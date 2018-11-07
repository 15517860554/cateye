import React, {Component} from 'react';


import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom'
import Nav from './ddf_component/Nav'
import login from './ddf_component/login'
import register from './ddf_component/register'
class App extends Component {
	render() {
		return (

			<div className = "App" >
				<Router >
					<div>

						<Switch>
							<Route path='/Nav' component={Nav}></Route>
							<Route path='/login' component={login}></Route>
							<Route path='/register' component={register}></Route>
							<Redirect to='/Nav' />
						</Switch>
					</div>
				</Router> 
				
			</div>
		);
	}
}

export default App;

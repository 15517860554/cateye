import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link,Redirect,Switch,NavLink} from 'react-router-dom'

import Detail from './components/detail'
class App extends Component {
  render() {
    return (
      <div className="App">
       	<Router>
       		<div>
       		<Switch>
       			<Route path="/detail" component={Detail}></Route>
       			
       			<Redirect to="/detail"></Redirect>
       		</Switch>
       		</div>
       	</Router>
      </div>
    );
  }
}

export default App;

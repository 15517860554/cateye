import React from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch,NavLink} from 'react-router-dom';
class Rdxinwenzixun extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
tap(){
     console.log(this)
    //this.props.history.push('/Nav')
}
    render(){
        return(
            <div>
                <div>
                    <h1>
                    热点资讯
                    23433333333333333333343256234
                    </h1>
                    <button onClick={this.tap.bind(this)}>66666</button>
                </div>
            </div>
        )
    }
}
export default Rdxinwenzixun;
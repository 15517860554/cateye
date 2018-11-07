import React from 'react';
import {BrowserRouter as Router,Route,Link,Redirect,Switch,NavLink} from 'react-router-dom';
import $ from 'jquery'
import Rdxinwenzixun from './Rdxinwenzixun'
import './css/Dianying.css'
class Erjiredian extends React.Component{
    constructor(props){
        super(props)
        this.state={
             //二级导航选择从左到右依次1,2,3..
            num:''
        }
    }
    tap1(){
        this.setState({num:"1"})
        
    }
    tap2(){
        this.setState({num:"2"})
    }
    tap3(){
        this.setState({num:"3"})
    }
    tap4(){
        this.setState({num:"4"})
    }
    componentDidMount(){      
        $(".erji_nav ul li").on('click',function(){
            $(".erji_nav ul li").removeClass("active")
            $(".erji_nav ul li span").removeClass("active")
            $(this).addClass("active")
            $(this).children().addClass("active")
            $("#xq_1 li").removeClass("active")
            $("#xq_1 li").eq(0).addClass("active")
            $("#xq_2 li").removeClass("active")
            $("#xq_2 li").eq(0).addClass("active")
            $("#xq_3 li").removeClass("active")
            $("#xq_3 li").eq(0).addClass("active")
        })
    }
    shouldComponentUpdate(){
        return true
    }
    render(){
        //console.log(this.state.num)
        return(
            <div>
                 
                {/* 二级导航 */}              
                    <div>
                        <div className="erji_nav">
                            <ul>
                                <li className="active" onClick={this.tap1.bind(this)}>热点首页<span className="active"></span></li>                                                                     
                                <li onClick={this.tap2.bind(this)}>新闻资讯<span></span></li>
                                <li onClick={this.tap3.bind(this)}>预告片<span></span></li>
                                <li onClick={this.tap4.bind(this)}>精彩图集<span></span></li>                     
                            </ul>
                        </div>                      
                    </div>
                                  
            </div>
        )
    }
}
export default Erjiredian
import React from 'react';
//import {BrowserRouter as Router,Route,Link,Redirect,Switch,NavLink} from 'react-router-dom';
import $ from 'jquery'
import Wzf_bangdan from '../components/WangZuFeng/bangdan/wzf_b_list'

class Erjibangdan extends React.Component{
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
    tap5(){
        this.setState({num:"5"})
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
       // console.log(this.state.num)
        return(
            <div>
                {/* 二级导航 */}
                <div className="erji_nav">
                    <ul>
                        <li className="active" onClick={this.tap1.bind(this)}>热映口碑榜<span className="active"></span></li>
                        <li onClick={this.tap2.bind(this)}>最受期待榜<span></span></li>
                        <li onClick={this.tap3.bind(this)}>国内票房榜<span></span></li>
                        <li onClick={this.tap4.bind(this)}>北美票房榜<span></span></li>
                        <li onClick={this.tap5.bind(this)}>TOP100榜<span></span></li>
                    </ul>

                </div>
                <Wzf_bangdan/>
            </div>
        )
    }
}
export default Erjibangdan
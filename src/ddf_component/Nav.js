import React from "react";
import './css/Nav.css';
import $ from 'jquery';
import {BrowserRouter as Router,Route,Redirect,Switch,NavLink} from 'react-router-dom';
import Erjidianyingnav from './Erjidianyingnav';
import Erjibangdan from './Erjibangdan';
import Erjiredian from './Erjiredian';
import Yingyuan from './Yingyuan';
import Shouye from './shouye';
import img from './img/login.png'
import Wxshopcart from '../wxcomponents/wxShopcart'
import Detail from './detail'
import Wxpay from  '../wxcomponents/wxpay'
class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state={
            //城市数组
            arr:['鞍山','安庆','安阳','阿坝','安顺','安康','安吉','安岳','安平','安平','安化','安吉','安岳','安平','安化'],
            //默认城市
            pos:'郑州',
            //搜索内容
            search:''
        }
    }
    componentDidMount(){
        var _this=this;
        $("#yiji_nav li").on('click',function(){
            $("#yiji_nav li").removeClass("active")
            $(this).addClass("active")
        })
        $(".city .didian").on('click',function(){
            _this.setState({pos:$(this).html()})
        })
    }
    // 搜索功能
    search(){
        this.setState({search:this.refs.ipt.value});
        $(".city .didian").on("click",function(){
            $(".city").css("display","none")
        })
    }
    tap(){
        this.props.history.push("/login")
    }
    render(){
        //console.log(this.state.pos,this.state.search)
        return(
            <div>
                <Router>
                    <div>
                        <div className="nav_wrap">
                            <div className="nav">
                                {/* logo */}
                                <div className="logo"></div>
                                {/* 定位 */}
                                <div className="dingwei">
                                    {this.state.pos}<span></span>
                                    <div className="city">
                                        <p>定位城市：<i>{this.state.pos}</i></p>
                                        <ul>
                                            <li>
                                                <strong>A</strong>
                                                <div>
                                                    {
                                                        this.state.arr.map((item,i)=>{
                                                            return(
                                                                <div key={i} className="didian">
                                                                        {item}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </li>
                                            <li>
                                                <strong>B</strong>
                                                <div>
                                                    {
                                                        this.state.arr.map((item,i)=>{
                                                            return(
                                                                <div key={i} className="didian">
                                                                        {item}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </li>
                                            <li>
                                                <strong>C</strong>
                                                <div>
                                                    {
                                                        this.state.arr.map((item,i)=>{
                                                            return(
                                                                <div key={i} className="didian">
                                                                        {item}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </li>
                                            <li>
                                                <strong>D</strong>
                                                <div>
                                                    {
                                                        this.state.arr.map((item,i)=>{
                                                            return(
                                                                <div key={i} className="didian">
                                                                        {item}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* 一级导航 */}
                                <nav>
                                    <ul id="yiji_nav">
                                        <NavLink to='/Shouye'><li className="active nav_hover">首页</li></NavLink>
                                        <NavLink to='/Erjidianyingnav'> <li className="nav_hover" >电影</li></NavLink>
                                        <NavLink to='/Yingyuan'><li className="nav_hover">影院</li></NavLink>
                                        <NavLink to='/Erjibangdan'><li className="nav_hover">榜单</li></NavLink>
                                        <NavLink to='/Erjiredian'><li className="nav_hover">热点</li></NavLink>
                                    </ul>
                                </nav>
                                {/* 扫码APP */}
                                <div className="saoma">
                                    <span className="phone"></span>APP下载<span className="sanjiao"></span>
                                    <div className="sm_app">
                                        <p>扫码下载APP</p>
                                        <p>选座更优惠</p>
                                    </div>
                                </div>
                                {/* 搜索 */}
                                <div className="search">
                                    <input type="text" placeholder="找影视剧、影人、影院" ref="ipt"/>
                                    <input type="button" onClick={this.search.bind(this)}/>
                                </div>
                                {/* 登陆 */}
                                <div className="login">
                                    <div className="touxiang">
                                        <img src={img} alt=""/>
                                        <span></span>
                                    </div>
                                    <div className="login_hide">
                                        <p onClick={this.tap.bind(this)}>登陆</p>
                                    </div>
                            </div>
                        </div>
                        
                    </div>
                   
                        <Switch>
                            <Route path="/Shouye" component={Shouye}></Route>
                            <Route path="/Erjidianyingnav" component={Erjidianyingnav}></Route>
                            <Route path="/Yingyuan" component={Yingyuan}></Route>
                            <Route path="/Erjibangdan" component={Erjibangdan}></Route>
                            <Route path="/Erjiredian" component={Erjiredian}></Route>                            
                            <Route path="/detail" component={Detail}></Route>
														<Route path='/wxshopcart' component={Wxshopcart}></Route>
														<Route path='/wxpay' component={Wxpay}></Route>
                           <Redirect to="Shouye"></Redirect>


                        </Switch>
                    </div>
                    
                </Router>
                <footer>
                    <p>
                        商务合作邮箱：v@maoyan.com 客服电话：10105335 违法和不良信息举报电话：4006018900 
                        <br/>
                        投诉举报邮箱：tousujubao@meituan.com 舞弊线索举报邮箱：wubijubao@maoyan.com
                    </p>
                    <p>
                        友情链接 : 美团网 | 美团下载 | 欢喜首映
                    </p>
                    <p>
                        ©2016 猫眼电影 maoyan.com 京ICP证160733号 京ICP备16022489号-1 京公网安备 11010102003232号 网络文化经营许可证 电子公告服务规则
                        <br/>
                        <span>
                            北京猫眼文化传媒有限公司
                        </span>
                    </p>
                </footer>
            </div>
        )
    }
}
export default Nav;
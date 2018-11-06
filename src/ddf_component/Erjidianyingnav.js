import React from 'react';
//import {BrowserRouter as Router,Route,Link,Redirect,Switch,NavLink} from 'react-router-dom';
import './css/Dianying.css'
import $ from 'jquery';
class Erjidianyingnav extends React.Component{
    constructor(props){
        super(props)
        this.state={
            //三级导航选择内容--电影类型，区域，年代
            leixing:'',
            quyu:'',
            niandai:'',
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
    componentDidMount(){
        var _this=this
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
        $("#xq_1 li").on('click',function(){
            $("#xq_1 li").removeClass("active")
            $(this).addClass("active")
            var val=$(this).html()
            _this.setState({leixing:val})
        })
        $("#xq_2 li").on('click',function(){
            $("#xq_2 li").removeClass("active")
            $(this).addClass("active")
            var val=$(this).html()
            _this.setState({quyu:val})
        })
        $("#xq_3 li").on('click',function(){
            $("#xq_3 li").removeClass("active")
            $(this).addClass("active")
            var val=$(this).html()
            _this.setState({niandai:val})
        })
    }
    componentShouldUpdate(){
        return true
    }
    render(){
        return(
            <div>
                {/* 二级导航 */}
                <div className="erji_nav">
                    <ul>
                        <li className="active" onClick={this.tap1.bind(this)}>正在热映<span className="active"></span></li>
                        <li onClick={this.tap2.bind(this)}>即将上映<span></span></li>
                        <li onClick={this.tap3.bind(this)}>经典影片<span></span></li>
                    </ul>
                </div>
                {/* 类型分类 */}
                <div className="fenlei_wrap">
                    <div className="fenlei">
                        <div className="fenlei_bian">
                            <div className="fenlei_xq">
                                <span>类型：</span>
                                <ul id="xq_1">
                                    <li className="active">全部</li>
                                    <li>爱情</li>
                                    <li>喜剧</li>
                                    <li>动作</li>
                                    <li>剧情</li>
                                    <li>恐怖</li>
                                    <li>惊悚</li>
                                    <li>科幻</li>
                                    <li>动作</li>
                                    <li>悬疑</li>
                                    <li>犯罪</li>
                                    <li>冒险</li>
                                    <li>战争</li>
                                    <li>奇幻</li>
                                    <li>运动</li>
                                    <li>家庭</li>
                                    <li>古装</li>
                                    <li>武侠</li>
                                    <li>西部</li>
                                    <li>历史</li>
                                    <li>传记</li>
                                    <li>歌舞</li>
                                    <li>黑色电影</li>
                                    <li>短片</li>
                                    <li>纪录片</li>
                                    <li>其他</li>
                                </ul>
                            </div>
                            <div className="fenlei_xq">
                                <span>区域：</span>
                                <ul id="xq_2">
                                    <li className="active">全部</li>
                                    <li>大陆</li>
                                    <li>美国</li>
                                    <li>韩国</li>
                                    <li>日本</li>
                                    <li>中国香港</li>
                                    <li>中国台湾</li>
                                    <li>泰国</li>
                                    <li>印度</li>
                                    <li>法国</li>
                                    <li>英国</li>
                                    <li>俄罗斯</li>
                                    <li>意大利</li>
                                    <li>西班牙</li>
                                    <li>德国</li>
                                    <li>波兰</li>
                                    <li>澳大利</li>
                                    <li>伊朗</li>
                                    <li>其他</li>
                                </ul>
                            </div>
                            <div className="fenlei_xq">
                                <span>年代：</span>
                                <ul style={{border:0}} id="xq_3">
                                    <li className="active">全部</li>
                                    <li>2018以后</li>
                                    <li>2018</li>
                                    <li>2017</li>
                                    <li>2016</li>
                                    <li>2015</li>
                                    <li>2014</li>
                                    <li>2013</li>
                                    <li>2012</li>
                                    <li>2011</li>
                                    <li>2000-2010</li>
                                    <li>90年代</li>
                                    <li>80年代</li>
                                    <li>70年代</li>
                                    <li>更早</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Erjidianyingnav
import React from 'react';
//import {BrowserRouter as Router,Route,Link,Redirect,Switch,NavLink} from 'react-router-dom';
import $ from 'jquery'
import './css/yingyuan.css'
import Wzf_yingyuan from '../components/WangZuFeng/goupiao/wzf_g_list'

class Yingyuan extends React.Component{
    constructor(props){
        super(props)
        this.state={
            //三级导航选择内容--电影类型，区域，年代
            pinpai:'',
            xingzhengqu:'',
            teshuting:''
          
        }
    }
    
    componentDidMount(){
        var _this=this
        
        $("#xq_1 li").on('click',function(){
            $("#xq_1 li").removeClass("active")
            $(this).addClass("active")
            var val=$(this).html()
            _this.setState({pinpai:val})
        })
        $("#xq_2 li").on('click',function(){
            $("#xq_2 li").removeClass("active")
            $(this).addClass("active")
            var val=$(this).html()
            _this.setState({xingzhengqu:val})
        })
        $("#xq_3 li").on('click',function(){
            $("#xq_3 li").removeClass("active")
            $(this).addClass("active")
            var val=$(this).html()
            _this.setState({teshuting:val})
        })
    }
    shouldComponentUpdate(){
        return true
    }
    render(){
        //console.log(this.state.pinpai)
        return(
            <div>
                {/* 类型分类 */}
                <div className="ddf_fenlei_wrap">
                    <div className="fenlei">
                        <div className="fenlei_bian">
                            <div className="fenlei_xq">
                                <span>品　牌：</span>
                                <ul id="xq_1">
                                    <li className="active">全部</li>
                                    <li>横店电影城</li>
                                    <li>万达影城</li>
                                    <li>耀莱成龙国际影城</li>
                                    <li>奥斯卡国际影城</li>
                                    <li>CGV影城</li>
                                    <li>星美国际影城</li>
                                    <li>红地毯国际影城</li>
                                    <li>幸福蓝海国际影城</li>
                                    <li>欢乐国际影城</li>
                                    <li>比高电影城</li>                                    
                                    <li>其他</li>
                                </ul>
                            </div>
                            <div className="fenlei_xq">
                                <span>行政区：</span>
                                <ul id="xq_2">
                                    <li className="active">全部</li>
                                    <li>地铁附近</li>
                                    <li>金水区</li>
                                    <li>二七区</li>
                                    <li>管城回族区</li>
                                    <li>新郑区</li>
                                    <li>中原区</li>
                                    <li>中牟区</li>
                                    <li>荥阳市</li>
                                    <li>高新区</li>
                                    <li>惠济区</li>
                                    <li>上街区</li>
                                    <li>新密区</li>
                                    <li>巩义市</li>
                                    <li>登封市</li>                                   
                                </ul>
                            </div>
                            <div className="fenlei_xq">
                                <span>特殊厅：</span>
                                <ul style={{border:0}} id="xq_3">
                                    <li className="active">全部</li>
                                    <li>IMAX厅</li>
                                    <li>CGS中国巨幕厅</li>
                                    <li>杜比全景声厅</li>
                                    <li>ReaID厅</li>
                                    <li>ReaID 6FL厅</li>
                                    <li>4DX厅</li>
                                    <li>DTS:X临境音厅</li>
                                    <li>4K厅</li>
                                    <li>4D厅</li>
                                    <li>巨幕厅</li>                                    
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <Wzf_yingyuan/>
            </div>
        )
    }
}
export default Yingyuan
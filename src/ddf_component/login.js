import React from 'react'
import $ from 'jquery'
import './css/login.css'
import bglogo from './img/login_bg.png'
import { BrowserRouter as Router, Route, link, Redirect, Switch } from 'react-router-dom'
export default class Login extends React.Component {

		constructor(props) {
			super(props)
			this.state={
				str:"获取手机动态码",
				code:''
			}
		}
		componentDidMount(){
			
		}
		
		tap(){
			$('.form2').css({'display':'block'})
			$('.form1').css({'display':'none'})
			
		}
		tap1(){
			$('.form2').css({'display':'none'})
			$('.form1').css({'display':'block'})
		}
		focus(){
			$('#user_input').css({'border':'1px solid #f76120'})
		}
		blur(){
			$('#user_input').css({'border':'1px solid #aaa'})
		}
		focus1(){
			$('#pwd_input').css({'border':'1px solid #f76120'})
		}
		blur1(){
			$('#pwd_input').css({'border':'1px solid #aaa'})
		}
		click(){
			var oDate = new Date();
			oDate.setDate(oDate.getDate() + 7);
			document.cookie = "username" + "=" + $('.user_tit').val() + ";expires=" + oDate;
		}
		login(){
			if($('.user_tit').val()==''){
				$('.validateo').css({'opacity':'1'})
				$('.mmm_tip').html('请输入用户名')
			}else if($('.user_tit').val()&&$('.pwd_tit').val()){
				$.ajax({
				type:"get",
				url:"http://localhost:4000/login",
				async:true,
				data:{
					username:$('.user_tit').val(),
					password:$('.pwd_tit').val()
				},
				success:function(data){
					if(data==1){
						//登陆成功，跳转其他页面
						//this.props.history.push('./App')
					}else{
						$('.validateo').css({'opacity':'1'})
						$('.mmm_tip').html('您还未注册，请注册')
					}
				}
			});
			}else{
				$('.validateo').css({'opacity':'1'})
				$('.mmm_tip').html('请输入密码')
			}
			
		}
		register(){
			this.props.history.push('/register')
		}
		hqdtm(){
		var _this=this
		var t=60
		_this.setState({str:'重新获取'+t+'s'})
		var timer=setInterval(function(){
		        t--;
		        _this.setState({str:'重新获取'+t+'s'})
		        if(t<0){
		        	 clearInterval(timer)
		        	 _this.setState({str:'重新获取'})
		        }  
		        },1000)
		$.ajax({
			type:"get",
			url:"http://localhost:4000/register",
			async:true,
			data:{data:$('#ptuser').val(),id:1},
			success:function(data){
				_this.setState({code:data})	
				console.log(_this.state.code)
				
			}
		});
		}
		ptdl(){
			if(this.state.code==$('#dtm').val()){
				//登陆成功，跳转其他页面
				console.log(1)
			}else{
				$('.validateo').css({'opacity':'1'})
				$('.mmm_tip').html('动态码输入错误，请重新获取')
			}
		}
		render() {
				return(
						<div>
	<header className="head">
    <a className="site_logo" href="">猫眼电影</a>
    </header>
    <div className="box_wrapper">
    	<div className='box'>
    	<div className="left">
    		<img src={bglogo} />
    	</div>
    	<div className="right">
    		<div className="form1">
    		<div className="validateo">
	    	<p className="mmm_val">
		    <span className="tip"></span>
		    <span className="mmm_tip"></span>
		    </p>
    		</div>
    		<div className="biaoti">
    		<span className="bt">
    			账户登录
    		</span>
    		<a className="sjdtm" href="javascript:0" onClick={this.tap.bind(this)}>
    			手机动态码登录
    		<i className="sj"></i>
    		</a>	
    		</div>
    		<div id="user_input" className="user_input">
            <i className="iuser"></i>
            <input type="text" id="user" className="user_tit"  onFocus={this.focus.bind(this)} onBlur={this.blur.bind(this)} placeholder="手机号/用户名/邮箱"  />
            </div>
            <div id="pwd_input" className="pwd_input user_input">
             <i className="iuser"></i>
            <input type="text" id="pwd" className="pwd_tit"  onFocus={this.focus1.bind(this)} onBlur={this.blur1.bind(this)} placeholder="密码" />
            </div>
            <div className="wjma">
                <a  href="" className="forget_password">忘记密码？</a>
                <input type="checkbox" name="auto_login" id="autologin" className="check" onClick={this.click.bind(this)}/>
                <label className="normal">7天内自动登录</label>
            </div>
            <button className="mmmlogin" onClick={this.login.bind(this)}>登录</button>
            <p className="register_tip">还没有账号?<a href="javascript:0" className="register" onClick={this.register.bind(this)}>免费注册</a></p>
        
    		</div>
    		<div className="form2">
    		<div className="validateo">
    		<p className="mmm_val">
		    <span className="tip"></span>
		    <span className="mmm_tip"></span>
		    </p>
    		</div>
    		<div className="biaoti">
    		<span className="bt">
    			账户登录
    		</span>
    		<a className="sjdtm" href="javascript:0" onClick={this.tap1.bind(this)}>
    			普通方式登录
    		<i className="sd"></i>
    		</a>	
    		</div>
    		<div className="user_input">
            <i className="iuser"></i>
            <input type="text" id="ptuser" className="user_tit" name="email" placeholder="手机号"/>
            </div>
            <div className="pwd_input user_input">
             <i className="iuser"></i>
            <input type="text" id="dtm" className="dtm" name="email" placeholder="动态码" />
            <button className="hqdtm" onClick={this.hqdtm.bind(this)}>{this.state.str}</button>
            </div>
            <div className="wjma">
                <a  href="" className="forget_password">忘记密码？</a>
                <input type="checkbox" name="auto_login" id="autologin" className="check" onClick={this.click.bind(this)} />
                <label className="normal">7天内自动登录</label>
            </div>
            <button className="mmmlogin" onClick={this.ptdl.bind(this)}>登录</button>
    		
    		</div>
    	</div>
    	</div>
    </div>
			
			</div>
			
			
			
		)
	}

}
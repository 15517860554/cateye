import React from 'react'
import $ from 'jquery'
import './css/register.css'
import {BrowserRouter as Router,Route,link,Redirect,Switch} from 'react-router-dom'


export default class Register extends React.Component{
	
	constructor(props){
		super(props)
		
		
		this.state={
			str:'免费获取短信验证码',
			tit:'',
			code:'',
			pwd_tit:''
		}
		this.tap2=this.tap2.bind(this)
		this.tap3=this.tap3.bind(this)
		this.blur2=this.blur2.bind(this)
	}
	componentDidMount(){
		if($('.tel').val()==''){
			$('#tel_tit').html('注册成功后,全美团都能用')
		}
		
    }
	tap(){
		$('#tel_tit').html('')
		$('.tel').css({'border':'1px solid #f76120'})
	}
	blur(){
		var tel_test=/^1[34578]\d{9}$/;
		if($('.tel').val()==''){
			$('#tel_tit').html('请输入手机号')
		}else if((tel_test.test($('.tel').val()))){
			$('#tel_tit').html('格式正确')
		}else{
			$('#tel_tit').html('请输入正确的手机号')
		}
	}
	yzm(){
		var _this=this
		console.log($('.btn').val())
		var t=60
		_this.setState({str:'重新获取'+t+'s',tit:'已发送,1分钟后可重新获取'})
		var timer=setInterval(function(){
		        t--;
		        _this.setState({str:'重新获取'+t+'s'})
		        if(t<0){
		        	 clearInterval(timer)
		        	 _this.setState({str:'重新获取',tit:''})
		        }  
		        },1000)
		$.ajax({
			type:"get",
			url:"http://localhost:4000/register",
			async:true,
			data:{data:$('.tel').val(),id:1},
			success:function(data){
				
				_this.setState({code:data})	
				console.log(_this.state.code)
				
			}
		});
	}
	tap1(){
		$('.message').css({'border':'1px solid #f76120'})
	}
	blur1(){
		if($('.message').val()==''){
			$('#mes_tit').html('请输入验证码')
		}else if(!$('.message').val()==this.state.code){
			$('#mes_tit').html('验证码失败')
		}else{
			$('#mes_tit').html('验证码正确')
		}
	}
	
	tap2(){
		$('.pwd').css({'border':'1px solid #f76120'})
	}
	tap3(){

		$('.confirm_pwd').css({'border':'1px solid #f76120'})
	}
	blur2(){
		var patrn=/^.{6,}$/;
		if(patrn.test($('.pwd').val())){
			var pat1=/^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/;
			if(pat1.test($('.pwd').val())){
				$('#ruo').css({'background':'#E02025'});
			}
			var pat2=/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
			if(pat2.test($('.pwd').val())){
				$('#zho').css({'background':'#E02025'});
			}
			var pat3=/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;  
			if(pat3.test($('.pwd').val())){
			    $('#qiang').css({'background':'#E02025'});
			}
		}else{
			console.log(1)
			this.setState({pwd_tit:'密码太短，至少6个字符'})

		}
	}
	blur3(){
		if($('.confirm_pwd').val()==""){
			$('#conpwd_tit').html('请再次输入密码')
		}else{
			if($('.confirm_pwd').val()!=$('.pwd').val()){
				$('#conpwd_tit').html('两次输入密码不一致，请再次输入')
			}else{
				$('#conpwd_tit').html('输入正确')
			}
		}
	}
	submit(){
		var _this=this;
		$.ajax({
			type:"get",
			url:"http://localhost:4000/register",
			async:true,
			data:{
				username:$('.tel').val(),
				password:$('.pwd').val(),
				id:2
			},
			success:function(data){
				console.log(data)
				if(data==2){
					_this.props.history.push('/login')
				}else{
					$('.sysmsg').css({'display':'block'})
				}
			}
		});
	}
	render(){
		return(
			<div>
			<div id="head">
	    	<a className="logo" href="#"></a>
	    </div>	
	    <div className="sysmsg">
	    <p>
	    <span className="error"></span>
	    <span className="content">该手机号已经注册,请直接登录或找回密码</span>
	    </p>
	    </div>
	    <div className="sl">
	    	
	    </div>
	    
	    <div id="content">
	    	<div className="sheet">
            <div className="telphone">
                <label>手机号</label>
                    <input type="text" name="mobile" className="tel" onFocus={this.tap.bind(this)} onBlur={this.blur.bind(this)}/>
                    <span id="tel_tit" className="tit">
                    </span>
            </div>
            <div className="btn-wrapper">
            	<input type="button" className="mmmbtn" value={this.state.str} onClick={this.yzm.bind(this)} />
            	<span className="tit">{this.state.tit}</span>
            	
            </div>
            
            <div className="mes telphone">
                <label>短信动态码</label>

                <input type="text" name="message" className="message" onFocus={this.tap1.bind(this)} onBlur={this.blur1.bind(this)} />
                <span className="tit" id="mes_tit"></span>
                

            </div>
            <div className="cre_pwd telphone">
            	<label>创建密码</label>
            	<input type="password" name="pwd" className="pwd" onFocus={this.tap2} onBlur={this.blur2}/>
                <span className="tit">{this.state.pwd_tit}</span>
            </div>
            <div className="pw-strength__letter">
                <span id="ruo" className="pw-strength__label">弱</span>
                <span id="zho" className="pw-strength__label">中</span>
                <span id="qiang" className="pw-strength__label">强</span>  
            </div>
            <div className="con_pwd telphone">
            <label>确认密码</label>
            <input type="password" name="password" className="confirm_pwd" onFocus={this.tap3} onBlur={this.blur3}/>
            <span id="conpwd_tit" className="tit"></span>   
                

            </div>
        <div className="subtn telphone">
            <button className="mmmsubmit_btn" onClick={this.submit.bind(this)}>同意以下协议并注册</button>
            
        </div>
        <div className="mmmterm">
        	<a href="">美团网用户协议</a>
        </div>
        
    
	    </div>
	    </div>
	    <div id="foot">
	    <p className="copyright">
	    <a className="f1" href="">meituan.com</a>&nbsp;
        <a className="f1" href="">京ICP证070791号</a>&nbsp;
        <span className="f1">京公网安备11010502025545号</span>
	    </p>
	    </div>

		</div>
			
		)
	}
	
}

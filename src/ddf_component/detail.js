import React from 'react'
import {BrowserRouter as Router,Route,Link,Redirect,Switch,NavLink} from 'react-router-dom'
import {Rate} from 'antd'
import Mock from 'mockjs'
import $ from 'jquery'

import Zan1 from '../image/zan.png'
import Zan2 from '../image/zan2.png'
import '../css/detail.css'
class Detail extends React.Component{
	
	constructor(props){
		super(props)
		this.state={
			wantsee:'❤想看',
			flag:true,
			moviedata:{},
			actordata:[],
			pinglun:[],
			zanflag:false,
			zan:Zan1,
			sjharr:[]
		}

	}
	look(){
		this.setState({"flag":!this.state.flag});
		if(this.state.flag){
			this.setState({"wantsee":"❤想看"})
		}else{
			this.setState({"wantsee":"❤已想看"})
		}
	}
	pingfen(){
		
	}
	buy(){
		
	}
	write(){
		$('.evaluate_out').css("display","block")
	}
	close(){
		$('.evaluate_out').css("display","none")
	}
	focus(){
		$('.pinglun_con').addClass("focus")
	}
	blur(){
		$('.pinglun_con').removeClass('focus')
			if($('textarea').val().length>90){
				$('.wordflow').html('已超出'+($("textarea").val().length-90)+"个文字")
			}
	}
	fabiao(){
//		$.ajax({
//			type:"post",
//			url:"http://www.sjh.com/pinglun",
//			async:false,
//			data:{id:1},
//			success:function(data){
//				
//			}
//		});
		var ping=$('.pinglun_con').children('textarea').val()
		console.log(ping)
		var farr=this.state.sjharr
		farr.push(ping)
		this.setState({sjharr:farr})
		$('.pinglun_con').children('textarea').val('')
		$('.evaluate_out').css("display","none")
	}
	tap1(){
		$('.tap').eq(0).css("display","block").siblings().css("display","none")
	}
	tap2(){
		$('.tap').eq(1).css("display","block").siblings().css("display","none")
	}
	tap3(){
		
	}
	zanto(i){
		
////		console.log(i)
//		this.setState({zanflag:!this.state.zanflag})
////		console.log(this.state.zanflag)
//		if(this.state.zanflag){
//			console.log($(this.refs.i).html())
//			//this.setState({zan:Zan2})
////			console.log({Zan2}.Zan2)
////			this.refs.i.src='{Zan2}.Zan2'
////			console.log(this.refs.i.src)
//			//$(this.refs.i).css("background",`url(${this.state.zan1})`)
//			//console.log(this.refs.i)
//		}else{
//			//console.log(this.state.zan2)
//			//$(this.refs.i).css("background",`url(${this.state.zan2})`)
//			//this.refs.i.style.background=`url(${this.state.zan2})`
//			//console.log(this)
//			//console.log(this.refs.i)
//		}
		
	}
	render(){
		var _this=this
		return(
			<div className="del">
				<div className="del_top">
					<div className="del_top_img">
						<img src={this.state.moviedata.movieimage}/>
					</div>
					<div className="del_top_mid">
						<h2>{this.state.moviedata.moviename}</h2>
						<div className="ename">{this.state.moviedata.directname}</div>
						<p>{this.state.moviedata.movietype}</p>
						<p>{this.state.moviedata.address}</p>
						<p>{this.state.moviedata.movietime}</p>
						<div className="del_top_mid_btn">
							<div>
								<button onClick={this.look.bind(this)}>{this.state.wantsee}</button>
								<button onClick={this.pingfen.bind(this)}>星星评分</button>
							</div>
							<button className="buy" onClick={this.buy.bind(this)}>特惠购票</button>
						</div>
					</div>
					<div className="del_top_right">
						<p className="sma col">想看数</p>
						<p>1234</p>
						<p className="sma">累计票房</p>
						<p>222<span className="sma">万</span></p>
					</div>
				</div>
				<div className="main">
					<div className="content">
						<ul className="con_bar">
							<li onClick={this.tap1}>介绍</li>
							<li onClick={this.tap2}>演职人员</li>
							<li className="jiang">奖项</li>
							<li onClick={this.tap3}>图集</li>
						</ul>
						<div className="tapout">
						
						<div className="tap">
						
						<div className="model">
							<h3>剧情简介</h3>
							<p>这里是电影简介这里是电影简介这里是电影简介这里是电影简介这里是电影简介这里是电影简介这里是电影简介这里是电影简介这里是电影简介这里是电</p>
						</div>
						<div className="model">
							<h3>演职人员<a href="#">全部</a></h3>
							<div className="model_con">
							<Link to='/person'>
								<div className="model_direct">
									<h4>导演</h4>
									<ul>
										<li>
											<img src={this.state.actordata[0].actorimg} alt="" />
											<p>{this.state.actordata[0].actorname}</p>
										</li>
									</ul>
								</div>
							</Link>	
								<div className="model_actor">
									<h4>演员</h4>
									<ul>
										{
											this.state.actordata.map(function(item){
												return (
													<li>
														<img src={item.actorimg} alt="" />
														<p>{item.actorname}</p>
														<span>饰：第布洛克阿尔法被他伽马</span>
													</li>
												)
											})
										}
										
									</ul>
								</div>
							</div>
						</div>

						
						<div className="model">
							<h3>图集<a href="#">全部</a></h3>
							<div className="model_img">
								<div className="img1">
								<img src=""/>
								</div>
								<div className="img2">
									<img src=""/>
								</div>
								<div className="img2">
									<img src=""/>
								</div>
								<div className="img2">
									<img src=""/>
								</div>
								<div className="img2">
									<img src=""/>
								</div>
							</div>
							
						</div>
						
						<div className="pinglun">
							<h3>热门短评</h3>
							<a href="javascript:0" className="write" onClick={this.write.bind(this)}>写评论</a>
							{
								this.state.sjharr.map(function(item,i){
									return (
										<div className="pinglun_list">
											<div className="list_touxiang">
												<img src=''/>
											</div>
											<div className="list_right">
												<div className="list_name">
													<p className="username">sjh<span>购</span></p>
													<p className="timer">time<span></span></p>
													<div className="zan">
														<img src={Zan1} onClick={_this.zanto.bind(_this,i)}></img>
														<span ref="i">{item.zannum}</span>
													</div>
												</div>
												<div className="list_con">
													{item}
												</div>
											</div>
											
										</div>
									)
								})
							}
							{
								this.state.pinglun.map(function(item,i){
									console.log(i)
									return (
										<div className="pinglun_list">
											<div className="list_touxiang">
												<img src={item.userimg}/>
											</div>
											<div className="list_right">
												<div className="list_name">
													<p className="username">{item.username}<span>购</span></p>
													<p className="timer">{item.time}<span></span></p>
													<div className="zan">
														<img src={Zan1} onClick={_this.zanto.bind(_this,i)}></img>
														<span ref="i">{item.zannum}</span>
													</div>
												</div>
												<div className="list_con">
													{item.content}
												</div>
											</div>
											
										</div>
									)
								})
							}
							
							
						</div>
						</div>
						
						<div className="tap">
						<div className="model">
							<div className="model_con">
								<div className="model_direct">
									<h4>导演</h4>
									<ul>
										<li>
											<img src="" alt="" />
											<p>卢本伟</p>
										</li>
									</ul>
								</div>
								<div className="model_actor">
									<h4>演员</h4>
									<ul>
										<li>
											<img src="" alt="" />
											<p>汤姆逊</p>
											<span>饰：第布洛克阿尔法被他伽马</span>
										</li>
										
									</ul>
								</div>
							</div>
						</div>

						</div>
						</div>
					</div>
					
					
					<div className="side">
						<div className="side_model">
							<h3>相关资讯</h3>
							<ul>
								<li>
									<div className="side_news_img">
										<img src=""/>
									</div>
									<div className="side_news_main">
										<div className="side_news_tit">
											<p>漫威另类英雄毒液经验首秀，颠覆感官圈</p></div>
										<div className="side_news_info">
											<span>猫眼电影</span>
											<span><i className="news_icon1"></i>1356</span>
											<span><i className="news_icon2"></i>0</span>
										</div>
									</div>
								</li>
								<li>
									<div className="side_news_img">
										<img src=""/>
									</div>
									<div className="side_news_main">
										<div className="side_news_tit">
											<p>漫威另类英雄毒液经验首秀，颠覆感官圈</p></div>
										<div className="side_news_info">
											<span>猫眼电影</span>
											<span><i className="news_icon1"></i>1356</span>
											<span><i className="news_icon2"></i>0</span>
										</div>
									</div>
								</li>
								<li>
									<div className="side_news_img">
										<img src=""/>
									</div>
									<div className="side_news_main">
										<div className="side_news_tit">
											<p>漫威另类英雄毒液经验首秀，颠覆感官圈</p></div>
										<div className="side_news_info">
											<span>猫眼电影</span>
											<span><i className="news_icon1"></i>1356</span>
											<span><i className="news_icon2"></i>0</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
						
						
						<div className="side_model">
							<h3>相关电影</h3>
							<div className="side_model_movie">
								<div className="side_model_movie_detail">
									<img src="" alt="" />
									<p>X战警：新变种人新变种人</p>
									<span>暂无评分</span>
								</div>
								<div className="side_model_movie_detail">
									<img src="" alt="" />
									<p>X战警：新变种人新变种人</p>
									<span>暂无评分</span>
								</div>
								<div className="side_model_movie_detail">
									<img src="" alt="" />
									<p>X战警：新变种人新变种人</p>
									<span>暂无评分</span>
								</div>
								<div className="side_model_movie_detail">
									<img src="" alt="" />
									<p>X战警：新变种人新变种人</p>
									<span>暂无评分</span>
								</div>
								<div className="side_model_movie_detail">
									<img src="" alt="" />
									<p>X战警：新变种人新变种人</p>
									<span>暂无评分</span>
								</div>
								<div className="side_model_movie_detail">
									<img src="" alt="" />
									<p>X战警：新变种人新变种人</p>
									<span>暂无评分</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*发表评论*/}
				<div className="evaluate_out">
					<div className="evaluate">
						<div className="close" onClick={this.close.bind(this)}>x</div>
						<div className="sorce_msg_con">
							<p>请点击星星评分</p>
						</div>
						<div className="score_star_con">
							{/*<Rate allowHalf={true} defaultValue={2.5}/>*/}
						</div>
						<div className="pinglun_con">
							<textarea onFocus={this.focus} onBlur={this.blur} placeholder="快来说说你的看法" ></textarea>
						</div>
						<p className="wordflow"></p>
						<button onClick={this.fabiao.bind(this)} className="fabiao">提交</button>
					</div>
				</div>
				
			</div>
		)
	}
	componentWillMount(){
		var Random=Mock.Random;
		Random.extend({
			moviename:function(date){
				return this.pick(['电影名1','电影名2','电影名3','电影名4','电影名5','电影名6','电影名7','电影名8','电影名9'])
			},
			movietype:function(date){
				return this.pick(['动作','惊悚','科幻','推理','喜剧','悲剧','情感','动漫'])
			},
			movietime:function(date){
				return this.pick(['2018-11-09大陆上映','2017-11-09大陆上映','2016-11-09大陆上映','2015-11-09大陆上映'])
			},
			time:function(date){
				return this.pick(['1天前','12小时前','3天前','6天前','46分钟前'])
			},
			content:function(date){
				return this.pick(['短评额热热热热热热热月又一月','短评一一一一月又一月','短评一一一一月又一月','短评一一一一月又一月','短评四isisisisis一丝丝月又一月','短评三三三三月又一月'])
			},
			zannum:function(date){
				var arr=[];
				for(var i=0;i<20;i++){
					arr.push(Math.floor(Math.random()*1000))
				}
				return this.pick(arr)
			}
		})
		
		Mock.mock('http://www.sjh.com/api',{
			"movie":{
					"movieid|+1":1,
					"directname":"@name",
					"movietype":"@movietype",
					"address":"@region",
					"movietime":"@movietime",
					"movieimage":"@image('240x330')"
			},
			"actor|8-14":[
				{
					"actorname":"@name",
					"actorimg":"@image('128x170')"
				}
			],
			"pinglun|3-8":[
				{
					"username":"@cname",
					"time":"@time",
					"content":"@content",
					"userimg":"@image('50x50')",
					"zannum":"@zannum"
				}
			]
		})
		
		
		
		
		Mock.mock('http://www.sjh.com/pinglun','post',(options)=>{
			console.log(options.body.split("=")[1])
			if(options.body.split("=")[1]==1){
				console.log(222)
			}
		})
		var _this=this;
		var arr=[];
		$.ajax({
			dataType:'json',
			url:'http://www.sjh.com/api',
			async:false,
			success:function(data){
				console.log(data)
				for(var i=1;i<4;i++){
					arr.push(data.actor[i])
				}
				_this.setState({"moviedata":data.movie,"actordata":arr,"pinglun":data.pinglun})
				console.log(_this.state.actordata[0].actor)
			}
		})
		
	}
}

export default Detail
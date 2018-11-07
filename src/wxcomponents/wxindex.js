import React from 'react'

import {NavLink} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Button,Carousel } from 'antd';
import 'antd/lib/button/style';
import $ from 'jquery'
import '../index.css'
import './wxindex.css';
import img1 from '../img/move_yl.jpg'
import black_zz from '../img/black_zz.png'
import pfb from "../img/pfb.jpg"
import expext from "../img/expext.jpg"
import lb4 from "../img/lb4.jpg"
import lb3 from "../img/lb3.jpg"
import lb2 from "../img/lb2.jpg"
import lb1 from "../img/lb1.jpg"
var Mock = require('mockjs')

		var data = Mock.mock('http://www.moveDetail.com/',{
			// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
			'list|8': [{
				// 属性 id 是一个自增数，起始值为 1，每次增 1
			
				'name':'@csentence',
				"pf":'@natural(0,100)'
			}]
		})
var datajj = Mock.mock('http://www.moveDetail.com/jjsy',{
			// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
			'list|8': [{
				// 属性 id 是一个自增数，起始值为 1，每次增 1
			
				'name':'@csentence',
				'peo':'@natural(100,100000000)'
			}]
		})
var datajj = Mock.mock('http://www.moveDetail.com/jrpf',{
			// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
			'list|10': [{
				// 属性 id 是一个自增数，起始值为 1，每次增 1
			
				'name':'@csentence(1,6)',
				'peo':'@natural(1000000,10000000)'
		}]
})
var data_expect = Mock.mock('http://www.moveDetail.com/expect',{
			// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
			'list|10': [{
				// 属性 id 是一个自增数，起始值为 1，每次增 1
			
				'name':'@csentence(1,6)',
				'peo':'@natural(1000,100000)'
		}]
})	
var data_expect = Mock.mock('http://www.moveDetail.com/top100',{
			// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
			'list|10': [{
				// 属性 id 是一个自增数，起始值为 1，每次增 1
			
				'name':'@csentence(1,6)',
				'peo':'@natural(90,100)'
		}]
})	
function onChange(a, b, c) {
  console.log(a, b, c);
}
export default class wxIndex extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			moveList:[],
			moveListjj:[],
			jrpfb:[],
			pfSum:'',
			expect_li:[],
			top100_li:[]
		}
	}
	ttt(){
		console.log(222)
		//this.props.history.push('/detail')
	}
		
	
	render() {
		var li_con=[]
		var li_con_2=[]
		var jrpf_arr=[]
		var expext_li=[]
		// top100
		var top100_li=[]
		this.state.top100_li.list.map(function(v,ind){
			if(ind==0){
				top100_li.push(<li key={ind}>
						<i className='wx_content_li_first'><img src={pfb} /></i><p className='wx_content_li_first_name'>{v.name}</p><p className='wx_content_li_first_peo_num'>{v.peo/10+'分'}</p>
						</li>)
			}else if(ind<3){
				top100_li.push(<li key={ind}><i className='wx_content_li_sec wx_top100_sec'>{ind+1}</i>{v.name}<span className='wx_top100_pf_col'>{v.peo/10+'分'}</span></li>)
			}else{
				top100_li.push(<li key={ind}><i >{ind+1}</i>{v.name}<span className='wx_top100_pf_col'>{v.peo/10+'分'}</span></li>)
			}
		})
		this.state.moveList.list.map((v,i)=>{
			li_con.push(<li key={i}><img src={img1} /><img className='wx_now_hot_li_zz' src={black_zz} />	<p className = 'wx_move_tit' > < span > {v.name} < /span><span><i>{v.pf/10}</i > < /span></p >
			<p className = 'wx_buy_p' > 购票 </p></li>)
		})
		this.state.moveListjj.list.map((v,i)=>{
			li_con_2.push(<li key={i}><img src={img1} /><img className='wx_jjsy_hot_li_zz' src={black_zz} />	<p className = 'wx_move_tit wx_jjsymove_tit' > < span > {v.name} < /span></p >
			<p className='wx_content_l_want'>{v.peo}人想看</p>
			<p className='wx_want_movie_gp'><span>预告片</span><span>预售</span></p>
			<p className='wx_movie_rt'>11月9日上映</p>
			</li>)
		})
		this.state.jrpfb.list.map(function(v,i){
			if(i==0){
				jrpf_arr.push(<li key={i}>
						<i className='wx_content_li_first'><img src={pfb} /></i><p className='wx_content_li_first_name'>{v.name}</p><p className='wx_content_li_first_peo_num'>{v.peo}</p>
						</li>)
			}else if(i<3){
				jrpf_arr.push(<li key={i}><i className='wx_content_li_sec'>{i+1}</i>{v.name}<span>{v.peo}</span></li>)
			}else{
				jrpf_arr.push(<li key={i}><i >{i+1}</i>{v.name}<span>{v.peo}</span></li>)
			}
		})
		this.state.expect_li.list.map(function(v,i){
			if(i==0){
				expext_li.push(<li key={i}>
						<i className='wx_expect_li_first'><img src={expext} /></i>
						<div className='wx_expect_li_first_detail'> 
							<p className='wx_content_li_first_name'>电影名字</p>
							<p >上映时间:<a>2018-11-16</a></p>
							<p >151551人想看</p>
						</div>
				</li>)
			}else if(i==1){
				expext_li.push(<li key={i}>
					<img src='http://p0.meituan.net/movie/ca524f4de6df4d4cefdaf923ae22dcf562390.jpg' />
					<div>
					<p>
					电影名字电影名字电影名字
					</p>
					<p>
						{v.peo}人想看
					</p>
					</div>
				
				</li>)
			}else if(i==2){
				expext_li.push(<li key={i}>
					<img src='http://p0.meituan.net/movie/ca524f4de6df4d4cefdaf923ae22dcf562390.jpg' />
					<div>
					<p>
					电影名字电影名字电影名字
					</p>
					<p>
						{v.peo}人想看
					</p>
					</div>
				
				</li>)
			}else{
				expext_li.push(<li key={i}><i >{i+1}</i>{v.name}<span>{v.peo}人想看</span></li>)
			}
		})
		return ( 
			
		<div className='wx_con'>
	<Carousel afterChange={onChange} effect="fade" autoplay='true' style={{height:"440px"}}>
				<div><h3><img src={lb1}/></h3></div>
				<div><h3><img src={lb2}/></h3></div>
				<div><h3><img src={lb3}/></h3></div>
				<div><h3><img src={lb4}/></h3></div>
			</Carousel>
	
	
			<div className = 'wx_content' >
			
				<div className = 'wx_content_l' >
					<h2 className = 'wx_now_hot_tit' > 正在热映(48 部) < span > 全部 > < /span></h2 >
					<div className = 'wx_now_hot_li' >
					<ul >{li_con}</ul>
					</div> 
				</div>
				  
				
				
				
				<div className='wx_content_r'>
					<h2 className = 'wx_now_hot_tit' > 今日票房 </h2 >
					<ul>
					
						{jrpf_arr}
					</ul>
				</div>
				<div className='wx_con_pf_sum'>
					<h3>
						今日大盘
					</h3>
					<p>
					<span>{this.state.pfSum}</span>万
					<a>查看更多></a>
					</p>
					
					
					<p>
					北京时间 <span></span>
					猫眼专业版实时票房数据
					</p>
				</div>
			
		
				
				
				
				
				<div className = 'wx_content_l' >
					<h2 className = 'wx_now_hot_tit  wx_content_l_2' > 即将上映(241 部) < span > 全部 > < /span></h2 >
					<div className = 'wx_now_hot_li wx_now_hot_li_jjsy' >
					<ul >{li_con_2}</ul>
					</div> 
				</div>
				
				
				
				
			<div className='wx_expect_li'>
				<h2 className = 'wx_now_hot_tit wx_expect_li' > 最受期待 <span>查看完整榜单></span> </h2 >
				<ul>
				
				
				
				{expext_li}
				</ul>
			</div>
			
			
			
			<div className='wx_content_r wx_top_li'>
				<h2 className = 'wx_now_hot_tit wx_top_li_tit' > TOP100 <span>查看完整榜单></span> </h2 >
				<ul>
				
					{top100_li}
				</ul>
			</div>
				
			</div>
			<NavLink to='/detail'><button onClick={this.ttt.bind(this)}>跳</button></NavLink>
		</div>	
		)
	}
	componentWillMount() {
		// console.log($())
		console.log('已经进入dom')
		var _this=this
		$.ajax({
			type:'get',
			url:'http://www.moveDetail.com/',
			async:false,
			dataType:'json',
			success:function(data){
				console.log(data)
				_this.setState({
					moveList:data
				})
			}
		})
		$.ajax({
			type:'get',
			url:'http://www.moveDetail.com/jjsy',
			async:false,
			dataType:'json',
			success:function(data){
				console.log(data)
				_this.setState({
					moveListjj:data
				})
			}
		})
		// 请求今日票房排行
		$.ajax({
			type:'get',
			url:'http://www.moveDetail.com/jrpf',
			async:false,
			dataType:'json',
			success:function(data){
				for(var i=0;i<data.list.length;i++){
					for(var j=i;j<data.list.length;j++){
						if(data.list[i].peo<data.list[j].peo){
							var io=data.list[i].peo
							data.list[i].peo=data.list[j].peo
							data.list[j].peo=io
						}
					}
				}
				var sum=0;
				for(var i=0;i<data.list.length;i++){

					sum=sum+Number(data.list[i].peo) 	
					
				
				}
				sum=(sum/10000).toFixed(2)
				console.log(data.list)
				_this.setState({
					jrpfb:data,
					pfSum:sum
				})
			}
		})
		// 
			$.ajax({
					type:'get',
					url:'http://www.moveDetail.com/expect',
					async:false,
					dataType:'json',
					success:function(data){
						for(var i=0;i<data.list.length;i++){
							for(var j=i;j<data.list.length;j++){
								if(data.list[i].peo<data.list[j].peo){
									var io=data.list[i].peo
									data.list[i].peo=data.list[j].peo
									data.list[j].peo=io
								}
							}
						}
						var sum=0;
						for(var i=0;i<data.list.length;i++){
		
							sum=sum+Number(data.list[i].peo) 	
							
						
						}
						sum=(sum/10000).toFixed(2)
						console.log(data.list)
						_this.setState({
							expect_li:data
						})
					}
				})
		// 评分排行
			$.ajax({
					type:'get',
					url:'http://www.moveDetail.com/top100',
					async:false,
					dataType:'json',
					success:function(data){
						for(var i=0;i<data.list.length;i++){
							for(var j=i;j<data.list.length;j++){
								if(data.list[i].peo<data.list[j].peo){
									var io=data.list[i].peo
									data.list[i].peo=data.list[j].peo
									data.list[j].peo=io
								}
							}
						}
					
						console.log(data.list)
						_this.setState({
							top100_li:data
						})
					}
				})
		}
}

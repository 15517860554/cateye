import React from "react";
import { Steps,Popover } from 'antd';
import './wxshopcart.css';
import {Link} from 'react-router-dom'
import $ from "jquery";
var Mock = require('mockjs')
var movie_seat_det = Mock.mock('http://www.moveDetail.com/movie_seat_detail',{
			// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
			
				// 属性 id 是一个自增数，起始值为 1，每次增 1
			
				'name':'@csentence(1,6)',
				'time':'@natural(90,150)',
				'price':'@natural(19,59)',
				'yyuan':'@csentence(1,6)',
				'yting':'@csentence(3)',
				'type':[
					'@csentence(2,3)','@csentence(2,3)'
				],
				'selectedSeat|0-120':[
					[
						'@natural(0,5)','@natural(0,19)'
					]
				]
				
})	
const Step = Steps.Step;
const customDot = (dot, { status, index }) => (
  <Popover content={<span>step {index} status: {status}</span>}>
    {dot}
  </Popover>
);


export default class wxshopcarts extends React.Component{
	constructor(props){
		super(props)
		this.state={
			wx_selableseat:[],
			canBuy:{
				'disable':'false',
				
			},
			move_seat_det:{},
			total_pri:'0'
		}
	}
	sel(setrow,setcol,event){
		
		
		var isSelected=false
		var selectedSeat=this.state.move_seat_det['selectedSeat']
		
		for(var ioo=0;ioo<selectedSeat.length;ioo++){
			if(selectedSeat[ioo][0]==setrow && selectedSeat[ioo][1]==setcol){
				isSelected=true
			}
		}
		console.log(isSelected)
		if(isSelected){
			
		}else{
		var selableseat_arr=this.state.wx_selableseat;
		
		
		
		if(event.target.className){
			for(var iindex=0;iindex<selableseat_arr.length;iindex++){
				if(selableseat_arr[iindex][0]==setrow && selableseat_arr[iindex][1]==setcol){
					selableseat_arr.splice(iindex,1)
				}
			}
			
			event.target.className='';
		}else{
			if(selableseat_arr.length>=4){
				alert('一次只能买四张票')
			}else{
				event.target.className='wx_now_sel';
				selableseat_arr.push([setrow,setcol])
			}
			
		}
		this.setState({
			wx_selableseat:selableseat_arr
			
		})
		if(selableseat_arr.length>0){
			this.setState({
				canBuy:{
					'disabled':'disabled',
					'background':'#f03d37'
				}
			})
		}else{
			this.setState({
				canBuy:{
					'disabled':'false',
					'background':'#dedede'
				}
			})
		}
		}
		
	}
	tap(){
		this.props.history.push('/wxpay')
	}
	render(){
		
		var wx_set_arr=[]
		
		for(var i=0;i<6;i++){
			wx_set_arr[i]=[]
		
			for(var i2=0;i2<20;i2++){
				if(this.state.move_seat_det['selectedSeat']){
					var flag=false
					for(var iyseled=0;iyseled<this.state.move_seat_det['selectedSeat'].length;iyseled++){
						
						if(this.state.move_seat_det['selectedSeat'][iyseled][0]==i && (this.state.move_seat_det['selectedSeat'][iyseled][1]==i2)){
							flag=true
						}
					} 
					if(flag){
						
						wx_set_arr[i].push(<span className='wx_seat_selected' onClick={this.sel.bind(this,i,i2)} key={i2}></span>)
					}else{
						wx_set_arr[i].push(<span onClick={this.sel.bind(this,i,i2)} key={i2}></span>)
					}
				}else{
					// wx_set_arr[i].push(<span onClick={this.sel.bind(this,i,i2)} key={i2}></span>)
				}
				
				
			}
			
		}
		var wx_selableseat_arr=[];
		for(var iyx=0;iyx<this.state.wx_selableseat.length;iyx++){
			
			wx_selableseat_arr.push(<span key={iyx}>{this.state.wx_selableseat[iyx][0]+1}排{this.state.wx_selableseat[iyx][1]+1}座</span>)
		}
		return(
			<div className='wx_shop_cart_con'>
			
				<Steps size="small" current={1} progressDot={customDot}>
				<Step title="选择影片场次" />
				<Step title="选择座位" />
				<Step title="14分钟内付款" />
				<Step title="影院取票观影" />

				</Steps>
				
				<div className='wx_xset'>
					<div className='wx_set_li'>
					<p className='wx_seat_exa'>
						<span>可选座位</span>
						<span>已售座位</span>
						<span>已选座位</span>
						<span>情侣座位</span>
					</p>
					<div className="wx_ym">荧幕中央</div>
						{
							wx_set_arr
						}
					</div>
					<div className='wx_set_r'>
						<div className='poster'>
							<img src='' />
							<p className='wx_movie_info_tit'>三国杀——幻</p>
							<p>类型:<span>{}</span></p>
							<p>时长:<span>{this.state.move_seat_det['time']}分钟</span></p>
						</div>
						<div className='wx_movie_info' ref='alert'>
							<p>影院:<span>{this.state.move_seat_det['yyuan']}</span></p>
							<p>影厅:<span>{this.state.move_seat_det['yting']}</span></p>
							<p>版本:<span>国语3D</span></p>
							<p>场次:<span className='wx_movie_info_time'>今天 11月8 15:30</span></p>
							<p>票价:<span>&yen;{this.state.move_seat_det['price']}/张</span></p>
							<div className="wx_seat_info">
								<p>座位:{wx_selableseat_arr}</p>
								<p >总价:<span className='Total_pri'>&yen;<b>{this.state.wx_selableseat.length*(this.state.move_seat_det['price'])}</b></span></p>
							</div>
							<div className='goumai'>
								<p>手机号<span>173****7976</span></p>
								<p >
								
									<button style={this.state.canBuy} onClick={this.tap.bind(this)}>确认选座</button>
								</p>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		)
	}
	componentDidMount(){
		// 请求影院，影厅，电影等详细信息
		var _this=this;
		$.ajax({
			type:'get',
			url:'http://www.moveDetail.com/movie_seat_detail',
			async:false,
			dataType:'json',
			success:function(data){
				console.log(data)
				 _this.setState({
					move_seat_det:data
				}) 
			}
		})
	}
}
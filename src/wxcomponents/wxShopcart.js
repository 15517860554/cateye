import React from "react";
import { Steps,Popover } from 'antd';
import './wxshopcart.css';


const Step = Steps.Step;
const customDot = (dot, { status, index }) => (
  <Popover content={<span>step {index} status: {status}</span>}>
    {dot}
  </Popover>
);
export default class wxshopcarts extends React.Component{
	constructor(props){
		super(props)
	}
	sel(setrow,setcol,event){
		console.log(setrow,setcol,event.target)
		console.log(event.target.className)
		if(event.target.className){
			event.target.className='';
		}else{
			event.target.className='wx_now_sel';
		}
		
		
	}
	render(){
		var wx_set_arr=[]
		for(var i=0;i<6;i++){
			wx_set_arr[i]=[]
			for(var i2=0;i2<20;i2++){
				wx_set_arr[i].push(<span onClick={this.sel.bind(this,i,i2)}></span>)
			}
			
		}
		return(
			<div className='wx_con'>
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
							<p>三国杀——幻</p>
							<p>类型:<span></span></p>
							<p>时长:<span></span></p>
						</div>
						<div className='info'>
							<p>影院:<span></span></p>
							<p>影厅:<span></span></p>
							<p>版本:<span></span></p>
							<p>场次:<span></span></p>
							<p>票价:<span></span></p>
							<p>座位:<span></span></p>
							<p>总价:<span></span></p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
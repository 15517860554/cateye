import React from 'react'
import "./wxpay.css"
import { Steps,Popover } from 'antd';


const Step = Steps.Step;
const customDot = (dot, { status, index }) => (
  <Popover content={<span>step {index} status: {status}</span>}>
    {dot}
  </Popover>
);


export default class Wxpay extends React.Component{
	constructor(props){
		super(props)
		
	}
	render(){
		return(
			<div className='wxpay_con'>
				<div className='wx_step_sty'>
					<Steps size="small" current={2} progressDot={customDot} >
						<Step title="选择影片场次" />
						<Step title="选择座位" />
						<Step title="14分钟内付款" />
						<Step title="影院取票观影" />
					</Steps>
				</div>
				<div className='wx_pay_djs'>
					<div></div>
					<p className="wx_pay_djs_djs">请在 <span>0</span> 分钟 <span>24</span>秒内完成支付</p>
					<p className="wx_pay_djs_tip">超时订单会自动取消，如遇支付问题，请致电猫眼客服：1010-5335</p>
				</div>
				<div className='wx_pay_pric'>
					<p>请仔细核对场次信息，出票后将无法退票和改签</p>
					<table>
					<thead>
						<tr>
							<th>影片</th>
							<th>时间</th>
							<th>影院</th>
							<th>座位</th>
							
						</tr>
						
					</thead>
					<tbody>
						<tr>
							<td>冰封侠</td>
							<td className='wx_movie_time'></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
					</table>
				</div>
				<div className='wx_pay_info'>
					<p>实际支付:<span>&yen;<b>28</b></span></p>
					<p><button>确认支付</button></p>
				</div>
				
				
			</div>
			
		)
	}
}
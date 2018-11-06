import React, { Component } from 'react';
import xiangqing from './xiangqing.css'
import { Map } from 'react-amap';
import { Carousel } from 'antd';
import $ from 'jquery'

function onChange1(a, b, c) {
  console.log(a, b, c);
}


var Mock = require('mockjs')

Mock.mock('http://maoyan.api/yingyuan',{
  "pianming|10-14":{
    "img":'@dataImage(160x220)',
    "name":"@ctitle",
    "shichang":"@natural(80,120)",
    
    "list|3-8":[
      {
          "id|+1":1000,
          "pic":"@natural(10,30)",         
          "ting":'@boolean()',

      },
  ]
  }
  
})

class Wzf_g_xiangqing extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
    }
  }
  componentWillMount(){
    $.ajax({
      type:"get",
      url:"http://maoyan.api/yingyuan",
      dataType:"json",
      async:false,
      success:function(data){
        console.log(data)
      }
    })
  }
  render() {
    return (
      <div className="Wzf_g_xiangqing">
        <div className="banner cinema-banner">
  <div className="wrapper clearfix">
    <div className="cinema-left">
      <div className="avatar-shadow">
        <img className="avatar" src="http://p1.meituan.net/deal/201208/22/1_0822151022.jpg@292w_292h_1e_1c"/>
      </div>
    </div>

    <div className="cinema-main clearfix">
      <div className="cinema-brief-container">
        <h3 className="name text-ellipsis">登封中影数字影城</h3>
        <div className="address text-ellipsis">登封市嵩阳路南一环交叉口嵩湖花园东门中影数字影城</div>
        <div className="telphone">电话：0371-62811577</div>
        
        <div className="features-group">
          <div className="group-title">影院服务</div>

          <div className="feature">
            <span className="tag ">3D眼镜</span>
            <p className="desc text-ellipsis" title="需押金, 10.0元每副">需押金, 10.0元每副</p>
          </div>
          <div className="feature">
            <span className="tag ">儿童优惠</span>
            <p className="desc text-ellipsis" title="1.2m以下儿童观看电影免票，每个成年人仅限带一名儿童。">1.2m以下儿童观看电影免票，每个成年人仅限带一名儿童。</p>
          </div>
          <div className="feature">
            <span className="tag park-tag">可停车</span>
            <p className="desc text-ellipsis" title="凭电影票可免费停车">凭电影票可免费停车</p>
          </div>
        </div>
      </div>
    </div>
    <div className="ditu">
      <Map   amapkey={"786fcd59ee630858ec354a4e261057b9"}  />
      </div>
    <div className="cinema-map" data-lat="34.44542" data-lng="113.027405" style={{position: "relative", backgroundColor: "rgb(229, 227, 223)",overflow:" hidden", transform: "translateZ(0px)"}}>
      <span className="show-map"></span>
  </div>
</div>
      </div>
      {/* 轮播图 */}
      <div className='wzf_lunbo'>
      <Carousel  afterChange={onChange1}>
    <div>

    </div>
    <div><h3>2</h3></div>
    
  </Carousel>
  </div>
      </div>
    );
  }
}

export default Wzf_g_xiangqing;

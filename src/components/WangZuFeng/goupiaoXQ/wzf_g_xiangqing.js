import React, { Component } from 'react';
import xiangqing from './xiangqing.css'
import { Map } from 'react-amap';
import { Carousel } from 'antd';
import $ from 'jquery'
import { Table, Divider, Tag } from 'antd';
function onChange1(a, b, c) {
}

function fenzu(data){
  var allData = []; //用来装处理完的数组
  var currData = []; //子数组用来存分割完的数据
  //循环需要处理的数组
  for(var i = 0; i < data.length; i++) {
      //将chartArr[i]添加到子数组
      currData.push(data[i]);
      
      //在这里求4的余数,如果i不等于0,且可以整除 或者考虑到不满4个或等于4个的情况就要加上  i等于当前数组长度-1的时候
      if((i != 0 && (i + 1) % 6 == 0) || i == data.length - 1) {
          //把currData加到allData里
          allData.push(currData);
          //在这里清空currData
          currData = [];
      }
  };
  return allData
}



const columns = [{
  title: '放映时间',
  dataIndex: 'sj',
  key: 'sj',
}, {
  title: '语言版本',
  dataIndex: 'yybb',
  key: 'yybb',
}, {
  title: '放映厅',
  dataIndex: 'ting',
  key: 'ting',
}, {
  title: '售价（元）',
  key: '售价（元）',
  dataIndex: 'pic',
  
}, {
  title: '购票',
  key: '购票',
  render: (text, record) => (
    <span>
      <a href="javascript:;">购票</a>
      <Divider type="vertical" />
 
    </span>
  ),
}];

function RuiJiData(){
  let arr=[]
  let ruiji = Math.floor(Math.random()*4)+3;
  let zz = Math.floor(Math.random()*2)

  let sj=["9:00","12:00","14:30 ","16:20 ","18:10 ","20:00 ","21:50 "]
  let ting=["一号厅",'二号厅']
 
  
  for(var i=0;i<ruiji;i++){
    arr.push(
      {
        key:i,
        sj:sj[i],
        yybb:"英语2D",
        ting:ting[Math.floor(Math.random()*2)],
        pic:"￥"+(Math.floor(Math.random()*12)+20)
      }
    )
    
  }
 return arr
}



const data = [{
  key: '1',
  sj: '14:30 ',
  yybb: "英语2D",
  ting: '一号厅',
  pic:"￥23"
  
}, {
  key: '2',
  sj: '16:20 ',
  yybb: "英语2D",
  ting: '六号厅',
  pic:"￥20"
}, {
  key: '3',
  sj: '20:00 ',
  yybb: "英语2D",
  ting: '六号厅',
  pic:"￥22"

},{
  key: '4',
  sj: '21:50  ',
  yybb: "英语2D",
  ting: '六号厅',
  pic:"￥21"

}];











var Mock = require('mockjs')

Mock.mock('http://maoyan.api/yingyuan',{
  "ming|7-11":[
    {
      "pianming":{
        "img":'@dataImage(160x220)',
        "name":"@ctitle",
        "pingfen":"@float(8,9)",
        "shichang":"@natural(80,120)",
        "zhuyan":'@cname()',
        "list|3-8":[
          {
              "id|+1":1000,
              "pic":"@natural(10,30)",         
              "ting":'@boolean()',
    
          },
      ]
      } 
    }
  ]
  
})

class Wzf_g_xiangqing extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
      aaa:"",
      jax:[],
      list:data
    }
  }
  componentWillMount(){
    var _this = this
    $.ajax({
      type:"get",
      url:"http://maoyan.api/yingyuan",
      dataType:"json",
      async:false,
      success:function(data){
        _this.state.data=data
        _this.state.aaa=data.ming[0].pianming
        let jax=[]
        data.ming.map((item,i)=>{
          jax.push(
            <div key={i}  onClick={_this.wzf_imgClick.bind(_this,i)} className='wzf_lb_item'>
            <img className='wzf_lb_img'  src={item.pianming.img} alt=""/>
          </div>
          )
        })
        _this.state.jax = jax
        

      }
    })
  }
  
wzf_imgClick(i,event){
      // console.log(this.refs["item_"+i].children[0]) 
     let jax = this.state.jax
      $(".wzf_lb_item").children("img").addClass("wzf_lb_img").removeClass("img_active")
     event.target.className="img_active"
     this.setState({
      list:RuiJiData(),
      aaa:this.state.data.ming[i].pianming
     })
     }
  render() {
    console.log(this.props)
    
    // let jax =[]
    // let _this = this
    // this.state.data.ming.map((item,i)=>{
    //   jax.push(
    //     <div key={i} ref={"item_"+i} onClick={_this.wzf_imgClick.bind(_this,i)} className='wzf_lb_item'>
    //       <img className='wzf_lb_img'  src={item.pianming.img} alt=""/>
    //     </div>
    //   )
    // })
   let jax = fenzu(this.state.jax)
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
        <div className="telphone1">电话：0371-62811577</div>
        
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
     
    {jax[0]}
    </div>
    <div>
    {jax[1]}
    </div>
    
  </Carousel>
  </div>
  {/* 内容 */}
  <div className="movie-info_bao">
  <div className="movie-info">
  <div>
    <h3 className="movie-name">{this.state.aaa.name}</h3>

        <span className="score sc">{ this.state.aaa.pingfen.toFixed(1)}</span>

  </div>

  <div className="movie-desc">
    <div>
      <span className="key">时长 :</span>
      <span className="value">{ this.state.aaa.shichang}分钟</span>
    </div>
    <div>
      <span className="key">主演 :</span>
      <span className="value">{ this.state.aaa.zhuyan}</span>
    </div>
  </div>
      {/* 内容list */}
      <Table columns={columns} dataSource={this.state.list} />,
</div>
  </div>
      </div>
    );
  }
}

export default Wzf_g_xiangqing;

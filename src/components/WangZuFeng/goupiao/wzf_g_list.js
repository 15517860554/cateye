import React, { Component } from 'react';
import style from './style.css'
import $ from 'jquery'
import { Pagination } from 'antd';

var Mock = require('mockjs')

Mock.mock('http://maoyan.api/piao',{
  "dianying|500":[
      {
          "id|+1":1000,
          "pic":"@natural(10,30)",
          "name":"@ctitle",
          "diqu":'@county(true)'

      }
  ]
})


function fuzu(data){
  var allData = []; //用来装处理完的数组
  var currData = []; //子数组用来存分割完的数据
  //循环需要处理的数组
  for(var i = 0; i < data.length; i++) {
      //将chartArr[i]添加到子数组
      currData.push(data[i]);
      
      //在这里求4的余数,如果i不等于0,且可以整除 或者考虑到不满4个或等于4个的情况就要加上  i等于当前数组长度-1的时候
      if((i != 0 && (i + 1) % 10 == 0) || i == data.length - 1) {
          //把currData加到allData里
          allData.push(currData);
          //在这里清空currData
          currData = [];
      }
  };
  return allData
}
class Wzf_g_list extends Component {
    constructor(props){
        super(props)
        this.state={
          data:[],
          total:"",
          page:0,
          moren:1
        }
      }
      foo(page,pageSize){
        this.setState({page:page-1})
       }
       foo1(page,pageSize){
         console.log(page,pageSize)
       }
      
      componentWillMount(){
        var _this = this
        $.ajax({
          type:"get",
          url:"http://maoyan.api/piao",
          dataType:"json",
          async:false,
          success:function(data){
            console.log(data.dianying)
            var data =data.dianying
            _this.state.data=fuzu(data)
     
            _this.state.total=data.length
          }
        })
      }
  render() {
    var jsx=[]
    this.state.data[this.state.page].map((item,i)=>{
      jsx.push(
        <li data-id={item.id} key={item.id}>
        <div className='cinema-info'>
            <a href="/">{item.name}影院</a>
            <p>地址：{item.diqu}</p>
        </div>
        <div className='buy-btn'>
            <a href="/">选座购票</a>
        </div>
        <div className='price'>
            <span className='rmb red'>￥ </span>
            <span className='price-num red'>{item.pic} </span>
            <span className='stonefont'>起 </span>
        </div>
    </li>
      )
    })
    return (
      <div className="Wzf_d_list">
        <h2 className="title">影院列表</h2>
        <ul className='main'>
            {jsx}
        </ul>
        <div className='page-bao'>
        <Pagination className='page' onShowSizeChange={this.foo1} defaultPageSize={10} onChange={this.foo.bind(this)} defaultCurrent={this.state.moren} total={this.state.total} />

        </div>
      </div>
    );
  }
}

export default Wzf_g_list;

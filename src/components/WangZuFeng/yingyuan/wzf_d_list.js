import React, { Component } from 'react';
import { Pagination } from 'antd';
import style from './style.css'
import $ from 'jquery'


import list from './list'
var Mock = require('mockjs')

Mock.mock('http://maoyan.api1',{
  "dianying|50":[
      {
          "id|+1":10000,
          "pingfen":"@float(0,9)",
          "name":"@ctitle",
          "piao":'@boolean()',
          "img":'@dataImage(160x220)',
          "date":"@date('yyyy-MM-dd')"
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
      if((i != 0 && (i + 1) % 30 == 0) || i == data.length - 1) {
          //把currData加到allData里
          allData.push(currData);
          //在这里清空currData
          currData = [];
      }
  };
  return allData
}







class Wzf_d_list extends Component {
  constructor(props){
    super(props)
    this.state={
      newdata:[],
      data:[],
      total:"",
      page:0,
      moren:1
    }
  }
  componentWillMount(){
    var _this = this
    $.ajax({
      type:"get",
      url:"http://maoyan.api1",
      dataType:"json",
      async:false,
      success:function(data){
        var data =data.dianying
        for(var i=0;i<data.length-1;i++){
          for(var k=0;k<data.length-i-1;k++){
            if(data[k].pingfen>data[k+1].pingfen){
              var swap = data[k];
              data[k]=data[k+1]
              data[k+1]=swap
            }
          }
        }
        data.reverse()
         _this.state.newdata=data

        _this.state.total=data.length
        
     
        _this.state.data=fuzu(data)
      }
    })
  }
  componentDidMount(){
    
    var _this = this
  $(".Wzf_d_paixu>li").on('click',function(){
    $(".Wzf_d_paixu>li>span>span").removeClass("sort-atcion")
    $(".Wzf_d_paixu>li").children().children().eq(0).removeClass("sort-atcion")
    $(this).children().children().eq(0).addClass("sort-atcion")
    if($(this).index()==0){
      var data = _this.state.newdata
     
      for(var i=0;i<data.length-1;i++){
        for(var k=0;k<data.length-i-1;k++){
          if(data[k].pingfen>data[k+1].pingfen){
            var swap = data[k];
            data[k]=data[k+1]
            data[k+1]=swap
          }
        }
      }
      data.reverse()
      
       _this.setState({data:fuzu(data),moren:"1"})

    }
    if($(this).index()==1){
      var data = _this.state.newdata
      for(var i=0;i<data.length-1;i++){
        for(var k=0;k<data.length-i-1;k++){
          if(data[k].id>data[k+1].id){
            var swap = data[k];
            data[k]=data[k+1]
            data[k+1]=swap
          }
        }
      }
      data.reverse()
       _this.setState({data:fuzu(data),moren:"1"})
    }
  })
  
}  

 foo(page,pageSize){
  this.setState({page:page-1})
 }
 foo1(page,pageSize){
   console.log(page,pageSize)
 }


  render() {
    
    var jsx=[]
    this.state.data[this.state.page].map((item,i)=>{
      jsx.push(
        <dd key={item.id}>
        <div className='movie-item'>
          <img src={item.img} alt=""/>
        </div>
        <div className='movie-item-title'>{item.name}</div>
        <div className='movie-item-pingfen'>
          <i className='font-18'>{Math.floor(item.pingfen) }.</i>
          <i>{String(item.pingfen.toFixed(2)).substring(2,3)}</i>
        </div>
      </dd>
      )
    })

    return (
      
      <div className="Wzf_d_list">
        <ul ref='paixu' className='Wzf_d_paixu'>
        <li>
            <span>
                <span className='sort-control sort-atcion'></span>
                <span>按热门排序</span>
            </span>
        </li>
        <li>
            <span>
                <span className='sort-control'></span>
                <span>按时间排序</span>
            </span>
        </li>
        <li>
            <span>
                <span className='sort-control'></span>
                <span>按评价排序</span>
            </span>
        </li>
        </ul>
        <div className='Wzf_d_main'>
        <dl className='movie-list'>
      {jsx}
        </dl>
        </div>
        <div className='page-bao'>
        <Pagination className='page' onShowSizeChange={this.foo1} defaultPageSize={30} onChange={this.foo.bind(this)} defaultCurrent={this.state.moren} total={this.state.total} />

        </div>
        
      </div>
    );
  }
}


export default Wzf_d_list;

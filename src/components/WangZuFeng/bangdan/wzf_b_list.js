import React, { Component } from 'react';
import style1 from './style.css'
import $ from 'jquery'
var Mock = require('mockjs')

Mock.mock('http://maoyan.api',{
  "dianying|10":[
      {
          "id|+1":10000,
          "pingfen":"@float(8,9)",
          "name":"@ctitle",
          "piao":'@boolean()',
          "img":'@dataImage(160x220)',
          "date":"@date('yyyy-MM-dd')",
          "zhuyan":'@cname()'
      }
  ]
})
class Wzf_b_list extends Component {
    constructor(props){
        super(props)
        this.state={
          data:[]
        }
      }
    componentWillMount(){
        var _this = this
        $.ajax({
          type:"get",
          url:"http://maoyan.api",
          dataType:"json",
          async:false,
          success:function(data){
             _this.state.data =data.dianying
           
    
          }
        })
      }
  render() {
    var jsx=[]
    this.state.data.map((item,i)=>{
      jsx.push(
        <dd key={i}>
       
            <i className={"board-index board-index-"+(i+1)}>{i+1}</i>
       
        
    <a href="/films/1229020" title={item.name} className="image-link" data-act="boarditem-click" data-val="{movieId:1229020}">
      <img src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png" alt="" className="poster-default"/>
      <img alt={item.name} className="board-img" src={item.img}/>
    </a>
    <div className="board-item-main">
      <div className="board-item-content">
              <div className="movie-item-info">
        <p className="name"><a href="/films/1229020" title={item.name} data-act="boarditem-click" data-val="{movieId:1229020}">{item.name}</a></p>
        <p className="star">
                主演：{item.zhuyan}
        </p>
<p className="releasetime">上映时间：{item.date}</p>    </div>
    <div className="movie-item-number score-num">
<p className="score"><i className="integer">{Math.floor(item.pingfen) }.</i><i className="fraction">{String(item.pingfen.toFixed(2)).substring(2,3)}</i></p>        
    </div>

      </div>
    </div>

                </dd>
      )
    })
    return (
      <div className="Wzf_b_list">
        <div className='Wzf_b_main'>
        <p className="update-time">2018-11-05<span className="has-fresh-text">已更新</span></p>
        <p className="board-content">榜单规则：将昨日国内热映的影片，按照评分从高到低排列取前10名，每天上午10点更新。相关数据来源于“猫眼专业版”及“猫眼电影库”。</p>
        <dl>
        {jsx}
        </dl>
        </div>
      </div>
    );
  }
}

export default Wzf_b_list;

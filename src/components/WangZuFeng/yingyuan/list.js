import $ from 'jquery'
var Mock = require('mockjs')

Mock.mock('http://maoyan.api',{
    "dianying|50":[
        {
            "id|10000":0,
            "pingfen":"@natural(10)",
            "name":"@ctitle",
            "piao":'boolean()'
        }
    ]
})

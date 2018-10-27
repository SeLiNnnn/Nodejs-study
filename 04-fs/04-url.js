const {URL} = require('url');
const QS = require('querystring');
const MY_URL = new URL('http://nodejs.cn/api/events.html#events_class_eventemitter');


//如果只拿到了查询路径 也就是没有https://www.baidu.com/s...等前面的协议和主机名 使用console.log输出就报错
//使用querystring查询字符串

//console.log(QS.parse(MY_URL.search));//{} 查询的是什么 {}里就是什么 
//console.log(QS.parse(MY_URL.search.slice(1)));//如果查询带了？就用slice(1)从第一位开始查询到最后一位 来忽略?的问题
const QUERY_OBJ = console.log(QS.parse(MY_URL.search.slice(1)));//返回查询对象
console.log(QUERY_OBJ.wd);

const Koa = require('koa');
const router = require('./02-router')
const static = require('koa-static')
//以上都可以理解为中间件 按app.use的调用顺序来执行 这些最好都放在路由之前
const koaBody = require('koa-body')//post方法
const cors = require('@koa/cors')//跨域请求
const { join } = require('path')

const app = new Koa;

//处理img css js等静态资源
app
    .use(static(join(__dirname, "static")))//拼接绝对路径 表示所有静态资源的根目录
    .use(koaBody())//负责监听所有的post请求
    .use(cors())
    

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000)
const KOA = require('koa');//导出的是一个构造函数
const APP = new KOA;//需要生成一个实例

APP.use(async (ctx, next) => {
    //console.log(ctx);//输出参考ctx.json
    //ctx.json里面的req,res就是node原生的req,res, 而response和request是koa将常用的req,res的API封装起来提供的
    //在koa中 不建议再使用req res，koa进行了很多处理，只针对response和request 除非要使用的api没有集成到koa 再去使用node原生的

    //如何响应数据？
    // ctx.body = "返回数据";
    // ctx.body += "这是第二次返回的";
    //页面输出 返回数据这是第二次返回的 说明可以调用多次ctx.body
    
    // ctx.body = {
    //     a : 1
    // };//{"a":1}

    //和原生write,end的区别？
    //  1.ctx.body会自动停止 不会被挂起 而原生必须要使用end()
    //  2.可以直接输出json 本质还是字符串 只是koa在底层进行了处理

    ctx.body = ctx.url;//  /
    ctx.body = ctx.method;// GET 
    //可以在npm 和github查看koa的api

    ctx.body = ctx.ip;//::1 在局域网内 可以通过其他电脑访问本机的3000端口
    ctx.body = ctx.path;
    //localhost:3000/path?name=selin&age=21
    //path只取到path 而url取到所有 包括查询值

    ctx.body = ctx.query;//{"name":"selin","age":"21"} 返回查询信息 转成json
    ctx.body = ctx.querystring;//name=selin&age=21

    ctx.status = 201;//设置状态码
    ctx.body = ctx.query;

    ctx.type = "html";//当你传递的就是json koa内部会强制为json 即使设置的是html也会转为json
    ctx.body = "<h1>h1</h1>";
    
});


APP.listen(3000);
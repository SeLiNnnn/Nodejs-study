const Koa = require('koa');
const Router = require('koa-router');//必须依赖于koa存在

const app = new Koa;
const router = new Router;

// hostname:localhost:3000 
// / - index

router.get("/", async (ctx, next) => {//路径是/根路径 且访问方式为get的 才能进入该中间件 router.get可以接收多个中间件但use不可以
    ctx.body = "<h1>index</h1>";
    console.log("接受根路由的get请求 -- 中间件1")
    await next()
    console.log("中间件1响应请求")
}, async (ctx, next) => {
    console.log("接受根路由的get请求 -- 中间件2")
    await next()
    console.log("中间件2响应请求")
})//如果get执行了 这一次的中间件就交到了get请求的第二个中间件

// router.post("/", async (ctx, next) => {
//     // post和get进行来的操作一定是不一样的 
//     // get查找 post增加 put修改 delete删除 路由命名都是名词 使用http的方法来代替需要使用到的动词
//     // get不管调用多少次 服务器状态都是不变的 而post调用多少次 状态就改变多少次 put如果提交的参数都是一致的 相当于只修改了一次
// })

router.get("/home", async (ctx, next) => {//没有后续中间件 不用next
    ctx.body = "<h1>home</h1>";
})
router.get("/user", async (ctx, next) => {
    ctx.body = "<h1>user</h1>";
})

//把中间件注册到了router上 还需把router挂载到app上 把整个router都理解为中间件
app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000)

// 接受根路由的get请求 -- 中间件1
// 接受根路由的get请求 -- 中间件2
// 中间件2响应请求
// 中间件1响应请求
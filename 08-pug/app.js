const Koa = require('koa')
const views = require('koa-views')//挂载模板引擎的中间件
const Router = require('koa-router')
const { join } = require('path')

//pug安装后不需要导入 koa-views会自动识别

const app = new Koa
const router = new Router

//设置模板文件夹路径
//__dirname拿到app.js的路径 app旁边的views文件夹
app.use(views(join(__dirname, "views"), {
    //告诉views当前使用的模板引擎是哪一个
    extension: 'pug'
}))

router.get("/", async (ctx) => {
    //await ctx.render("index", {swit: 0}) //直接使用ctx.render渲染文件 一定要使用await 异步执行

    //假设是从数据库遍历获取的数据
    // await ctx.render("index", {
    //     arr: ["7", "8", "9"]
    // })
})

app
    .use(router.routes())
    .use(router.allowedMethods())

// app.use( async (ctx) => {
//     await ctx.render("index")//渲染模板引擎 这里的路径是相对于views文件夹来说的 可以省略.pug后缀 一定要注意这里是异步 必须带上await
//     这里是不用router的写法
// })

app.listen(3000)
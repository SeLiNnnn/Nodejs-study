const Koa = require('koa')
const koaBody = require('koa-body')
const { join } = require('path')

const app = new Koa


app.use(koaBody({
  multipart: true,//支持文件上传功能 必须为true
  formidable: {
    // 上传存放的路径
    uploadDir: join(__dirname, "upload"),
    // 保持文件后缀不变
    keepExtensions: true,
    // 文件大小
    maxFileSize: 10240,//1024字节=1kb
    onFileBegin: (name, file) => {//文件上传的那一刻 这个函数执行
      // 取后缀  如：.js  .txt
      const reg = /\.[A-Za-z]+$/g
      const ext = file.name.match(reg)[0] 

      // 修改上传文件名
      file.path = join(__dirname, "upload/") + Date.now() + ext
    },
    onError(err){
      console.log(err)
    }
  }
}))

app.use(async (ctx) => {
  // 表单数据在body 如果是post
  console.log(ctx.request.body)
  // 文件在files 如果是文件
  console.log(ctx.request.files)
  ctx.body = "上传成功"
})

app.listen(3002)
console.log("启动成功")
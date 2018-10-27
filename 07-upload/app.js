const Koa = require('koa')
const Router = require('koa-router')
const multer = require('koa-multer')//只能支持文件上传 不能处理数据
const { join } = require('path')

const app = new Koa
const router = new Router

const storage = multer.diskStorage({
    //存储的位置
    destination: join(__dirname, "upload"),//绝对路径
    //文件名
    filename(req, file, cb){//file是对象 存储了当前上传文件的很多信息 originalname是前端上传的文件的原始名字
        const filename = file.originalname.split(".")
        cb(null, `${Date.now()}.${filename[filename.length-1]}`)//cb是一个回调 第一个参数直接给null第二个参数修改名字
        //设置不同的名字可以遵循的规则：时间戳 用户名等 尽量保证文件名是不重复的
    }
})

const upload = multer({storage})//绑定到multer上才能生效 上传文件时 必须先经过upload中间件 才能到其他中间价去

router.post('/fileUpload', upload.single('file'), async ctx => {
    ctx.body = {
        filename: ctx.req.file.filename
    }
})

app.use(router.routes()).use(router.allowedMethods)
app.listen(3000)
const Router = require('koa-router')
const admin = require('./02-admin')
const router = new Router

router.get('/', admin.root)
router.get('/home', admin.home)
router.get('/user', admin.user)//user里面还有很多功能 把功能再抽离出来
router.post('/postDateShow', async ctx => {
    ctx.body = ctx.request.body
})

module.exports = router

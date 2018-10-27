const KOA = require('koa');
const REQUEST = require('request');

const APP = new KOA;

APP.use(async (ctx, next) => {
    REQUEST
        .get("http://www.mafengwo.cn/search/s.php?q=" + ctx.path)
        .end((err, res) => {
            console.log(err);
        });//马蜂窝官网的搜索

    ctx.body = "正在请求";
});

APP.listen(3000);
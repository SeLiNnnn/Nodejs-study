const request = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');
const { join } = require('path');
const Koa = require('koa');
const app = new Koa;
const url = "http://www.mafengwo.cn/";

app.use(async ctx => {
    const arr = [];
    const data = await new Promise(resolve => {
        request
            .get(url)
            .end((err, res) => {
                const data = res.text;
                const $ = cheerio.load(data);
                $("div.tn-item").each((i, v) => {
                    const $v = $(v);
                    const obj = {
                        img : $v.find("img").prop("src"),
                        title : $v.find("a._j_gs_item").text().trim()
                    
                    }
                    arr.push(obj);
                })
                resolve(arr);
            })
    })
    ctx.body = arr;
    console.log(arr);
})
app.listen(3002);


//输出为空数组 不知道为啥。。
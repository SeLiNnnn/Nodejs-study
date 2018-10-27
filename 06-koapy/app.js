const request = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');//fs-extra
const { join } = require('path');
//const { resolve } = require('url')
const Koa = require('koa');
const app = new Koa;
const url = "https://www.shiguangkey.com/";

app.use(async ctx => {//没有其他中间件可以不写next
    const arr = [];
    const data = await new Promise(resolve => {
        request
            //.post("http://www.mafengwo.cn/")
            .post(url)
            .end((err, res) => {
                //console.log(res.text);//res.text页面源码 整体是个字符串
                const data = res.text;
                const $ = cheerio.load(data);

                //去分析源网页的dom结构
                //console.log($(".tn-item .tn-place").eq(0).text());
                //console.log($(".course-item .item-txt").eq(0).text());

                $(".course-item").each((i, v) => {
                    const $v = $(v);
                    const obj = {
                        img : $v.find("img").prop("src"),
                        title : $v.find("a.ictxt").text().trim(),
                        num : Number.parseInt($v.find("a.item-txt").text().slice(5).replace("人", "")),
                        src : join(url, $v.find('a.cimg').prop('href'))
                    
                    };
                    arr.push(obj);

                    //console.log($v.find("a.ictxt").text().trim());//古筝精品试听课 酷玩流行钢琴即兴伴奏与演奏...
                    // console.log($v.find("a.item-txt").text());//报名人数：12500人 报名人数：6090人...
                    //console.log($v.find("a.item-txt").text().slice(5).replace("人", ""));//把人替换为空字符串 只输出数字
                    //console.log($v.find('a.cimg').prop('href'));
                    //console.log(resolve('https://www.shiguangkey.com/', $v.find('a.cimg').prop('href')));//使用join或resolve拼接url 防止不同系统的路径表示不同

                });
                
                //console.log(arr);
                //fs.writeFile("base.txt", JSON.stringify(arr), "utf8");
                resolve(arr);
            })
    })
    ctx.body = arr;
})
app.listen(3000);

// console.log(request);
// console.log(cheerio);


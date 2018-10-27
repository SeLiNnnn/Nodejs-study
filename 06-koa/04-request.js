const request = require('superagent');
const cheerio = require('cheerio');//将html字符串转为html dom对象 且内含dom操作 和jquery完全一样的API
// const $ = cheerio.load('<h2 class="title">Hello World</h2>');

//因为没有数据库 所以使用数组存储数据 每一个json就是一个景点

[
    {
        img : "",
        title : "",//游记标题
        info : "",//文章简介 
        location : "" //游记地点

    }
]

request
    .post("http://www.mafengwo.cn/")
    .end((err, res) => {
        //console.log(res.text);//res.text页面源码 整体是个字符串
        const data = res.text;
        const $ = cheerio.load(data);
        //去分析源网页的dom结构
        console.log($(".tn-item .tn-place").eq(1).text());
    })
const KOA = require('koa');
console.log(KOA);//[Function: Application]

const APP = new KOA;//执行构造函数 生成koa实例
console.log(APP);//[Function: Application]  { subdomainOffset: 2, proxy: false, env: 'development' }

//node搭建服务器
APP.use(async (ctx) => {
    ctx.body = "这是后台返回的数据";
}).listen(3000);
//这时在浏览器访问localhost：3000可以看到输出的文字：这是后台返回的数据


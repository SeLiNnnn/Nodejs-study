//req里的路由
const HTTP = require('http');

const SERVER = HTTP.createServer((req, res) => {
    //得到路由：
    //res.end(req.url);//会输出一个/ 代表根路径
    // 如果在浏览器写上localhost:3000/path/selin
    // 输出/path/selin

    //res.end(req.method);//GET
    
    res.end(JSON.stringify(req.headers));//{"host":"localhost:3000","connection":"keep-alive"...}
    //得到请求头信息 注意：一定要将req.headers转为字符串才能输出
});

SERVER.listen(3000);
console.log("服务启动了");
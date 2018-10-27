//限制访问方式get/post 不同方式进行不同的操作
const HTTP = require('http');

const SERVER = HTTP.createServer((req, res) => {
    if(req.method === "GET") {
        //res.end("<a href='https://www.baidu.com'>baidu</a>");//可以解析html标签
        res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
        switch (req.url) {
            case "/" :
                //返回index
                res.write("<h1>index</h1>");
                break;
            case "/home":
                //home
                res.write("<h1>home</h1>");// localhost:3000/user 输出home
                break;
            case "/user":
                //user
                res.write("<h1>user</h1>");
                break;
            default:
                //404
                res.write("<h1>404</h1>");
                break;           
        }
        res.end(); 
    }

});

SERVER.listen(3000);
console.log("服务启动了");
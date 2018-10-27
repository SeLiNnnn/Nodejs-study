const HTTP = require('http');

HTTP.createServer((req, res) => {
    res.end(JSON.stringify(req.url));
    // 输入localhost:3000/?data=name
    // 输出"/?data=name" 


}).listen(3000);

//用原生很麻烦。。。今天开始抛弃原生。。。
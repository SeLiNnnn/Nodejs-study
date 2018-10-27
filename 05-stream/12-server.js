const HTTP = require('http');

HTTP.createServer((req, res) => {
    const OBJ = {
        a : 1,
        b : 2
    }
    //web.html发起请求到app.js 然后app.js向server.js发起请求得到数据 再从app返回到web.html server.js相当于代理
    

    res.write(JSON.stringify(OBJ));//这三行都是同步的 如果1执行了说明这行一定给客户端返回了数据
    res.end();
}).listen(3001);
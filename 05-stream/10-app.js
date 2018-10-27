//通过stream流来读取html文件
//实际开发中 一般都是通过框架去写路由
const HTTP = require('http');
const FS = require('fs');

const SERVER = HTTP.createServer((req, res) => {
   
    
    if(req.method === "GET") {
        res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
        switch (req.url) {
            case "/" :
                FS.createReadStream("index.html").pipe(res);//整个index文件通过pipe流入res
                break;
            case "/home":
                //home
                //异步方法
                FS.readFile("home.html", "utf8", (err, data) => {
                    res.write(data);
                    res.end();//使用异步方法的时候记得把res.end()提进来 否则就是先执行最后的end 
                });
                break;
            case "/user":
                //user
                res.write(FS.readFileSync("user.html", "utf8"));
                break;
            default:
                //404
                res.write(FS.readFileSync("404.html", "utf8"));
                break;           
        }
        //res.end(); 
    }

});

SERVER.listen(3000);
console.log("服务启动了");
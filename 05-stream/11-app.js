const HTTP = require('http');
const SERVER = HTTP.createServer((req, res) =>{
    const OBJ = {
        a : 1,
        b : 2
    }

    //跨域解决 cors
    res.setHeader('Access-Control-Allow-Origin','*');//设置后就可以输出{"a":1,"b":2}

    res.write(JSON.stringify(OBJ));//这三行都是同步的 如果1执行了说明这行一定给客户端返回了数据
    console.log(1);
    res.end();

    //如果这样以后 前端页面得到如下报错信息：
    //Failed to load http://localhost:3000/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.
    //说明是跨域了 是浏览器拦截了数据不让已经返回的数据显示到前端 
    //浏览器出于安全考虑 在一次正常的回话请求中 会去检查请求信息 在respinse headers里 有一个字段：Access-Control-Allow-Origin:*
    //代表请求源是任意源 之所以浏览器掐断了这次请求 说明没有在服务器端设置请求源的信息
})

SERVER.listen(3e3, () => {
    console.log("监听成功时执行");
})
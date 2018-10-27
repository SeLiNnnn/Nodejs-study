const REQUEST = require('http').request;//通过request在服务端发起请求

const OPTIONS = {
    host : "localhost",
    port : 3001,
    method : "get",
    path : "/"
}

const REQ = REQUEST(OPTIONS, res => {
    res.setEncoding("utf8");

    res.on("data", (chunk) => {
        console.log(chunk);//输出server里的{"a":1,"b":2}
    });

    res.on("end", () => {
        console.log("响应结束");
    });
});

REQ.on("error", err => {
    console.log(err);
})
REQ.write("");//必须要发个空数据 保证是字符串或buffer 否则会报错
REQ.end();

//02 http视频最后9分钟 不听了！！！



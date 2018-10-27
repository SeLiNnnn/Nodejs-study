//创建http服务
const HTTP = require('http');

const SERVER = HTTP.createServer((req, res) => {//(请求体对象,响应体对象)2个形参最好名字就是req res
    res.writeHead(200, {"Content-Type":"text/plain; charset=utf-8"})//设置响应头 第一个参数是状态码 第二个参数确定响应的文件类型和编码格式
    res.write("向客户端返回数据111");//未设置writeHead时中文会乱码
    res.write("向客户端返回数据233");//write可以调用无数次 end只能到调用一次 
    res.end("。");//结束响应 否则会一直在浏览器转圈圈 只有结束响应了才会拿到数据
    res.end("!");//并不会变成! 因为上一句end已经结束了本次会话 上下文环境已经关闭了 再写write end都没有任何意义
    console.log(1);//这里的1会输出2次
    //输出2次的原因：除了我们页面本身的一次输出 网站默认还有一次名为favicon.ico的输出 网站图标 默认也是get请求 可在f12中查看到
    console.log(req.url);//这里会依次输出 / 和 /favicon.ico
    //所以 如果要阻止/favicon.ico 判断req.url是否等于/favicon.ico 等于的时候啥也不干 就可以了

    //write和end里的内容 必须是字符串或buffer 其他数据类型都会报错
    //end也可以输出内容 且是最后输出
})

SERVER.listen(3000);//端口号写3000-10000之间比较合适 太低会有默认服务被占用 太高。。并没有那么多端口号
console.log("服务启动了");
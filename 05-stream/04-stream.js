//原生stream
const READABLE = require('stream').Readable;//Readable创建可读流的接口

const RS = new READABLE;

//填充数据
RS.setEncoding("utf8");
RS.push("1");
RS.push("2");
RS.push(null);//push相当于有一扇门 push null的时候相当于把门关上了
//push结束时是静止的

//RS.pipe(process.stdout);//终端输出1 2

//RS只要监听了on 就会开始释放
RS.on("data", (chunk) => {
    console.log(chunk);//输出1 2
})
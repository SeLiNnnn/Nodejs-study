const FS = require('fs');

//复制文件及数据
//常规操作：通过readFile来获取文件 再在函数内部使用writeFile

//通过流来复制文件 方法一
// const READ = FS.createReadStream('./01-fs.txt');

// let res = "";

// READ.on("data", data => {
//     res += data;//每一次的数据拼接到res
// });
// READ.on("end", () => {
//     console.log("读取结束");
//     FS.writeFile();//读取结束再写入文件
// })

//方法二 更好的方法 -- 当通过可写流来写入数据的时候 不需要读取一点就拼接一点
const READ = FS.createReadStream('./01-fs.txt');
const WRITE = FS.createWriteStream('./2.txt');//创建一个可写流

//使用pipe 类似连接水流的管子 也就是流的通道 让数据源源不断地流过去s
READ.pipe(WRITE);
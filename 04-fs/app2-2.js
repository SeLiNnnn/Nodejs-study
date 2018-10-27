//同步读取文件
const FS = require('fs');
const data = FS.readFileSync("./demo.txt", "utf8")//同步如果读取出错就报错
console.log(data);//selin is a headsome man.
//文件内容较小时 可以考虑使用同步
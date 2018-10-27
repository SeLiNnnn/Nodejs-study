//判断文件和路径是否正确
//exists的异步方法被废弃了
const FS = require('fs');
//console.log(FS.existsSync("./1.txt"));//文件不存在 false

//创建文件夹
// FS.mkdir("./test", err => {
//     if(err)throw err;//文件不存在时抛出错误并创建文件夹
// })
//mkdir第二个参数mode表示操作文件的权限 比如可读不可写

//读取文件夹
// FS.readdir("./test", (err, data) => {
//     console.log(data);// ["1.txt", "2.txt", ...]输出一个数组 数组里是当前文件夹里的文件名字
// })
//可以通过遍历文件夹来读取每个文件

//如何判断是不是文件夹
const STAT = FS.statSync("./test");
console.log(STAT.isDirectory());//true 
//判断是不是文件
console.log(STAT.isFile());//false

//监听文件(文件的改变）
//(c, p)分别代表current和previous 表示当前的和修改前的
FS.watchFile("./test/2.txt", (c, p) => {
    console.log(p);
    console.log(c);
});
FS.writeFileSync("./test/2.txt", "selinnn");
// Stats {
//     dev: 16777220,
//     mode: 33188,
//     nlink: 1,
//     uid: 501,
//     gid: 20,
//     rdev: 0,
//     blksize: 4096,
//     ...
// }
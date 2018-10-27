//原生stream读取并写入文件
const READABLE = require('stream').Readable;//Readable创建可读流的接口
const FS = require('fs');

const WRITE = FS.createWriteStream("3.txt");

const RS = new READABLE;

//填充数据
RS.setEncoding("utf8");
RS.push("1");
RS.push("2");
RS.push(null);

RS.pipe(WRITE);//生成3.txt 里面数据是1 2


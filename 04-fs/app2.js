//fs操作文件-读取文件
const FS = require('fs');
//console.log(FS);//很多API

//读取文件
FS.readFile("./demo.txt", "utf8", function(err,data){//默认是异步
    if(err)return;
    //console.log(err);//1 null
    //console.log(data);// 1 <Buffer 73 65 6c 69 6e 20 69 73 20 61 20 68 65 61 64 73 6f 6d 65 20 6d 61 6e 2e>
    //默认输出的buffer 是一个二进制数据

    console.log(data);//设置utf8以后输出selin is a headsome man. 
})
//readFileSync是同步
console.log(1);

//如果文件不存在 会报错
//{ [Error: ENOENT: no such file or directory, open './demo1.txt']
// errno: -2,
// code: 'ENOENT',
// syscall: 'open',
// path: './demo1.txt' }



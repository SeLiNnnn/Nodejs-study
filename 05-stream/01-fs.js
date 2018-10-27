const FS = require('fs');

//什么时候使用同步？
//明确知道文件很小 且必须要拿到数据后才执行后面的内容
//FS.readFileSync();

FS.readFile("./fs.txt", "utf8", (err, data) => {
    //console.log(err);//如果没有发生错误 则输出null
    //console.log(data);//这是测试的文本数据
    console.log(1);//即使数据有1万行 也只执行1次
});
//异步的缺陷：必须把所有数据读取到内存的时候才会执行 当数据非常大的时候读取就会很慢 
//为了让数据边读取边处理--引入stream流


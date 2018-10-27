//由于stream流无法直接演示 所以使用fs
//stream流类似于视频播放进度条 能够让视频边缓存边播放

const FS = require('fs');
//不需要导入stream 因为其原生就被fs继承了

//创建可读流 stream没有回调 需要通过on来监听
const READ = FS.createReadStream('./01-fs.txt');

//READ.resume();//让事件从暂停状态变为释放状态 这里只是让数据流动起来而无法接收数据
//不写resume()的时候是无法触发end事件的

READ.setEncoding("utf8");//设置输出数据的编码格式 否则输出buffer
READ.on("data", data => {
    //console.log(data);
    console.log(1);//这里输出了5个1 而不是像fs里的只输出1个1  这说明是分开读取的 大概1次读取了2000行左右
})//data方法 不仅让事件从暂停状态变为释放状态 还可以接收数据

//流体有两种状态：暂停和释放状态，释放状态时才会输出数据
//流体的end事件 来判断是否读取完成
READ.on('end', () => {
    console.log('读取结束');
})
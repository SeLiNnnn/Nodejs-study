// process.nextTick( () => {
//     console.log("nextTick 1");
// });
//
// process.nextTick( () => {
//     console.log("nextTick 2");
// });
//
// // nextTick 1
// // nextTick 2
//
// setImmediate( () => {
//     console.log("immediate 1");
// });
// nextTick 1
// nextTick 2
// immediate 1

process.nextTick( () => {
    console.log("1");
});

process.nextTick( () => {
    console.log("2");
});
setImmediate( () => {
    console.log("3");
    process.nextTick( () => {
        console.log("4");
    })
});
setImmediate(() => {
    console.log("5");
});

setTimeout(function () {
    console.log(8);
}, 0);

process.nextTick( () => {
    console.log(7);
});
console.log("6");

//61278354

//node.js的执行顺序：
    // 在执行的开始声明了一个while(true){}无限循环 在无限循环里 有2个事件队列
    // macro-task: <script>全部的代码</script> 当前定义的函数是立即执行 而异步执行的是回调里的函数
        // setInterval setTimeout setImmediate I/O操作(所有和读写有关的 包括网络，文件，数据库等都属于I/O 还有UI)
    // micro-task:process.nextTick Promise.then 执行顺序就是这样的

//异步与异步代码的执行顺序：
    // 先执行<script> 然后把micro-task队列里的所有事件都执行完
    // 再执行macro-task 也是按事件顺序执行
    // 异步里嵌套异步 会让同一个队列里的都情况里 再重新去执行嵌套的异步函数




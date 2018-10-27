//setImmediate( callback[arg....] );//回调函数
// setImmediate( () => {
//     console.log(1);//会在将来执行
// } );

//console.log(2);//输出21 setImmediate看起来是异步

Promise.resolve("1").then(res => {//Promise是同步但then是异步的
    console.log(res);
});//先生成一个状态为成功的promise触发then 但then是异步的 所以去触发2然后再执行then
console.log(2);
//还是输出 2 1

//类似API
process.nextTick(() => {
    console.log(1);
});
console.log(2);
//也是在同步以后才执行回调














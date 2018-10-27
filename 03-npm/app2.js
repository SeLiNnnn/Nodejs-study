const EVENTS = require('events').EventEmitter;//EventEmitter接口提供了观察者模式
const MY_EMITTER = new EVENTS;//生成实例对象
//以前的做法：先定义FN 然后再异步函数内部执行回调 但该方法涉及传参 很麻烦 所以我们选择借助EventEmitter方法
// const FN = () => {
//     console.log("这是某个异步的回调函数");
// }

// setTimeout((FN) => {
//     FN();
// }, 2000, FN);
// MY_EMITTER.on("someEvents", FN);


const FN = () => {
    console.log("这是某个异步的回调函数");
}
//这里有一个异步的操作 如果用回调很麻烦
setTimeout(() => {
    //异步结束
    MY_EMITTER.emit("someEvents1");//通过emit来触发someEvents事件
}, 2000);
//监听对应的事件
// MY_EMITTER.on("someEvents",FN => {
//     console.log("这是某个异步的回调函数");//这个函数应该在监听的异步函数结束时执行
// });//on监听someEvents事件
MY_EMITTER.on("someEvents", FN);
MY_EMITTER.on("someEvents1", () => {
    console.log("someEvents1");//这时候执行并输出的是someEvents1 
})


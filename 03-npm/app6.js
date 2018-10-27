const EVENTS = require('events').EventEmitter;
const MY_EMITTER = new EVENTS;

// MY_EMITTER.on("test", () => {
// 	console.log(1);
// });
// MY_EMITTER.on("test", () => {
// 	console.log(2);
// });
//查询test函数有多少回调 
//console.log(MY_EMITTER.listeners("test"));//[ [Function], [Function] ]


MY_EMITTER.setMaxListeners(1);//设置最多有1个监听 但还是会有2个 即使默认是10个 还是会执行11个 不会清空已写好的函数 会继续执行但会有超出的警告
MY_EMITTER.on("test", () => {
	console.log(1);
});
MY_EMITTER.on("test", () => {
	console.log(2);
});
console.log(MY_EMITTER.listeners("test"));//还是有2个函数
MY_EMITTER.emit("test");// 1 2

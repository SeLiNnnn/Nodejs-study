const EVENTS = require('events').EventEmitter;
const MY_EMITTER = new EVENTS;


MY_EMITTER.on("test", () => {});
MY_EMITTER.setMaxListeners(20);//自定义最多监听的个数
console.log(MY_EMITTER.getMaxListeners());//默认是10个 修改后是20个

//getMaxListeners 同时监听一个函数的回调 默认最多是10个
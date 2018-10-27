const EVENTS = require('events').EventEmitter;
const MY_EMITTER = new EVENTS;

MY_EMITTER.on("newListener", function(){//在绑定了这个on的过程中 因为还没有进行事件处理 所以是不会输出的
	console.log('MY_EMITTER绑定了一个新的事件监听');
})

MY_EMITTER.on("test", () => {});//绑定了test事件
MY_EMITTER.on("test1", () => {});//绑定了2次就输出2次
//on其实就是addListener 只是简写了名字
//使用off解除绑定
//使用once绑定只绑定一次事件


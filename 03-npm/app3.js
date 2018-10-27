//注意！！！ __proto__是两个下划线

const EventEmitter = require('events').EventEmitter;
//自定义监听事件
function Fn(name) {
    this.name = name;
}
//希望Fn也拥有on emit等事件 需要去继承
Fn.prototype.__proto__ = EventEmitter.prototype;
const obj = new Fn("大帅比");

obj.on("test", function(){//obj.on is not a function
    //console.log(this === obj);//true
    console.log(this.name);
});

setTimeout(() => {
    obj.emit("test");
}, 1000);


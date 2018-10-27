const obj = require("./02");//如果没有./是无法得到02.js文件的 只有node.js的核心模块或者是第三方依赖模块 才可以直接写02.js不需要写路径
//console.log(obj.a);//undefined 模块之外无法访问
//console.log(1);//1
//console.log(global.a);//undefined 还是无法访问
//console.log(global.b);//undefined 和var let const无关

//console.log(global.c);//3

//require 默认导入的是其他js文件的module属性下的exports值 exports是一个对象

//require实际查找的是每个文件下的module.exports
//在这个里面的obj 接收的就是module.exports

//console.log(obj);//使用exports后输出123456

//obj();//这是02模块的函数
//console.log(obj);//就把exports理解为一个属性 对属性多次赋值 会出现覆盖

console.log(obj);//使用.扩展了属性以后 输出 { fn: [Function], num: 123 }






let a = 1;

var b = 2;

global.c = 3;

//export默认是一个空对象
//module.exports = 123456;

// module.exports = function () {
//     console.log("这是02模块的函数");
// };

//导出多个
//module.exports = 123;//会输出123 覆盖前面的赋值

// module.exports.fn = () => {//对象.fn 自定义属性来存储 通过.fn来扩展对象的属性
//     console.log("fn");
// };
//
// module.exports.num = 123;

//上面那种反复扩展的方法太麻烦了 nodejs给module.exports设定了一个快捷方式：
//global.exports = module.exports;//module.exports引用型 后面再赋值 改变了指向 所以可以导出不同的数据
//可以对exports=赋值 但不能对module.exports =赋值
//require默认导出的是module.exports 如果改变了指向 require就无法导出了


//exports = module.exports;//其实底层有这一步操作
//exports.fn = function () {};对exports扩展
//实际就是
//module.exports.fn
//因为exports指向了module.exports
//如果再在后面定义 exports = 1;就无法导出了，因为1覆盖了前面的指向 require无法导出

//exports = function(){}这是改变对象的指向
exports.fn = function () {//对象下的fn赋值
};
exports.num = 465;


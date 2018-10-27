const {resolve} = require('url');
//console.log(resolve("user/local/", "node"));// user/local/node
//console.log(resolve("user/local", "node"));// user/node
//console.log(resolve("user/local", "./node"));// user/node一样的
//console.log(resolve("user/local", "../node"));// node ../返回了上一层也就是根目录 所以变成了node直接去替换根目录/*
//console.log(resolve("user/local", "/node"));// /node 这里的第二个参数是绝对路径 直接第二个参数
//如果第二个参数node是基于第一个参数来进行扩展的 
// user/local/带/理解为： 根目录下的user下面的node下面的/*所有 这是会用第二个参数来替换/*的*
// user/local不写/理解为： user/* 直接用node替换了/*

//如果第二个参数是绝对路径 则直接返回第二个参数；如果不是，会和第一个参数进行拼接

console.log(resolve("http://a.com", "b"));// http://a.com/b
console.log(resolve("http://a.com", "/b"));// http://a.com/b
console.log(resolve("http://a.com", "./b"));//http://a.com/b
console.log(resolve("http://a.com/c", "./b"));// http://a.com/b
console.log(resolve("http://a.com/c/d", "./b"));// http://a.com/c/b
console.log(resolve("http://a.com/c/d/", "./b"));// http://a.com/c/d/b
console.log(resolve("http://a.com/c/d", "../b"));// http://a.com/b 已经是根目录了无法返回
console.log(resolve("http://a.com/c/d", "/b"));// http://a.com/b

//第一个参数是资源占位符即url 它本身a.com就相当于根目录
//类比上面的绝对路径进行理解 都是替换/* 

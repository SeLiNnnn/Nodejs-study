const PATH = require('path');
//拼接路径 join(传参)
//console.log(PATH.join());//  .
//console.log(__dirname);// /Users/selinnn/FrontEnd/2T-Nodejs/lesson-3 windows里还有盘符 这些都是绝对路径
//__dirname返回当前文件运行目录的绝对路径 
//console.log(__filename);// /Users/selinnn/FrontEnd/2T-Nodejs/lesson-3/app7.js
//__filename返回当前运行文件的绝对路径

//路径的拼接:不能直接写a/b，因为不同系统环境路径的写法可能不同 
//join返回的是相对路径 并且会自动去修正补齐路径写法
//console.log(PATH.join("a","./b",".."));//a  因为..表示返回上一层
//console.log(PATH.join("a","./b","/c"));//a/b/c
//console.log(PATH.join("a","./b","./.."));//a
//console.log(PATH.join("a","./b","~"));// a/b/~没有根目录的意思

//resolve返回的是绝对路径
//console.log(PATH.resolve());// /Users/selinnn/FrontEnd/2T-Nodejs/lesson-3返回文件目录的路径
//console.log(PATH.resolve("a"));// /Users/selinnn/FrontEnd/2T-Nodejs/lesson-3/a

//项目上线的过程中 尽量使用绝对路径 比较安全

//console.log(PATH.resolve(__dirname,"test"));// /Users/selinnn/FrontEnd/2T-Nodejs/lesson-3/test
//console.log(PATH.resolve(__dirname,"./test"));// ./test也是可以的 但是不要/test 因为根目录默认就是/test 它找到的就是根目录test

console.log(PATH.parse(__filename));
//{ root: '/',
// dir: '/Users/selinnn/FrontEnd/2T-Nodejs/lesson-3',文件目录
// base: 'app7.js',文件名和扩展名
// ext: '.js',后缀名
// name: 'app7' 文件名}
console.log(PATH.parse(__filename).base);// app7.js 文件名+后缀名


//解构赋值？？？
//const { join } = require('path');
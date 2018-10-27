//es6解决异步编程问题 -- 如何进行判断
// const FS = require('fs');
// const FN = async () => {
//     const data =  await FS.readFile("./demo.txt", "utf8", function(err,data){
//         if(err)return;
//         return data;
//     })
//     return data;
// }
// FN();
// console.log(FN());//Promise { <pending> }不写promise直接取值是取不到的

//还是拿不到数据
// Promise { <pending> }
// selin is a headsome man.
// const FS = require('fs');
// const FN = async () => {
//     const data = await new Promise((resolve, reject) => {
//         FS.readFile("./demo.txt", "utf8", (err, data) => {
//             if(err)return reject(err);
//             resolve(data);
//         })
//     })
//     console.log(data);
// }
// console.log(FN());

//问题原因：
// 1
// 2
// selin is a headsome man.
//因为async()虽然让我们的代码看起来像同步 但它本身其实还是异步的 所以是拿不到的 
//且在实际操作中 尽量不要通过async函数去返回值 所以这种方法...不讨论了- -
const FS = require('fs');
const FN = async () => {
    const data = await new Promise((resolve, reject) => {
        FS.readFile("./demo.txt", "utf8", (err, data) => {
            if(err)return reject(err);
            resolve(data);
        })
    })
    console.log(data);
}
console.log(1);
FN();
console.log(2);

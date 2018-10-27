Promise.resolve(1).then(res => console.log(res));

process.nextTick(() => {
    console.log(2);
});

setTimeout(() => {
    console.log(3);
}, 0);

console.log(4);

//4 2 1 3
// macro-task:script 定时器
// micro-task:process.nextTick Promise.then

//setTimeout 和 setInterval优先级相同 谁先声明谁先执行
//但这两个一定是高于setImmediate

let timer = null;

setImmediate(() => {
    console.log(2);
});

timer = setInterval(function () {
    console.log(1);
    clearInterval(timer);
}, 0);

setTimeout(() => {
    console.log(3);
}, 0);

// 1 3 2

//nextTick > Promise.then > setTimeout > setImmediate
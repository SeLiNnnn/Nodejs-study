//nodejs把I/O操作抽象为了事件 所以node是事件驱动 故有请求和响应两次事件
const KOA = require('koa');//导出的是一个构造函数
const APP = new KOA;//需要生成一个实例

//中间件 可以多个函数处理同一个请求
//APP.use();//use是koa用于接收中间件 也就是每一个请求通过use注册到实例上去 且中间件必须是异步函数

//APP.use(async (ctx, next) => {});//默认有两个形参 koa把http里的req,res集成到了ctx(context 上下文)里面，并进行了更加高度的封装   

//APP.use(async (ctx, next) => {});//可以注册无数个use async (ctx, next) => {}也是中间件

//为什么多个函数可以执行同一个事件？因为koa的内部把多个函数放到了一个数组里 [async, async1, ...]
//中间件如何执行的？怎么控制的流程？
//  1.push到数组 谁先注册谁在前面
//  2.ctx里有这次中间件的控制 next将控制权交给了下一个中间件 
//  3.当是最后一个中间件 它后面没有中间件函数了 执行next不会报错 此时开始响应 并将next返回到前一个 直到返回到第一个 
//      最后一次中间价调用结束 控制权会自动回来 但调用控制权是手动的
//  4.洋葱模型 类似筷子穿过洋葱每一层                 

//中间件1
APP.use(async (ctx, next) => {
    console.log('中间件1 接收请求');
    await next();//因为是异步函数 必须加上await
        //如果没有next 
        // 中间件1 接收请求
        // 中间件1 响应数据
    console.log('中间件1 响应数据');
});
//中间件2
APP.use(async (ctx, next) => {
    console.log('中间件2 接收请求');
    await next();//因为是异步函数 必须加上await
    console.log('中间件2 响应数据');
});
//中间件3
APP.use(async (ctx, next) => {
    console.log('中间件3 接收请求');
    await next();//因为是异步函数 必须加上await
    console.log('中间件3 响应数据');
});

// 中间件1 接收请求
// 中间件2 接收请求
// 中间件3 接收请求
// 中间件3 响应数据
// 中间件2 响应数据
// 中间件1 响应数据
// 中间件1 接收请求
// 中间件2 接收请求
// 中间件3 接收请求
// 中间件3 响应数据
// 中间件2 响应数据
// 中间件1 响应数据
// 之所以有2次 是因为有ico

APP.listen(3000);
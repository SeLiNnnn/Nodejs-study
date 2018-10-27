//断言
const assert = require('assert');
//console.log(0.1+0.2);//0.30000000000000004
//assert(false, "如果第一个参数的布尔值不为true，这个字符串就是报错信息");
//assert.equal(0.1+0.2, 0.3, "如果前面表达式不等于0.3也就是不符合预期 就报错");
//assert.equal(1+2, true, "内部使用==来判断 但有数字参与判断时会自动转为数字运算 而不是把3转为布尔值 这句是把true转为了1 所以1+2不等于1 ")
//assert.strictEqual(1,true, "严格等于 也就是===");
//assert.deepEqual({a:'1'},{a:1}, "判断对象 比较两个对象属性 只要一一对应 就相等 且在比较值的时候使用==判断 所以这一句不报错");

//比较两个对象是否相等 对于报错后后面函数不执行的解决方案：
try {
    assert.deepEqual({a:'1'},{a:2}, "不相等就报错");
} catch (error) {
    console.log(1);
}

//使用try catch处理报错 当报错执行到catch语句 抛出错误并保证后面的函数可以继续执行,所以此时输出1 2如果不使用try catch报错后就不会再输出2了
console.log(2);
const mongoose = require('mongoose');
//npm安装mongoose 导入库

//连接mongodb的服务器
const db = mongoose.createConnection("mongodb://localhost:27017/selindb", {useNewUrlParser:true});//如果有对应的数据库则连接，否则创建并连接

//用原生es6的promise取代mongoose自实现的promise
mongoose.Promise = global.Promise;//继承原生es6语法 避免冲突
//在操作数据库之前，得使用Schema设置每个字段的数据类型
db.on("error", console.log.bind(console, "selindb数据库连接失败"));
db.on("open", () => {
    console.log("selindb数据库连接成功")
});
//连接成功---》操作数据库---》设置Schema
const Scheme = mongoose.Schema;
const JavaScriptSchema = new Scheme({
    name: String,//验证数据库类型
    age: Number,
    sex: {
        type: String,
        default: "女"//默认值 不传这一条会默认加上
    }
},{
    versionKey : false//去掉版本信息
});

// const JavaScript = db.model("javascript", JavaScriptSchema,"app");//如果不写第三个参数 会默认生成javascript集合
const JavaScript = db.model("javascript", JavaScriptSchema);//会生成javascripts集合，因为mongodb默认集合是复数 加上s会更合适
//最好是使用这种方法去调用model 而不是直接mongoose.model
//const JavaScript = db.model("javascript", JavaScriptSchema, "这里可以强制指定集合名");

const data = {//默认会生成版本号"__v" : 0
  name : "yuki",
  age : 35,
};

const data2 = {
    name : "myd",
    age : 21,
    sex : "123"
};

//回调
// const d1 = new JavaScript(data);
// //使用save保存数据 且也是错误优先
// d1.save((err, res) => {//接收回调
//     console.log(err);//输出null表示没有错误
//     console.log(res);
// });

//反复传递
const d1 = new JavaScript(data2);//传递数据
d1.save().then(res => {//这里可以回调 也可以使用promise的then
    console.log(res);//保存成功
}).catch(err => {
    console.log(err);
});
//传递多条数据：循环遍历给new 再不断save
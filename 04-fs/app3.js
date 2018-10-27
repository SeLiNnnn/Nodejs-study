//写入文件
const FS = require('fs');

const data = "selin is a big headsome man.";

FS.writeFile("./2.txt", data, "utf8", err => {
    //没有2.txt就创建一个文件并写入数据
    if(err)throw err;
    console.log("写入文件2.txt成功");
})
//默认就是utf8编码 可以省略不写
//重复执行文件 不会重新生成 也不会在文件里添加数据

FS.writeFileSync("./3.txt", data);//同步写入文件

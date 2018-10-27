//加密模块
const CRYPTO = require('crypto');
const KEY = "selin2199" + 5201314;//在后面再拼接其他字符可以增加密码复杂度

//console.log(CRYPTO.getHashes());
//输出哈希加密方式
// [ 'RSA-MD4',
//   'RSA-MD5',
//   'md5',
//   'md5-sha1',
//   ...
// ]

const OBJ = CRYPTO.createHash("md5");//创建加密方式为md5的对象
OBJ.update(KEY);//把明文密码传进去以后 它自动加密

//const PWD = OBJ.digest();//只能输出一次加密后的结果 再次输出会报错
//console.log(PWD);
//<Buffer 12 ab 35 c6 9e 49 69 9b 72 10 23 53 04 4c ab be>
//这样输出是一个对象 不适合直接存入数据库

//设置输出时使用16进制来输出
const PWD = OBJ.digest("hex");

console.log(PWD);//cf1b6c68318ebb1fe513cf563bb11a2b
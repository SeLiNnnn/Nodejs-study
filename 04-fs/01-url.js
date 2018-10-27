require('url').URL;//URL是模块下的一个属性
const MY_URL = new URL('http://nodejs.cn/api/events.html#events_class_eventemitter');
console.log(MY_URL);
// URL {
//   href: 'http://nodejs.cn/api/events.html#events_class_eventemitter',
//   origin: 'http://nodejs.cn',
//   protocol: 'http:',
//   username: '',
//   password: '',
//   host: 'nodejs.cn',
//   hostname: 'nodejs.cn',
//   port: '',//端口默认的时候是不会显示了 自己添上端口可以看到
//   pathname: '/api/events.html',
//   search: '',//查询部分
//   searchParams: URLSearchParams {
//      'ie' => 'utf-8',这是一个map对象 左边是键 右边是值  
//  },
//   hash: '#events_class_eventemitter' }

console.log(MY_URL.hostname);//nodejs.cn




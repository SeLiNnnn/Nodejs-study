const URL = require('url');//与01-url里的解析相比 前一种更好 这种方法是node里的解析方式，不推荐

const MY_URL = URL.parse('http://nodejs.cn/api/events.html#events_class_eventemitter');
console.log(MY_URL);

// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null, 没有的是null 
//     host: 'nodejs.cn',
//     port: null,
//     hostname: 'nodejs.cn',
//     hash: '#events_class_eventemitter',
//     search: null,
//     query: null,
//     pathname: '/api/events.html',
//     path: '/api/events.html',
//     href: 'http://nodejs.cn/api/events.html#events_class_eventemitter' }
'use strict';

var _module = require('./module1');

var haha = _interopRequireWildcard(_module);

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _uniq = require('uniq');

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
    主文件
 */

// ex6中,用哪种方式引入,取决于用哪种方式暴露

// import {data,demo,text} from './module1'
//将module1中的所有暴露的内容收集成一个对象,名为haha
console.log(haha.data);

//引入第三方模块,都有默认暴露的方法

haha.demo();
haha.text();
(0, _module2.haha1)();
(0, _module2.haha2)();
console.log(_module4.default.name);
console.log(_module4.default.age);
_module4.default.speak();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find model '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./module1":2,"./module2":3,"./module3":4,"uniq":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.demo = demo;
exports.text = text;
/*
    module1使用了分别暴露方法
 */

var data = exports.data = "laijiandong";

function demo() {
    console.log('我是模块内的demo模块', data.toUpperCase());
}

function text() {
    console.log('我是模块内的text模块', data.toLowerCase());
}
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
使用的统一暴露
 */

var arr = [1, 23, 4, 5];

function demo2() {
    console.log('我是module2中的demo2函数', arr);
}

function text2() {
    console.log('我是module2中的text2函数', arr);
}

//精简版
exports.demo2 = demo2;
exports.text2 = text2;

//完整版

exports.haha1 = demo2;
exports.haha2 = text2;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
使用默认暴露,只能暴露一次
 */

exports.default = {
    name: 'peiqi',
    age: 18,
    speak: function speak() {
        console.log('\u6211\u7684\u540D\u5B57\u662F' + this.name + ',\u6211\u7684\u5E74\u9F84\u662F' + this.age);
    }
};
},{}],5:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}]},{},[1]);

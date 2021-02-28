(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find model '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
主文件: 用于汇总各个模块
 */

let module1 = require('./module1')
let {data,text}=require('./module1')
let module2 = require('./module2')
let module3 = require('./module3')
let uniq=require('uniq');9
//如何使用一个模块,取决于模块暴露了什么
console.log(module1.data);
console.log(module2);
module3.haha.forEach(function (i) {
    console.log(i);
})
//去重和字典排序
console.log(uniq([1, 10, 12, 41, 45, 12, 1, 32, 12, 8]));
console.log(data);
text();
},{"./module1":2,"./module2":3,"./module3":4,"uniq":5}],2:[function(require,module,exports){
/*
    第一种暴露方式: model.exports=value
 */


module.exports={
    data:'laijiandong',

    text:function () {
        console.log(this.data);
    }
}
},{}],3:[function(require,module,exports){
/*
    第二种暴露方式: exports.xxxx=value
 */

//在CommonJS模块规范中,model.exports 和 exports.xxx 不能混用
//如果出现混用,以module.exports为主
exports.haha = function () {
    console.log('我是module2的函数');
}

module.exports = 'aaa';
},{}],4:[function(require,module,exports){
/*


 */
exports.haha=[1,2,3,4,5]
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

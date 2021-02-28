/*
主文件: 用于汇总各个模块
 */

let module1 = require('./modules/module1')
let {data,text}=require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')
let uniq=require('uniq');

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
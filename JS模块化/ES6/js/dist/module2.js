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
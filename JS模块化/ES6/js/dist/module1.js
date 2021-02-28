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
/*
使用的统一暴露
 */

let arr=[1,23,4,5]

function demo2() {
    console.log('我是module2中的demo2函数',arr);
}

function text2() {
    console.log('我是module2中的text2函数',arr);
}

//精简版
export {demo2,text2}

//完整版
export {
    demo2 as haha1,     //暴露的同时,赋一个别名
    text2 as haha2
}
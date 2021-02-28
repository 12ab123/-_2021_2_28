

setTimeout(function () {
    console.log('延迟函数执行');

})

//立即执行函数(回调),等主程序完成之后执行
setImmediate(()=>{
    console.log('我是回调函数');
})

process.nextTick(function () {
    console.log('process.nextTick函数执行');
})

console.log('我是主线程');
/*
    第二种暴露方式: exports.xxxx=value
 */

//在CommonJS模块规范中,model.exports 和 exports.xxx 不能混用
//如果出现混用,以module.exports为主
exports.haha = function () {
    console.log('我是module2的函数');
}

module.exports = 'aaa';
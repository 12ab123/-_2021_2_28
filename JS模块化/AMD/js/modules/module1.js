/*
定义一个没有依赖的模块
 */

define(function () {
    let data='laijiandong'

    function getDataL() {
        return data.toLowerCase();
    }

    function getDataU() {
        return data.toUpperCase();
    }

    return {getDataL,getDataU}
})
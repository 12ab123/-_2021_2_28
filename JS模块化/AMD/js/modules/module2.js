/*
有依赖的模块
 */


define(['module1'],function (m1) {
    let msg='jiushiyige'
    function getDataAndMsg() {
        return m1.getDataL()+msg
    }
    return getDataAndMsg()
})
/*
在amd模块化中,主js文件需要些一个特殊的配置对象
 */

require.config({
    //在项目中所有用到的模块,都要在这里注册
    paths:{
        module1:'./module1',
        module2:'./module2'
    }
})

requirejs(['module2'],function (m2) {
    m2()
})
const express = require('express')


//1.服务员
const app = express()

//禁止服务器返回X-Powered-By
app.disable('x-powered-by')


//2.配置路由 ------ 对请求的url进行分类,服务器根据分类决定交给谁去处理
        //在node.js中,我们所有说路由指的是后端路由
        //路由可以理解为一组组key-value的组合     key:请求方式+ url        value:回调函数
        //根据路由定义的顺序,将定义好的路由放入一个类似于数组的结构中,一次取出,若匹配成功,不继续匹配
app.get('/',function (request,response) {
    /*
        什么样的请求,能交给这个回调函数处理?
            1.必须是get请求
            2.请求的URL必须为"/meishi"
     */
    console.log(request.query);
    response.send('我是主页')
})

app.get('/meishi',function (request,response) {
    response.send('我是美食页面')
})

app.get('/meishi/huoguo',function (request,response) {
    response.send('我是美食--火锅页面')
})

app.post('/',function (request,resoponse) {

})


//监听
app.listen(7000,function (err) {
    if(!err){
        console.log('服务器连接成功');
    }else{
        console.log(err);
    }
})

const experss = require('express')

const app = experss()

const a=10;
app.set('view engine','ejs')
app.set('views','./views')

//引入数据库连接模型
let db=require('./db/db')

//引入UI路由器
//引入登录注册路由器
const UIRouter=require('./router/UIRouter')
const loginRegisterRouter=require('./router/loginRegisterRouter')




//用于暴露静态资源
app.use(experss.static(__dirname + '/public'))
//用于解析post请求的urlencoded参数
app.use(experss.urlencoded({extended: true}))



db(function (err) {
    if(err){
        console.log('连接失败');
    }else{

        //使用路由器
        app.use(UIRouter())
        app.use(loginRegisterRouter())

        app.listen(5000, function (err) {
            if (!err) {
                console.log('服务器连接成功');
            } else {
                console.log(err);
            }
        })
    }
})




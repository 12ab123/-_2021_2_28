const experss = require('express')

const app = experss()

app.set('view engine', 'ejs')
app.set('views', './views')

//引入数据库连接模型
let db = require('./db/db')

//引入UI路由器
//引入登录注册路由器
const UIRouter = require('./router/UIRouter')
const loginRegisterRouter = require('./router/loginRegisterRouter')


//以下代码是为了操作session
const session = require('express-session')
//引入connect-mongo,用于做session持久化
const MongoStore = require('connect-mongo')(session)


app.use(session({
    name: 'peiqi',              //设置返回给客户端cookie的key,默认为: connect.sid
    secret: 'laijiandong',       //加密
    saveUninitialized: false,    //是否在存储内容之前创建session会话存储
    resave: true,                //是否在每次请求时,重新保存session会话存储,即使没有变化(比较保险)
    store: new MongoStore({
        url: 'mongodb://localhost:27017/sessions_container',
        touchAfter: 24 * 3600      //修改频率(每隔24小时更新一次)
    }),                             //作用: 每隔24小时向指定数据库保存内容,实现session持久化
    cookie: {
        maxAge: 1000 * 30         //该方法用于设置cookie的过期时间,cookie的key,cookie的value均不在次设置
    }
}))


//用于暴露静态资源
app.use(experss.static(__dirname + '/public'))
//用于解析post请求的urlencoded参数
app.use(experss.urlencoded({extended: true}))


db(function (err) {
    if (err) {
        console.log('连接失败');
    } else {

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




/*
    专门用于管理展示页面的UI路由
 */
const cookieParser = require('cookie-parser')
const {Router} = require('express')

//创建路由器(router实例)
let router = new Router()

//引入path模块 ----- node中内置一个专门用于解决路径问题的库
const {resolve} = require('path')

//router可以认为是一个小型app
router.use(cookieParser())

//引入模型对象
const usersModel = require('../model/usersModel')


//展示页面,无其他作用 --------- UI路由
router.get('/login', function (req, res) {
    //path模块的resolve方法
    //第一个参数: 从哪里出发
    //第二个参数: 寻找路径
    // let url=resolve(__dirname,'../public/login.html')
    // res.sendFile(url)

    /*
        为了精简代码,我们可以将public中的html文件删除,当每次访问该路由时,渲染views中的页面
        但是有一个问题,每次渲染时,errMsg都没有擦传入数据,导致渲染报错
        解决办法: 传入errMsg,内容为一个{}
     */
    let {email} = req.query
    res.render('login', {errMsg: {email: email}})
})

router.get('/register', function (req, res) {
    // let url=resolve(__dirname,'../public/register.html')
    //
    // res.sendFile(url)
    res.render('register', {errMsg: {}})
})

router.get('/userCenter', (req, res) => {

    const {_id} = req.cookies

    //判断id是否传到这里
    if (_id) {
        usersModel.findOne({_id}, function (err, data) {
            //数据库交互没有报错并且有内容(用户没有篡改id)
            if (!err && data) {
                res.render('userCenter',{nick_name:data.nick_name})
            }else{
                res.redirect('/login')
            }
        })
    }else{
        //进入此处意味着: 1.用户的cookie过期了  2.用户清理了浏览器缓存   3.用户根本没有登录,直接访问个人中心
        res.redirect('/login')
    }
})

//为了符合中间件的一个理念,所有的中间件都是一个函数
module.exports = function () {
    return router
}

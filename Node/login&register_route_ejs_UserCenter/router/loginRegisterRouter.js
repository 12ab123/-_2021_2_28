//引入模型对象
let usersModel = require('../model/usersModel')


const {Router} = require('express')


//创建路由器(router实例)
let router = new Router()


//用于处理用户的注册请求,有很多业务逻辑(校验数据的有效性) ------ 业务路由
router.post('/register', function (req, res) {
    //获取用户的输入
    const {email, nick_name, password, re_password} = req.body
    console.log(email, nick_name, password, re_password);
    //检验数据的合法性
    //检验成功:
    const emailReg = /^[a-zA-Z0-9]{4,20}@[a-zA-Z0-9]{2,10}\.com$/
    const nickNameReg = /[\u4e00-\u9fa5]/gm
    const passwordReg = /^[a-zA-Z0-9_@#.+&]{6,20}$/

    let errMsg = {}
    if (!emailReg.test(email)) {
        // res.send('邮箱格式不合法,主机名必须为4-20位,用户名必须为2-10位')
        errMsg.emailErr = '邮箱格式不合法,主机名必须为4-20位,用户名必须为2-10位'
    }
    if (!nickNameReg.test(nick_name)) {
        // res.send('昵称不合法,必须为中文')
        errMsg.nickNameErr = '昵称不合法,必须为中文'

    }
    if (!passwordReg.test(password)) {
        // res.send('密码格式不合法')
        errMsg.passwordErr = '密码格式不合法'

    }
    if (password !== re_password) {
        // res.send('两次输入的密码不正确')
        errMsg.repasswordErr = '两次输入的密码不正确'

    }
    //判断一个对象是否为空对象
    if (JSON.stringify(errMsg) !== '{}') {
        res.render('register', {errMsg: errMsg})
        return
    }

    //取数据库查询该邮箱是否注册过了
    usersModel.findOne({email}, function (err, data) {
        if (data) {
            errMsg.emailErr = '该邮箱已经注册,请更换邮箱'
            res.render('register', {errMsg})
            return
        }

        usersModel.create({email, nick_name, password}, function (err, data) {
            if (!err) {
                res.redirect(`/login?email=${email}`)
            } else {
                res.send('您当前的网络状态不稳定,稍后重试')
                errMsg.networkErr = '您当前的网络状态不稳定,稍后重试'
                res.render('register', {errMsg})
            }
        })

    })


})

router.post('/login', (req, res) => {
    const {email, password} = req.body
    const emailReg = /^[a-zA-Z0-9]{4,20}@[a-zA-Z0-9]{2,10}\.com$/
    const passwordReg = /^[a-zA-Z0-9_@#.+&]{6,20}$/

    let errMsg = {}
    if (!emailReg.test(email)) {
        errMsg.emailErr = '邮箱格式不合法,主机名必须为4-20位,用户名必须为2-10位'
    }
    if (!passwordReg.test(password)) {
        errMsg.passwordErr = '密码格式不合法'
    }
    if (JSON.stringify(errMsg) !== '{}') {
        res.render('login',{errMsg})
        return
    }


    usersModel.findOne({email, password}, (err, data) => {
        //在查找中出现错误
        if (err) {
            errMsg.networkErr='网络不稳定,稍后重试'
            res.render('login',{errMsg})
            return
        }
        if (data) {
            //res.render('userCenter')    //此种方式会导致浏览器地址栏依旧是login,不会跳转,而是在当前页面渲染指定ejs文件内容
            res.cookie('_id',data._id,{maxAge:1000*30})
            res.redirect('/userCenter')  //此种方式浏览器地址栏残留的东西太多
            return;
        }

        errMsg.namePasswordErr='用户名或密码出现错误'
        res.render('login',{errMsg})

    })

})

module.exports = function () {
    return router
}
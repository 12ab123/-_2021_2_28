const experss = require('express')

const app = experss()


//引入模块
let mongoose = require('mongoose')

//引入数据库连接模型
let db=require('./db/db')

const usersModel=require('./model/usersModel')




//用于暴露静态资源
app.use(experss.static(__dirname + '/public'))
//用于解析post请求的urlencoded参数
app.use(experss.urlencoded({extended: true}))



db(function (err) {
    if(err){
        console.log('连接失败');
    }else{
        //展示页面,无其他作用 --------- UI路由
        app.get('/login', function (req, res) {
            res.sendFile(__dirname + '/public/login.ejs')
        })

        app.get('/register', function (req, res) {
            res.sendFile(__dirname + '/public/register.ejs')
        })

        //用于处理用户的注册请求,有很多业务逻辑(校验数据的有效性) ------ 业务路由
        app.post('/register', function (req, res) {
            //获取用户的输入
            const {email, nick_name, password, re_password} = req.body
            console.log(email, nick_name, password, re_password);
            //检验数据的合法性
            //检验成功:
            const emailReg=/^[a-zA-Z0-9]{4,20}@[a-zA-Z0-9]{2,10}\.com$/
            const nickNameReg=/[\u4e00-\u9fa5]/gm
            const passwordReg=/^[a-zA-Z0-9_@#.+&]{6,20}$/

            if(!emailReg.test(email)){
                res.send('邮箱格式不合法,主机名必须为4-20位,用户名必须为2-10位')
            }else if (!nickNameReg.test(nick_name)){
                res.send('昵称不合法,必须为中文')
            } else if(!passwordReg.test(password)){
                res.send('密码格式不合法')
            }else if(password!==re_password){
                res.send('两次输入的密码不正确')
            }else {
                //取数据库查询该邮箱是否注册过了
                usersModel.findOne({email},function (err,data) {
                    if(data){
                        res.send('该邮箱已经注册,请更换邮箱')
                    }else{
                        usersModel.create({email,nick_name,password},function (err,data) {
                            if(!err){
                                res.send('注册成功')
                            }else{
                                res.send('您当前的网络状态不稳定,稍后重试')
                            }
                        })
                    }
                })
            }

        })

        app.post('/login',(req,res)=>{
            const {email,password}=req.body
            const emailReg=/^[a-zA-Z0-9]{4,20}@[a-zA-Z0-9]{2,10}\.com$/
            const passwordReg=/^[a-zA-Z0-9_@#.+&]{6,20}$/
            if(!emailReg.test(email)){
                res.send('邮箱格式不合法,主机名必须为4-20位,用户名必须为2-10位')
            }else if(!passwordReg.test(password)){
                res.send('密码格式不合法')
            }else{
                usersModel.findOne({email,password},(err,data)=>{
                    //在查找中出现错误
                    if(err){
                        res.send('网络不稳定,稍后重试')
                        return
                    }
                    if(data){
                        res.redirect('https://www.baidu.com')
                        return;
                    }
                        res.send('用户名或密码出现错误')

                })
            }
        })


        app.listen(5000, function (err) {
            if (!err) {
                console.log('服务器连接成功');
            } else {
                console.log(err);
            }
        })
    }
})




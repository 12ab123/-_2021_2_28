const express = require('express')


const db=require('./db/db')

const usersModel=require('./model/usersModel')

const app = express()


app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))

db(function (err) {
    if(err){
        console.log('数据库连接失败');
    }else{
        app.post('/register',function (req,res) {
            const {email,nick_name,password,re_password}=req.body
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

    }

})



app.listen(4000, function (err) {
    if (!err) {
        console.log('服务器连接成功');
    } else {
        console.log(err);
    }
})
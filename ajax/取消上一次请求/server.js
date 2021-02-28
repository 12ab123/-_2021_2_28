const express=require('express')

const app=express()

//只会接受urlencoded形式的参数
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname+'/public'))

app.get('/get_code',function (req,res) {
   setTimeout(function () {
       let autoCode=Math.floor(Math.random()*8999+1000)
       console.log('用户请求验证码');
       //send不能传入数字,会将其当成状态码
       res.send(autoCode.toString())
   },4000)
})






app.get('/',function (req,res) {
    res.send('ok')
})





app.listen(3000,function (err) {
    if(err){
        console.log(err);
    }else{
        console.log('服务器连接成功');
        console.log('http://localhost:3000/verifiCode.html');
    }
})
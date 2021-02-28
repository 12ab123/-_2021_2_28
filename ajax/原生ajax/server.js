const express=require('express')

const app=express()

//只会接受urlencoded形式的参数
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname+'/public'))

app.get('/get_code',function (req,ers) {
    console.log(req.query);
    ers.send('发的是ajax的get请求!!')
})







app.get('/',function (req,res) {
    res.send('ok')
})





app.listen(3000,function (err) {
    if(err){
        console.log(err);
    }else{
        console.log('服务器连接成功');
        console.log('不要使用编译器打开网页,会产生跨域问题,解决办法; 暴露静态资源,在浏览器中输入地址');
        console.log('http://localhost:3000/ajax_get.html');
        console.log('http://localhost:3000/ajax_post.html');
    }
})
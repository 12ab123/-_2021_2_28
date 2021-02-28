
const express=require('express')

const app=express()


//应用级中间件 ------- 所有请求的第一扇门 ------- 给所有请求进行验证

//第一种定义应用级中间件
// app.use((request,response,next)=>{
//     //过滤一些不合法的请求    例如: 图片防盗链
//     // if(request.get('Referer')){
//     //     if(request.get('Referer').split('/')[2]==='localhost:8080'){
//     //         next()
//     //     }else{
//     //         response.sendFile(__dirname+'/err.png')
//     //     }
//     // }else{
//     //
//     //     next()     //放行=
//     // }
// })

//第二种定义应用级中间件 ------ 更加灵活,可以在任何地方使用 ----- 可以在任何需要的地方使用
function demo(request,response,next){
    if(request.get('Referer')){
        if(request.get('Referer').split('/')[2]==='localhost:8080'){
            next()
        }else{
            response.sendFile(__dirname+'/err.png')
        }
    }else{
        next()     //放行=
    }
}

/*
二者区别
    第一种方式更加霸道,每次客户端发送请求到服务器中,首先中间件先进行验证,由中间件判断是否允许
    第二种方式更加动态,动态的指定给指定路径,进行验证
 */

app.get('/',function (request,response) {
    response.send('ok')
})

app.get('/demo',function (request,response) {
    response.send('我是demo页面')
})

app.get('/img',demo,function (request,response) {
    response.sendFile(__dirname+'/t1.jpg')
})





app.listen(5000,function (err) {
    if(!err){
        console.log('服务器连接成功');
    }else{
        console.log(err);
    }
})
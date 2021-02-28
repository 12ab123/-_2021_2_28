let express=require('express')

let app=express()


//根路由
app.get('/',function (request,response) {
    console.log(request.query);
    console.log(request.get('referer'));
    console.log(request.get('host'));
    response.send('我是跟路由返回的数据')
})

//一级路由
app.get('/demo',function (request,response) {
    // response.download('./t1.jpg')
    // response.sendFile(__dirname+'/1.html')
    // response.redirect('https://www.baidu.com')
    // response.redirect('../')
    // response.send('我是/demo返回的数据')

})

//参数路由
app.get('/demo/:id',function (request,response) {
    let {id}=request.params
    response.send(`我是/demo返回的数据${id}`)
})















app.listen(4000,function (err) {
    if(!err){
        console.log('服务器连接成功');
    }else{
        console.log(err);
    }
})




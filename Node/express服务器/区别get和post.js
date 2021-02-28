let http=require('http')

let server=http.createServer(function (request,response) {
    if(request.method.toUpperCase()==='POST'){
        console.log('使用了post请求');
    }else if(request.method.toUpperCase()==='GET'){
        console.log('使用了get请求');
    }
})


server.listen(5000,function (err) {
    if(!err){
        console.log('服务器连接成功');
    }else{
        console.log(err);
    }
})
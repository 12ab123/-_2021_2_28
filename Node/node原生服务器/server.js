/*
    不借助任何第三方库,去搭建node原生服务器
 */


let http = require('http')

//引入一个内置模块,用于解析key=value&key=value.....这种形式的字符串为js中的对象
//形如: key=value&key=value...编码形式: urlencoded编码形式
//请求地址里携带urlencoded编码形式的参数,叫做: 查询字符串参数
let qs=require('querystring')

//创建服务对象

let server=http.createServer(function (request,response) {
    //request       请求对象(包含着客户端给服务端的东西)
    //response      响应对象(包含着服务端返回给客户端的东西)

    //获取客户端携带过来的urlencoded编码形式的参数
    let params=request.url.split('?')[1];
    let paramsObj=qs.parse(params)
    console.log(paramsObj);
    let{name,age}=paramsObj

    response.setHeader('content-type','text/html;charset=utf-8')

    response.end(`<h1>你好${name},我的年龄是${age}</h1>`)

})


//指定服务器运行的端口号(绑定端口监听)
server.listen(4000,function (err) {
    if(!err){
        console.log('服务器启动成功');
    }else {
        console.log(err);
    }
})
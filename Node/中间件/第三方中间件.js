const express = require('express')

const app = express()

const bodyParser = require('body-parser')

//解析post请求请求体中所携带的urlencoded编码形式的参数为一个对象,随后挂载到request对象上
app.use(bodyParser.urlencoded({extended: true}))


app.post('/test', function (request, response) {
    console.log(request.body);
    response.send('ok')
})


app.listen(3000, function (err) {
    if (!err) {
        console.log('服务器连接成功');
    } else {
        console.log(err);
    }
})
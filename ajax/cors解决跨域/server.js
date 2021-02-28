const express=require('express')

const app=express()

app.get('/test',function (req,res) {
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8080')
    res.send('112122312')
})



app.listen(3000,function (err) {
    if(err){
        console.log(err);
    }else{
        console.log('服务器连接成功');
    }
})
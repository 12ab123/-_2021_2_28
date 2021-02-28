const express=require('express')

const app=express()

app.get('/test',function (req,res) {
    let {callback}=req.query
    console.log(callback);
    a=[1,3,5,7,9]
    //如果传入的是一个方法,方法中传入的是一个对象或数组,要将其先传唤为字符串传入,不然传入的永远只有第一位
    res.send(`${callback}(${JSON.stringify(a)})`)
})



app.listen(3000,function (err) {
    if(err){
        console.log(err);
    }else{
        console.log('服务器连接成功');
    }
})
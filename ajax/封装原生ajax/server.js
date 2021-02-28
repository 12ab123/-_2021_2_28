const express=require('express')

const app=express()

app.use(express.urlencoded({extended:true}))

app.get('/get_ajax',function (req,res) {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send(req.query)
})
app.post('/get_ajax',function (req,res) {
    res.setHeader('Access-Control-Allow-Origin','*')
    console.log(req.body);
    res.send(req.body)
})







app.get('/',function (req,res) {
    res.send('ok')
})





app.listen(3000,function (err) {
    if(err){
        console.log(err);
    }else{
        console.log('服务器连接成功');
    }
})
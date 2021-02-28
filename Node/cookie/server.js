const express=require('express')

const cookieParser=require('cookie-parser')
const app=express()

app.use(cookieParser())
app.get('/demo',(req,res)=>{
    res.send('我是demo路由给你的反馈,我没有对cookie进行任何的操作')
})

app.get('/demo1',(req,res)=>{

    //express中给客户端种cookie不需要任何的第三方库
    let user={name:'laijiandong',age:12}
    res.cookie('peiqi',JSON.stringify(user))    //给客户端种下一个会话cookie


    res.send('我是demo1路由给你的反馈,我种下了一个会话cookie,去看看吧')
})

app.get('/demo2',(req,res)=>{

    //express中给客户端种cookie不需要任何的第三方库
    let user={name:'laijiandong',age:12}
    res.cookie('peiqi',JSON.stringify(user),{maxAge:1000*30})    //给客户端种下一个持久化cookie


    res.send('我是demo1路由给你的反馈,我种下了一个持久化cookie,去看看吧')
})

app.get('/demo3',(req,res)=>{
    //express读取客户端携带过来的cookie要借助一个中间件,cookie-parser
    console.log(req.cookies);
    let {peiqi}=req.cookies
    console.log(peiqi);
    console.log(JSON.parse(peiqi).name);
    res.send('你去看看服务器吧')
})

app.get('/demo4',function (req,res) {
    //删除cookie
    //方法1
    res.cookie('peiqi','',{maxAge:0})
    //方法2(方法中必须写入对应cookie的名字)
    // res.clearCookie('peiqi')
    res.send('已删除')
})


app.listen(8000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('服务器连接成功');
    }
})
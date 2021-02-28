const express=require('express')

const app=express()

//让你的服务器知道你在用哪一个模板引擎 ------- 配置模板引擎
//告诉服务器你的视图引擎为ejs
app.set('view engine','ejs')

//让你的服务器知道你的模板在那个目录下 ------- 配置模板目录
app.set('views','./haha')


app.get('/show',(req,res)=>{
    let personAll=[
        {name:'赖建东',age:18},
        {name:'张三',age:19},
        {name:'李四',age:19}
    ]
    res.render('person',{persons:personAll})
})





app.listen(4000,(err)=>{
    if(err){
        console.log('服务器连接失败');
    }else{
        console.log('服务器连接成功');
    }
})
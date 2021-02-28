const express=require('express')

const app=express()


app.get('/getProducts1',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(()=>{
        res.send(
            [
                {id:1,name:'product1.1'},
                {id:2,name:'product1.2'},
                {id:3,name:'product1.3'}
            ]
        )
    },1000+Math.random()*2000)
})

app.get('/getProducts2',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(()=>{
        res.send(
            [
                {id:1,name:'product2.1'},
                {id:2,name:'product2.2'},
                {id:3,name:'product2.3'}
            ]
        )
    },1000+Math.random()*2000)
})





app.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('服务器连接成功');
    }
})
const express=require('express')

const app=express()

let db=require('./db/db')

let citiesModel=require('./model/citisModel')



db(function (err) {
    if(err){
        console.log(err);
    }else{
        app.get('/test',function (req,res) {
            citiesModel.find({
                areas: { $elemMatch: { level: 1 } }
            },function (err,data) {
                if(!err&&data){
                    console.log(data);
                }else {
                    console.log(err);
                }
            })
        })

        app.listen(3000,function (err) {
            if(err){
                console.log(err);
            }else{
                console.log('服务器连接成功');
            }
        })
    }
})

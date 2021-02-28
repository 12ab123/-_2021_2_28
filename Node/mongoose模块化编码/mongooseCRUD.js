//引入模块
let mongoose = require('mongoose')

//引入数据库连接模型
let db=require('./db/db')

//引入家人模型
let familyModel=require('./model/studentModel')

//引入教师模型
let teacherModel=require('./model/teacherModel')

db(function (err) {
    if(err){
        console.log('连接失败');
    }else{
        //操作CRUD
        familyModel.findOne({name: '赖传贵'}, {age: 1, _id: 0}, function (err, data) {
            if (!err) {
                console.log(data);
            } else {
                console.log(err);
            }
        })
        teacherModel.create({
                family_id:'001',
                name:'黄以芳',
                age:79,
                sex:'女',
                hobby:['做饭','聊天','打麻将'],
                info:888888
            },function (err,data) {
                if(!err){
                    console.log(data);
                }else{
                    console.log(err);
                }
        })
    }
})







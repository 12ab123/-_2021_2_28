let mongoose=require('mongoose')

//把数据库想象成一个别墅

//请来一个保安 -------------- 引入模型对象
let Schema = mongoose.Schema

//指定进入你家的规则 -------------- 创建约束对象
let suersRule = new Schema({
    email: {
        type: String,   //限制学号必须为字符串
        require: true,   //限制学号必填
        unique: true     //限制学号唯一,不能重复
    },
    nick_name: {
        type: String,   //限制名字必须为字符串
        require: true,   //限制名字必填
    },
    password: {
        type: String,   //限制年龄必须为字符串
        require: true,   //限制年龄必填
    },
    data: {
        type: Date,          //类型必须是时间类型
        default: Date.now()      //默认值为当前时间
    },
    enable_flag: {
        type: String,
        default: 'Y'
    }
})

//告诉保安你的规则 ------------ 创建模型对象
let usersModel = mongoose.model('users', suersRule)         //用于生成某个集合所对应的模型对象

module.exports = usersModel;
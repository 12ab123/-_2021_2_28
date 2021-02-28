let mongoose=require('mongoose')

//把数据库想象成一个别墅

//请来一个保安 -------------- 引入模型对象
let Schema = mongoose.Schema

//指定进入你家的规则 -------------- 创建约束对象
let familyRule = new Schema({
    family_id: {
        type: String,   //限制学号必须为字符串
        require: true,   //限制学号必填
        unique: true     //限制学号唯一,不能重复
    },
    name: {
        type: String,   //限制名字必须为字符串
        require: true,   //限制名字必填
    },
    age: {
        type: Number,   //限制年龄必须为字符串
        require: true,   //限制年龄必填
    },
    sex: {
        type: String,   //限制性别必须为字符串
        require: true,   //限制性别必填
    },
    hobby: [String],       //限制爱好只能是数组,数组的每一项只能是字符串
    info: Schema.Types.Mixed,        //接受所有类型
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
let familyModel = mongoose.model('family', familyRule)         //用于生成某个集合所对应的模型对象

module.exports = familyModel;
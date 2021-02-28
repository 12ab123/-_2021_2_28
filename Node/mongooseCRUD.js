//引入模块
let mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)       //使用一个新的索引创建器


//连接数据库
//useNewUrlParser: true作用: 当前的url解析器有一点问题,输入它会使用新的url解析器
//useUnifiedTopology: true作用: 使用一个新的拓扑结构
mongoose.connect('mongodb://localhost:27017/demo', {useNewUrlParser: true, useUnifiedTopology: true})

//绑定数据库连接的监听
mongoose.connection.on('open', function (err) {
    if (err) {
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
        //操作数据库
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

        //新增操作 ----C
        // familyModel.create({
        //     family_id:'005',
        //     name:'黄以芳',
        //     age:79,
        //     sex:'女',
        //     hobby:['做饭','聊天','打麻将'],
        //     info:888888
        // },function (err,data) {
        //     if(!err){
        //         console.log(data);
        //     }else{
        //         console.log(err);
        //     }
        // })


        //查询操作 ----R

        //find方法:
        //          1.返回一个数组,就算是一条数据,也包裹一个数组
        //          2.如果查询结果为空,返回一个空数组
        // familyModel.find({name:'赖建东'},function (err,data) {
        //     if(!err){
        //         console.log(data);
        //     }else {
        //         console.log(err);
        //     }
        // })

        //findOne方法:
        //            1.若有结果,返回一个对象
        //            2.若没有结果,返回null
        familyModel.findOne({name: '赖传贵'}, {age: 1, _id: 0}, function (err, data) {
            if (!err) {
                console.log(data);
            } else {
                console.log(err);
            }
        })


        //更新操作 ----U

        //updateOne方法: 匹配一个
        //updateMany方法: 匹配多个
        //update方法: 即将被废除
        // familyModel.update({name:'赖建东'},{age:20},function (err,data) {
        //     if(!err){
        //         console.log(data);
        //     }else {
        //         console.log(err);
        //     }
        // })


        //删除操作 ----D

        //deleteOne
        //deleteMany
        // familyModel.deleteOne({age:20},function (err,data) {
        //     if(!err){
        //         console.log(data);
        //     }else {
        //         console.log(err);
        //     }
        // })
    }
})


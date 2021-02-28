let mongoose=require('mongoose')

//把数据库想象成一个别墅

//请来一个保安 -------------- 引入模型对象
let Schema = mongoose.Schema

//指定进入你家的规则 -------------- 创建约束对象
let citiesRule = new Schema()

//告诉保安你的规则 ------------ 创建模型对象
let citiesModel = mongoose.model('city_code', citiesRule)         //用于生成某个集合所对应的模型对象

module.exports = citiesModel;
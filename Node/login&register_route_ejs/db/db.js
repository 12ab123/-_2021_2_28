//该模块主要用于连接数据库

let mongoose=require('mongoose')

mongoose.set('useCreateIndex', true)       //使用一个新的索引创建器

const DB_NAME='hg'
const PORT=27017
const IP='localhost'


//绑定数据库连接的监听
function contentMongod(callback) {
    //连接数据库
//useNewUrlParser: true作用: 当前的url解析器有一点问题,输入它会使用新的url解析器
//useUnifiedTopology: true作用: 使用一个新的拓扑结构
    mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true})


    mongoose.connection.on('open', function (err) {
        if (err) {
            console.log('数据库连接失败');
            callback('aaa')
        } else {
            console.log('数据库连接成功');
            //操作数据库
            callback()
        }
    })
}

module.exports=contentMongod;
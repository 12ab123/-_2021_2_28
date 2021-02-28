const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)       //使用一个新的索引创建器


function contentModel(callback) {
    //连接数据库
//useNewUrlParser: true作用: 当前的url解析器有一点问题,输入它会使用新的url解析器
//useUnifiedTopology: true作用: 使用一个新的拓扑结构
    mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true, useUnifiedTopology: true})

    mongoose.connection.on('open', function (err) {
        if (err) {
            console.log('数据库连接失败');
            callback('aaa')
        } else {
            console.log('数据库连接成功');
            callback()


        }
    })

}

module.exports = contentModel

//引入模块
let mongoose=require('mongoose')


//连接数据库
//useNewUrlParser: true作用: 当前的url解析器有一点问题,输入它会使用新的url解析器
//useUnifiedTopology: true作用: 使用一个新的拓扑结构
mongoose.connect('mongodb://localhost:27017/demo',{useNewUrlParser: true,useUnifiedTopology: true})

//绑定数据库连接的监听
mongoose.connection.on('open',function (err) {
    if(err){
        console.log('数据库连接失败');
    }else{
        console.log('数据库连接成功');
        //操作数据库
        console.log('操作数据库');
    }
})


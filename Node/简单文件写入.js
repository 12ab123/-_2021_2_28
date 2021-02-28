let fs = require('fs');

//异步文件写入(简单文件写入)
/*
    fs.writeFile(file, data[, options], callback)
        file        要写入的文件路径+文件名+后缀
        data        要写入的数据
        options     可选参数(配置对象)
            encoding    设置文件的编码方式(默认为utf-8)
            mode        默认值为:0o666
                            0o111: 文件可被执行
                            0o222: 文件可被写
                            0o444: 文件可被读
            flag        打开文件要执行的操作,默认为w
                        a   追加
                        w   写入

        callback    回调函数
            err         错误对象
 */

fs.writeFile(__dirname + './demo.txt', '今天天气真清理21111', {mode: 0o666, flag: 'a'}, (err) => {
    if (err) {
        console.log('文件写入失败', err);
    } else {
        console.log('文件写入成功');
    }
})

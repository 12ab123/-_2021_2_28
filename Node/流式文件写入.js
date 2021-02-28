/*
    fs.createWriteStream(path[, options])
        path            路径
        options         配置对象(可选参数)
            flags           打开文件的操作
            encoding        文件的编码方式
            fd              文件的唯一标识符,linux下文件标识符
            mode            文件的权限
            autoClose       自动关闭(文件),默认值为true
            emitClose       关闭(文件----强制关闭),默认值为false
            start           读取文件的起始位置


 */

let fs = require('fs')

//创建一个可写流
let ws = fs.createWriteStream('./demo.txt')

//检测流的状态(只要用到流,就必须检测流的状态)
ws.on('open',function () {
    console.log('可写流打开了');
})
ws.on('close',function () {
    console.log('可写流关闭了');
})


//使用可写流写入数据
ws.write('aasbiufd\n')
ws.write('使得即使吧\n')
ws.write('山顶女惊悚的\n')
ws.write('山顶女惊悚的\n')
//ws.close()   //如果在node8版本中,使用此方法会导致文件丢失

ws.end()        //在node8中,要使用end关闭流

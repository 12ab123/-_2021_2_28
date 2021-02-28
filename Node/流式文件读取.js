/*
    fs.createReadStream(path[, options])
        path
        options
            flags
            encoding
            fd
            mode
            autoClose
            emitClose
            start                起始偏移量
            end                 结束偏移量
            highWaterMark       控制每次读取数据的大小,默认值为64*1024
 */


let fs = require('fs');

let rs = fs.createReadStream('./MP4/1.mp4', {highWaterMark:10*1024*1024})

let ws = fs.createWriteStream('../小视频.mp4')

rs.on('open', function () {
    console.log('可读流打开');
})
rs.on('close', function () {
    //当可读流关闭时,也就代表着文件以经读取完成,也就代表着文件写入完成,就可以关闭写入流
    ws.close();
    console.log('可读流关闭');
})
ws.on('open', function () {
    console.log('可写流打开');
})
ws.on('close', function () {
    console.log('可写流关闭');
})

//给可读流绑定一个data事件,就会触发可读流自动读取内容
rs.on('data', function (data) {
    //buffer实例的length属性,是表示buffer实例占用内存空间的大小
    //65536
    // 每次读取64kb的内容
    ws.write(data)

})
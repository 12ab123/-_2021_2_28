/*
    fs.readFile(path[, options], callback)
        path            路径
        options         配置对象
        callback        回调
            err         错误对象(如果出现错误,将错误传入到一个对象中)
            data        读取出来的对象(将读取出来的内容传递到一个对象中),读取出来的内容为buffer类型

 */


let fs=require('fs')

fs.writeFile('./demo.txt','今天天气还是横不错的码',(err)=>{
    if(err){
        console.log('文件写入失败' + err);
    }else {
        console.log('文件读取成功');
    }
})

fs.readFile('./MP3/1.m4a',(err,data)=>{
    if(err){
        console.log(err);
    }else {
        console.log(data.toString());
    }
    fs.writeFile('../fs写入的视频.m4a',data,function (err) {
        if (err){
            console.log('文件写入失败');
        } else {
            console.log('文件写入成功');
        }
    })
})
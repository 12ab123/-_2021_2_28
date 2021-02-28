const fs=require('fs')

const {promisify}=require('util')

//返回一个新的函数
let mineReadFile=promisify(fs.readFile)

mineReadFile(__dirname+'/await.html').then(
    value=>{
        console.log(value.toString());
    }
)


const fs=require('fs')
const util=require('util')
const minReadFile=util.promisify(fs.readFile)

//使用回调函数实现
// fs.readFile(__dirname+'/all.html',(err,data)=>{
//     if (err){
//         throw err
//     }
//     fs.readFile(__dirname+'/API.html',(err,data1)=>{
//         if(err){
//             throw err
//         }
//         fs.readFile(__dirname+'/API.html',(err,data2)=>{
//             if(err){
//                 throw err
//             }
//             console.log(data+data2+data1)
//         })
//     })
// })


async function main() {
    try {
        //读取第一个文件的内容
        let data1=await minReadFile(__dirname+'/all.html')
        let data2=await minReadFile(__dirname+'/all.html')
        let data3=await minReadFile(__dirname+'/all.html')
        console.log(data1+ data2+ data3);
    }catch (e) {
        console.log(e);
    }
}
main()
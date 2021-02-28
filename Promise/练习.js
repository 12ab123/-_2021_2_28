const fs=require('fs')

// fs.readFile(__dirname+'/race.html',(err,data)=>{
//     if(err){
//         throw err
//     }else {
//         console.log(data.toString());
//     }
// })

let p=new Promise((resolve, reject) =>{
    fs.readFile(__dirname+'/race.html',(err,data)=>{
        if(err){
            reject(err)
        }else{
            resolve(data)
        }
    })
} )

p.then(
    value => {
        console.log(value.toString());
    },
    reason => {
        console.log(reason);
    }
)
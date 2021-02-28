// 性能特别差
// let a = new Buffer(10)
// console.log(a);


// 性能比new Buffer()强一点
// let b=Buffer.alloc(10)
// console.log(b);

//
// let d = Buffer.allocUnsafe(10)
// console.log(d);


//将一个数据存入Buffer实例
let e = Buffer.from('赖建东')
console.log(e.toString());
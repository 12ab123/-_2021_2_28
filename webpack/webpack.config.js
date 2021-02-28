/*
    此文件是webpack的配置文件,用于指定webpack去执行那些任务
 */

const {resolve}=require('path')
//由于webpack是基于node运行的,所以必须使用commonjs来暴露对象(对象内容为webpack的配置)
module.exports={
    entry: './src/js/index.js',      //入口
    output:{
        //也就是说: 第一个属性创建文件夹,第二个属性创建文件
        path: resolve(__dirname+'/dist/js'),       //输出路径(由于必需是绝对路径,所以要这样写)
        filename: "index.js"      //输出的文件名
    },
    mode:'production'           //配置模式(分为生产模式(production)和开发模式(development),生产为压缩编译后的代码,开发则不压缩,就编译)
}

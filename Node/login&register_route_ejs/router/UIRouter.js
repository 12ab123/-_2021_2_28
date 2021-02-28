/*
    专门用于管理展示页面的UI路由
 */

const {Router}=require('express')

//创建路由器(router实例)
let router=new Router()

//引入path模块 ----- node中内置一个专门用于解决路径问题的库
const {resolve}=require('path')





//展示页面,无其他作用 --------- UI路由
router.get('/login', function (req, res) {
    //path模块的resolve方法
        //第一个参数: 从哪里出发
        //第二个参数: 寻找路径
    // let url=resolve(__dirname,'../public/login.html')
    // res.sendFile(url)

    /*
        为了精简代码,我们可以将public中的html文件删除,当每次访问该路由时,渲染views中的页面
        但是有一个问题,每次渲染时,errMsg都没有擦传入数据,导致渲染报错
        解决办法: 传入errMsg,内容为一个{}
     */
    let {email}=req.query
    res.render('login',{errMsg:{email:email}})
})

router.get('/register', function (req, res) {
    // let url=resolve(__dirname,'../public/register.html')
    //
    // res.sendFile(url)
    res.render('register',{errMsg:{}})
})

//为了符合中间件的一个理念,所有的中间件都是一个函数
module.exports=function () {
    return router
}

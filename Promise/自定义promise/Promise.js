/*
        自定义Promise语法
 */


function Promise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //预先保存实例对象(原因: 在函数中调用时,this指向window)
    const self = this
    //保存回调函数的对象
    this.callbacks = []

    function resolve(data) {
        //解决promise状态只能更改一个,也就是说只能调用一次回调函数
        if (self.PromiseState !== 'pending') {
            return
        }
        //1. 修改对象的状态 (promiseState)
        self.PromiseState = 'fulfilled'
        //2. 设置对象的结果值 (promiseResult)
        self.PromiseResult = data
        //调用成功的回调函数
        setTimeout(()=>{
            self.callbacks.forEach((item) => {
                item.onResolved(data)
            })
        })

    }

    function reject(data) {
        //解决promise状态只能更改一个,也就是说只能调用一次回调函数
        if (self.PromiseState !== 'pending') {
            return
        }
        //1. 修改对象的状态 (promiseState)
        self.PromiseState = 'rejected'
        //2. 设置对象的结果值 (promiseResult)
        self.PromiseResult = data
        //调用成功的回调函数
        setTimeout(()=>{
            self.callbacks.forEach((item) => {
                item.onRejected(data)
            })
        })

    }

    //解决使用throw
    //由于throw是在执行器函数中使用,所以使用try....catch来抛出异常,由于结果为失败,所以调用reject来修改对象状态和结果
    try {
        //同步调用的[执行器函数]
        executor(resolve, reject)
    } catch (e) {
        //修改promise对象对的状态为失败
        reject(e)
    }

}


//then方法
Promise.prototype.then = function (onResolved, onRejected) {
    let self = this
    //判断回调函数(错误穿透)
    if (typeof onRejected !== 'function') {
        onRejected = reason => {
            throw reason
        }
    }
    if (typeof onResolved !== 'function') {
        onRejected = value => {
            return value
        }
    }
    //当我们执行then方法后,会返回一个promise对象的结果,所以需要return一个实例化的promise对象
    //但是,当我们使用promise实例时,如果不使用方法resolve或reject,状态无法改变,且不会有值,所以需要调用resolve或reject方法
    return new Promise((resolve, reject) => {
        //封装函数
        function callback(type) {
            //接收回调函数执行的结果,然后做出对应的回调
            let result = type(self.PromiseResult)
            //判断
            if (result instanceof Promise) {
                result.then(
                    v => {
                        resolve(v);
                    }, r => {
                        reject(r)
                    }
                )
            } else {
                //由于结果不是一个promise对象,所以无论如何,状态都为成功
                resolve(result)
            }
        }

        if (this.PromiseState === 'fulfilled') {
            setTimeout(()=>{
                callback(onResolved)
            })
        }
        if (this.PromiseState === 'rejected') {
            setTimeout(()=>{
                callback(onRejected)
            })
        }
        //判断promise对象状态
        if (this.PromiseState === 'pending') {
            //保存回调函数
            this.callbacks.push({
                onResolved: function () {
                    callback(onResolved)
                },
                onRejected: function () {
                    callback(onRejected)
                }

            })
        }
    })
}


//catch方法
Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
}

//Promise.resolved方法
Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
            value.then(
                v => {
                    resolve(v)
                },
                r => {
                    reject(r)
                }
            )
        } else {
            resolve(value)
        }
    })
}


//Promise.reject方法
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason)
    })
}


//all方法封装
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let arr=[];
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(
                //得知对象的状态是成功的
                //每个promise对象都成功
                v => {
                    count++;
                    arr[i]=v;
                    if(count===promises.length){
                        //修改状态
                        resolve(arr)
                    }
                },
                r => {
                    reject(r)
                }
            )
        }
    })
}



//race方法
Promise.race=function (promises) {
    return new Promise((resolve,reject)=>{
        for (let i=0;i<promises.length;i++){
            promises[i].then(v=>{
               resolve(v)
            },r=>{
                reject(r)
            })
        }
    })
}










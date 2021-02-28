/*
    第一种暴露方式: model.exports=value
 */


module.exports={
    data:'laijiandong',

    text:function () {
        console.log(this.data);
    }
}
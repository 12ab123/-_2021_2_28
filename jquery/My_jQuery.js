$.extend({
    max: function (a, b) {
        return a > b ? a : b
    },
    min: function (a, b) {
        return a > b ? b : a
    },
    leftTrim:function (str){
        return str.replace(/^\s+/,'');
    },
    rightTrim:function (str){
        return str.replace(/\s+$/,'');
    }
})


$.fn.extend({
    checkAll:function (){
        // this指向当前调用方法的jquery对象
        this.prop('checked',true)
    },
    uncheckAll:function (){
        this.prop('checked',false);
    },

    reverseCheck:function (){
        // this指向调用当前方法的jquery对象
        this.each(function (){
            // this指向经过遍历后的每一个dom对象
            this.checked=!this.checked
        })
    }
})
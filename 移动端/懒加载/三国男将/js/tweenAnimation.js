/**

 能够实现对元素动画的控制

 函数名
 tweenAnimation


 使用实例
 tweenAnimation(el,'width',200,956,time,10)


 */



function tweenAnimation(el, style, init, end, time, jiange, type,  callBack,s) {
//    实现功能
//    初始化参数
    var t = 0;
    var b = init;
    var c = end - init;
    var d = time;
    var s = s;


    //如果没有传入type值,值为linear,否则为type
    var type = type === undefined ? 'linear' : type;

    //动画切换的函数集合
    var tween = {
        linear: function (t, b, c, d) {
            return c * t / d + b;
        },
        backEaseOut: function (t, b, c, d, s) {
            if (s == undefined) s = 3.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeOut: function (t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        }
    };

    if (el.timer === undefined) {
        el.timer = {};
    }
//    启动定时器
    el.timer[style] = setInterval(function () {
        //    清空定时器

        if (t >= d) {
            clearInterval(el.timer[style]);
            return;
        }
        //时间自增
        t += jiange;
        //计算新的值
        var v = tween[type](t, b, c, d);

        switch (style) {
            case 'width':
            case 'height':
            case 'left':
            case 'top':
                el.style[style] = v + 'px';
                break;
            case 'translateX':
            case 'translateY':
            case 'translateZ':
            case 'scale':
            case 'scaleX':
            case 'scaleY':
            case 'scaleZ':
            case 'rotate':
            case 'rotateX':
            case 'rotateY':
                transformCSS(el, style, v);
                break;

            case 'opacity':
                el.style[style] = v;
                break;
        }


        if (callBack && typeof callBack === 'function') {
            callBack();
        }


    }, jiange)

}


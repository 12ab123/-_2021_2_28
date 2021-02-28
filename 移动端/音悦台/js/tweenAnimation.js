(function (w) {
    function tweenAnimation(node, init, end, style, duration, jiange, type, huitan) {
        //初始化参数
        var huitan =  huitan || 3;
        //动画效果
        var tween = {
            linear: function (t, b, c, d) {
                return c * t / d + b;
            },
            backEaseOut: function (t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            quinteaseOut: function (t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            }
        }

        //参数获取
        var t = 0;
        var b = init;
        var c = end - init;
        var time = duration;
        //在元素中针对 样式属性进行初始化
        node[style] = {};
        //定时器
        clearInterval(node[style].timer);
        node[style].timer = setInterval(function () {
            //1. 时间自增
            t += jiange;
            //2. 计算新的值
            var val = tween[type](t, b, c, time, huitan);
            //3. 设置样式
            switch (style) {
                case 'width':
                case 'height':
                case 'left':
                case 'top':
                case 'right':
                case 'bottom':
                    node.style[style] = val + 'px';
                    break;
                case 'opacity':
                case 'z-index':
                    node.style[style] = val;
                    break;
                case 'translateX':
                case 'translateY':
                case 'translate':
                case 'scale':
                case 'scaleX':
                case 'scaleY':
                case 'rotate':
                case 'rotateX':
                case 'rotateY':
                case 'rotateZ':
                    transformCSS(node, style, val);
                    break;
            }
            //4. 停止定时器
            if (t >= time) {
                console.log(node[style]);
                clearInterval(node[style].timer);
            }
        }, jiange);
    }
    w.tweenAnimation = tweenAnimation;
})(window);
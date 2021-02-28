/*

封装触摸滑动


调用实例
    <div id="container">
        <div class="wrapper"></div>
    </div>

    new TouchScroll('#container','.wrapper');


* */


function TouchScroll(container, content, options) {
    var bg = options && options.bg ? options.bg : 'rgba(0,0,0,0.8)';
    var scrollWidth = options && options.width ? options.width : 6;
    var move = options && options.move ? options.move : false;
    var end = options && options.end ? options.end : false;
    var app = document.querySelector(container);
    var content = app.querySelector(content);
    var scrollBar = null;

    app.addEventListener('touchstart', function (e) {
        this.y = e.touches[0].clientY;
        this.t = transformCSS(content, 'translateY');
        this.startTime = Date.now();
        //    即点即停
        if (content.timer && content.timer['translateY']) {
            clearInterval(content.timer['translateY']);

        }
        if (scrollBar.timer && scrollBar.timer['translateY']) {
            clearInterval(scrollBar.timer['translateY']);

        }
    });

    app.addEventListener('touchmove', function (e) {
        this.my = e.touches[0].clientY;
        this.translateY = this.my - this.y + this.t;
        transformCSS(content, 'translateY', this.translateY);
        //    不断的修改滚动条的位置
        //    滚动条移动的位置/屏幕的高度 === 内容区移动的距离/内容区的高度
        //         滚动条移动的位置 == 屏幕的高度*内容区移动的距离/内容区的高度
        var appHeight = app.offsetHeight;
        var contentHeight = content.offsetHeight;
        var y = this.translateY * appHeight / contentHeight;
        transformCSS(scrollBar, 'translateY', -y);

        if (typeof (move) === 'function') {
            move();
        }

    });

    app.addEventListener('touchend', function (e) {

        var TY = transformCSS(content, 'translateY');

        this.ey = e.changedTouches[0].clientY;
        this.endTime = Date.now();
        var disTime = this.endTime - this.startTime;
        var disY = this.ey - this.y;
        var v = disY / disTime;
        var s = v * 120;
        var translateY = TY + s;


        //声明一个变量
        var type = 'easeOut';
        if (translateY >= 0) {
            translateY = 0;
            type = 'backEaseOut';
        }
        var minTranslateY = app.offsetHeight - content.offsetHeight;
        if (translateY <= minTranslateY) {
            translateY = minTranslateY;
            type = 'backEaseOut';

        }
        //计算滚动条的translateY
        var y = -translateY / content.offsetHeight * app.offsetHeight;
        var scrollTranslateY = transformCSS(scrollBar, 'translateY');
        tweenAnimation(scrollBar, 'translateY', scrollTranslateY, y, 500, 10, type, move);

        tweenAnimation(content, 'translateY', TY, translateY, 500, 10, type, move);
        if (typeof (end) === 'function') {
            end();
        }
    });

    //初始化
    app.init = function () {
        //父级元素设置相对定位
        app.style.position = 'relative';
        //创建滚动条
        // position: absolute;
        // right: 0;
        // top: 0;
        // width: 6px;
        // /*height: 100px;*/
        // border-radius: 6px;
        // background: rgba(0, 0, 0, 0.8);
        scrollBar = document.createElement('div');
        scrollBar.classList.add('scroll-bar');
        app.appendChild(scrollBar);
        scrollBar.style.position = 'absolute';
        scrollBar.style.right = 0;
        scrollBar.style.top = 0;
        scrollBar.style.width = scrollWidth + 'px';
        scrollBar.style.borderRadius = '6px';
        scrollBar.style.background = bg;
        //    计算滚动条的高度
        //    滚动条的高度/屏幕的高度 === 屏幕的高度/内容的高度
        //    滚动条的高度===屏幕的高度*屏幕的高度/内容的高度
        var h = app.offsetHeight * app.offsetHeight / content.offsetHeight;
        //    设置高度
        scrollBar.style.height = h + 'px';
        console.log(app.offsetHeight, app.offsetHeight, content.offsetHeight);
    };
    app.init();

    this.app = app;
}
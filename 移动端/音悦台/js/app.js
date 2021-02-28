app = document.getElementById('app');
//全局样式
(function () {
    app.addEventListener('touchstart', function (e) {
        e.preventDefault();
    });

//移动端适配
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
    window.onresize = function () {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
    };
}());

// 头部
(function () {
    var menu = document.querySelector('#header .up .menu');
    var zhezhao = document.querySelector('#header .zhezhao');
    var input = document.querySelector('input');

    menu.addEventListener('touchstart', function (e) {
        // this.classList.toggle('open');
        var a = this.classList.contains('open');
        if (a) {
            this.classList.remove('open');
        } else {
            this.classList.add('open');
        }
        zhezhao.classList.toggle('open');
        e.stopPropagation();
    });
    zhezhao.addEventListener('touchstart', function (e) {
        e.stopPropagation();
    });

    input.addEventListener('touchstart', function (e) {
        e.stopPropagation();
    });
    window.addEventListener('touchstart', function () {
        input.blur();
        menu.classList.remove('open');
        zhezhao.classList.remove('open');
    })


}());

// 导航
(function () {
    var nav = document.getElementById('nav');
    var warp = document.querySelector('.warp');
    var navItems = document.querySelectorAll('#nav .warp li');
    //判断当前导航是否滑动
    var isMoving = false;
    nav.addEventListener('touchstart', function (e) {
        //    起始位置
        this.x = e.touches[0].clientX;
        //      当前容器的偏移量
        this.left = transformCSS(warp, 'translateX');
        //    触摸开始时的时间
        this.startT = Date.now();

    });
    nav.addEventListener('touchmove', function (e) {
        warp.style.transition = 'none';
        this.mx = e.touches[0].clientX;
        var newLeft = this.mx - this.x + this.left;
        //橡皮筋效果
        //位置this.x的值不变,一直为起始值,this.mx的值根据移动的距离发生改变
        if (newLeft > 0) {
            newLeft = (this.mx - this.x) / 2;
        }
        var minTranslateX = nav.offsetWidth - warp.offsetWidth;
        if (newLeft < minTranslateX) {
            newLeft = minTranslateX + (this.mx - this.x) / 2;
        }
        transformCSS(warp, 'translateX', newLeft);

        isMoving = true;
    });
    nav.addEventListener('touchend', function (e) {
        //    获取当前包裹容器的translateX的值
        var translateX = transformCSS(warp, 'translateX');
        //获取触摸的位移
        this.ex = e.changedTouches[0].clientX;
        var disx = this.ex - this.x;
        //获取触摸结束的时间
        this.endT = Date.now();
        var disTime = this.endT - this.startT;
        var v = disx / disTime;
        //通过v求位移
        var s = v * 100;
        translateX += s;
        transformCSS(warp, 'translateX', translateX);
        warp.style.transition = 'ease-out 0.3s';
        //边界判断
        if (translateX > 0) {
            transformCSS(warp, 'translateX', 0);
            warp.style.transition = '0.4s cubic-bezier(.36,.63,.53,1.68)';

        }
        var minTranslateX = -(warp.offsetWidth - nav.offsetWidth);
        if (translateX < minTranslateX) {
            transformCSS(warp, 'translateX', minTranslateX);
            warp.style.transition = '0.4s cubic-bezier(.36,.63,.53,1.68)';

        }
        isMoving = false;
    });
    navItems.forEach(function (i) {
        i.addEventListener('touchend', function (e) {
            if (isMoving) {
                return
            }
            navItems.forEach(function (value) {
                value.classList.remove('active');
            });
            this.classList.add('active');

        });

    })
}());

//轮播图
(function () {
    new Swiper('.swiper-container',{
        autoplay:true,
        loop:true,
        pagination: {
            el: '.swiper-pagination',
        },
    });
}());


//导航区

var b=true;
var a=null;
(function () {
     a=new Swiper('.container');
}());


//楼层
(function () {
    var floor = document.querySelector('.floor');
    var moveBorder = floor.querySelector('.moved-border');
    var navItems = floor.querySelectorAll('.nav-item');
    var wrapper=floor.querySelector('.swiper-wrapper');
    var c=0;


    navItems.forEach(function (item, key) {
        item.key = key;
        item.addEventListener('touchstart', function (e) {
            transformCSS(moveBorder, 'translateX', item.key * navItems[item.key].offsetWidth);
            wrapper.style.transition='0.5s all';
            transformCSS(wrapper,'translateX',-floor.offsetWidth*item.key);
            c=item.key;
            console.log(c);

        })
    });

}());
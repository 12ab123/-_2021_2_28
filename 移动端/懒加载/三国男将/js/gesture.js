(function (w) {
    function gesture(el, callbak) {
        var start = callbak && callbak.start ? callbak.start : null;
        var move = callbak && callbak.move ? callbak.move : null;
        var end = callbak && callbak.end ? callbak.end : null;
        el.hasGestureStart = false;

        //手势开始事件
        el.addEventListener('touchstart', function (e) {
            if (e.touches.length >= 2) {

                el.hasGestureStart = true;
                this.initDis = getTouchesDis(e.touches[0], e.touches[1]);
                start(e);

                this.initJiaodu=getTouchesJiaodu(e.touches[0], e.touches[1]);

            }
        });

        //手势移动事件
        el.addEventListener('touchmove', function (e) {
            if (e.touches.length >= 2) {

                //    计算两个触点的直线距离
                this.moveDis = getTouchesDis(e.touches[0], e.touches[1]);

                //计算比例
                e.scale = this.moveDis / this.initDis;


                this.moveJiaodu = getTouchesJiaodu(e.touches[0], e.touches[1]);

                var jiaodu = this.moveJiaodu - this.initJiaodu;
                e.rotation = jiaodu;

                move(e);


            }
        });

        //手势结束事件
        el.addEventListener('touchend', function (e) {
            if (e.touches.length < 2 && el.hasGestureStart) {
                end(e);
                el.hasGestureStart = false;
            }
        });
    }

    //计算两点之间的间距
    function getTouchesDis(x, y) {
        var disX = x.clientX - y.clientX;
        var disY = x.clientY - y.clientY;
        //    计算两个触点的直线距离
        return Math.sqrt(disX * disX + disY * disY);
    }

    //计算两个触点行程的夹角
    function getTouchesJiaodu(x,y){
        var disX = x.clientX - y.clientX;
        var disY = x.clientY - y.clientY;
        var du = Math.atan2(disX, disY);
        return du * 180 / Math.PI;
    }

    w.gesture = gesture;
}(window));

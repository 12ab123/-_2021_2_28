function Clock(selector, options) {
    var canvas = document.querySelector(selector);
    canvas.width = options && options.width ? options.width : 400;
    canvas.height = options && options.height ? options.height : 400;
    var ctx = canvas.getContext('2d');
    setInterval(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        //绘制表盘
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 150 * canvas.width / 400, 0, 360 / 180 * Math.PI);
        ctx.stroke();

        //绘制分钟刻度
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(-90 / 180 * Math.PI);
        ctx.save();


        for (var i = 0; i < 60; i++) {
            //在原有的基础上进行旋转
            ctx.rotate(6 / 180 * Math.PI);
            if (i % 5 === 4) {
                ctx.beginPath();
                ctx.lineWidth = 3;
                ctx.moveTo(120 * canvas.width / 400, 0);
                ctx.lineTo(145 * canvas.width / 400, 0);
                ctx.stroke();
                continue;
            }
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(135 * canvas.width / 400, 0);
            ctx.lineTo(145 * canvas.width / 400, 0);
            ctx.stroke();
        }

        ctx.restore();

        var date = new Date();

        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var hRotate = (h * 60 + m) / 60 * 30;
        var mRotate = (m * 60 + s) / 60 * 6;
        var sRotate = s * 6;


        //绘制秒针
        ctx.save();
        ctx.rotate(sRotate / 180 * Math.PI);
        ctx.beginPath();
        ctx.moveTo(-20 * canvas.width / 400, 0);
        ctx.lineTo(110 * canvas.width / 400, 0);
        ctx.stroke();
        ctx.restore();

        //绘制分针
        ctx.save();
        ctx.rotate(mRotate / 180 * Math.PI);
        ctx.beginPath();
        ctx.lineWidth = 3* canvas.width / 400;
        ctx.strokeStyle = 'deeppink';
        ctx.lineCap = "round";
        ctx.moveTo(-15 * canvas.width / 400, 0);
        ctx.lineTo(100 * canvas.width / 400, 0);
        ctx.stroke();
        ctx.restore();

        //绘制时针
        ctx.save();
        ctx.rotate(hRotate / 180 * Math.PI);
        ctx.beginPath();
        ctx.lineWidth = 4* canvas.width / 400;
        ctx.strokeStyle = 'blue';
        ctx.lineCap = "round";
        ctx.moveTo(-10 * canvas.width / 400, 0);
        ctx.lineTo(90 * canvas.width / 400, 0);
        ctx.stroke();
        ctx.restore();

        ctx.beginPath();
        ctx.arc(0, 0, 6 * canvas.width / 400, 0, 360 * 180 / Math.PI);
        //填充颜色
        ctx.fillStyle = 'red';
        ctx.fill();


        ctx.restore();


    }, 1000);
}
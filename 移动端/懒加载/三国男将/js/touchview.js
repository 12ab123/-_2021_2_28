/*

     new Touchview('#box');




    依赖gesture.js

* */



function Touchview(selector) {
    var el=document.querySelector(selector);
    gesture(el, {
        start: function (e) {

            this.initScale = transformCSS(el, 'scale');
            this.initRotation = transformCSS(el, 'rotate');
        },
        move: function (e) {
            //    设置元素显示比例
            transformCSS(el, 'scale', e.scale * this.initScale);
            transformCSS(el, 'rotate', e.rotation + this.initRotation);
        }
    })
}
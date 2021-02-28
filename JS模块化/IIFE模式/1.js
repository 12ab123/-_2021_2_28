((w) => {
    let data = 'abc';

    function text() {
        console.log(data);
    }

    function text2() {
        console.log(data.toUpperCase());
    }

    let obj = {
        // text:text        当键和值的值一样时,可以简写为text
        text, text2
    }
    w.obj = obj;
})(window);
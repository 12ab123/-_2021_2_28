/*
    module1使用了分别暴露方法
 */

export let data="laijiandong"

export function demo() {
    console.log('我是模块内的demo模块',data.toUpperCase());
}

export function text() {
    console.log('我是模块内的text模块',data.toLowerCase());
}
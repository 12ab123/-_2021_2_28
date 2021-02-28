/*
    主文件
 */

// ex6中,用哪种方式引入,取决于用哪种方式暴露

// import {data,demo,text} from './module1'
//将module1中的所有暴露的内容收集成一个对象,名为haha
import * as haha from './module1'

import {haha1,haha2} from './module2'

import module3 from './module3'

//引入第三方模块,都有默认暴露的方法
import uniq from 'uniq'

console.log(haha.data);
haha.demo()
haha.text()
haha1()
haha2()
console.log(module3.name);
console.log(module3.age);
module3.speak()
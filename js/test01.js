// pubsub-js 支持 es6 规范、 commonjs 规范 和 amd 规范
// 其中 es6 规范、 commonjs 规范 需要翻译后才能在浏览器中执行
// es6 规范需要翻译后才能在 node 中执行，node 天然支持 commonjs 规范
// amd 规范在任何地方都不需要翻译，但是很少用

// 如果我们是在 vue 项目里面，那么可以直接 使用es6 规范去引入，会自动翻译
import PubSub from 'pubsub-js';
console.log(PubSub);
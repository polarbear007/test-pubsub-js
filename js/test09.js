let PubSub = require('pubsub-js');

PubSub.subscribe('my.topic', function(routingkey, msg){
	console.log('*************************');
	console.log("binding key is : my.topic");
	console.log("routingkey is : " + routingkey);
	console.log("getted msg : " + msg);
	console.log('*************************');
});

// 其实前面我们应该已经了解到了，PubSub.publish() 方法是异步的
// 即： 他只管把消息提交上去，只要确认有没有人接收，就直接返回结果
//      不会等到订阅者的回调函数都执行完，才返回结果 

// 所以我们可以看到往往是先打印 result ，再执行回调函数。
let result = PubSub.publish('my.topic', 'hello');
console.log(result);

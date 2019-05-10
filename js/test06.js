let PubSub = require('pubsub-js');

let token1 = PubSub.subscribe('my.topic', function(routingkey, msg){
	console.log("binding key is : my.topic");
	console.log("routingkey is : " + routingkey);
	console.log("getted msg : " + msg);
	console.log('*************************');
});

let token2 = PubSub.subscribe('my.topic.test', function(routingkey, msg){
	console.log("binding key is : my.topic.test");
	console.log("routingkey is : " + routingkey);
	console.log("getted msg : " + msg);
	console.log('*************************');
});

let token3 = PubSub.subscribe('my.topic.test.hello', function(routingkey, msg){
	console.log("binding key is : my.topic.test2");
	console.log("routingkey is : " + routingkey);
	console.log("getted msg : " + msg);
	console.log('*************************');
});

// 绑定的所有订阅者都可以接收到消息
PubSub.publish('my.topic.test.hello', 'hello');

// 取消订阅以后，再发送消息，将没有订阅者接收
setTimeout(function(){
	// 取消所有的订阅者
	PubSub.clearAllSubscriptions();
	console.log('取消了所有订阅者的订阅');
	PubSub.publish('my.topic.test.hello', 'hello');
}, 1000);
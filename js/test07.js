let PubSub = require('pubsub-js');

PubSub.subscribe('my.topic', function(routingkey, msg){
	console.log("binding key is : my.topic");
	console.log("routingkey is : " + routingkey);
	console.log("getted msg : " + msg);
	console.log('*************************');
});

PubSub.subscribe('my.topic.test', function(routingkey, msg){
	console.log("binding key is : my.topic.test");
	console.log("routingkey is : " + routingkey);
	console.log("getted msg : " + msg);
	console.log('*************************');
});

PubSub.subscribe('my.topic.test.hello', function(routingkey, msg){
	console.log("binding key is : my.topic.test2");
	console.log("routingkey is : " + routingkey);
	console.log("getted msg : " + msg);
	console.log('*************************');
});

// 绑定的所有订阅者都可以接收到消息
PubSub.publish('my.topic.test.hello', 'hello');

// 另一种取消订阅的思路
// PubSub.unsubscribe(topic)
setTimeout(function(){
	// 取消所有跟 my.topic.test 匹配的订阅者
	// 这里其实取消了两个订阅者： my.topic.test 和 my.topic.test.hello
	// my.topic 则不会受到影响 
	PubSub.unsubscribe('my.topic.test');
	console.log('取消了所有跟 my.topic.test 匹配的订阅者');
	PubSub.publish('my.topic.test.hello', 'hello');
}, 1000);
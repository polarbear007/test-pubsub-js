let PubSub = require('pubsub-js');

PubSub.subscribe('my.topic', function(routingkey, msg){
	console.log('*************************');
	console.log("binding key is : my.topic");
	console.log("routingkey is : " + routingkey);
	console.log("getted msg : " + msg);
	console.log('*************************');
});

// 返回值可以看这条消息有没有被接收
// 如果这条消息没有人接收的话，那么会返回 false， 如果有人接收就返回true
let result = PubSub.publish('my.topic', 'hello');
console.log(result);

result = PubSub.publish('topic.hello', 'hello');
console.log(result);
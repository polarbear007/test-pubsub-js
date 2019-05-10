let PubSub = require('pubsub-js');

PubSub.subscribe('my.topic', function(routingkey, msg){
	console.log('bindingkey is : ' + 'my.topic');
	console.log('routingkey is : ' + routingkey);
	console.log('message is :' + msg);
	console.log("message type : "  + typeof msg);
	console.log('*******************');
});

// 发送字符串消息,可以正常接收
PubSub.publish('my.topic', "hello world");
// 发送 boolean 类型数据，可以正常接收
PubSub.publish('my.topic', true);
// 发送 number 类型数据，可以正常接收
PubSub.publish('my.topic', 123);
// 发送引用类型数据,同样可能正常接收
PubSub.publish('my.topic', {name: 'eric'});
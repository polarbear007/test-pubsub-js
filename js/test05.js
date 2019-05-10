let PubSub = require('pubsub-js');

let token = PubSub.subscribe('my.topic', function(routingkey, msg){
	console.log("binding key is : my.topic");
	console.log("routingkey is : " + routingkey);
	console.log("getted msg : " + msg);
	console.log('*************************');
});
// 当我们执行 subscribe() 方法以后，会把一个回调函数与 PubSub 绑定，
// 此方法会返回一个标识字符串，我们可以通过这个标识字符串与 PubSub 解除订阅
console.log(token);
PubSub.publish('my.topic', 'hello');

// 注意，如果我们不设置点延迟，你刚发的消息，可能还没有接收，就会直接取消订阅了
// 那么前面发送的消息也将无法接收
setTimeout(function(){
	// 取消订阅
	PubSub.unsubscribe(token);
	console.log("已经取消订阅了");
	
	// 取消订阅以后,再发送消息,则无法接收了
	PubSub.publish('my.topic', 'hello');
}, 1000);


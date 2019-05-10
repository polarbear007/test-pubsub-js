let PubSub = require('pubsub-js');

// 订阅消息
// 这个 my.topic 其实就是订阅的时候指定的   bindingkey
// pubsub 默认的订阅模式就是 topic 类型， 其实 my.topic 相当于
// rabbitmq 里面的  my.topic.#   ,这个# 可以匹配任意个单词
PubSub.subscribe('my.topic', function(routingkey, msg){
	console.log('bindingkey is : ' + 'my.topic');
	console.log('routingkey is : ' + routingkey);
	console.log('message is :' + msg);
	console.log('*******************');
});

// 发送消息，指定路由键
PubSub.publish('my.topic', "hello world");
// 路由键为 my.topic.test， 同样可以接收到消息 
PubSub.publish('my.topic.test', "hello world");
// 路由键为 my.topic.hello.test， 同样可以接收到消息 
PubSub.publish('my.topic.hello.test', "hello world");
// 路由键为 hello.my.topic, 无法接收到消息
// 没有任何队列匹配的消息，将会直接被丢弃
PubSub.publish('hello.my.topic', "hello world");
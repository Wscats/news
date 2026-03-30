'use strict';

const wsscats = require('wsscats')
	//获取的是一个装有newsApi和turingApi的函数
	//console.log(wsscats)
	//执行函数请求接口，获取
const newsData = wsscats.newsApi({
	callback: 'JSON_CALLBACK',
	page: 1
}, function(data) {
	console.log(data)
});
const turingData = wsscats.turingApi({
	callback: 'JSON_CALLBACK',
	message: '你好'
}, function(data) {
	console.log(data)
});
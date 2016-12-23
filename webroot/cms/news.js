var http = require('http');
var url = require('url');
var querystring = require('querystring');
var sqll = require('./sqll');
//输出JSON数据，API接口
var writeOut = function(query, response) {
	response.write(JSON.stringify(query));
	response.end();
}
//request 接受请求
//response 相应请求
http.createServer(function(request, response) {
	request.setEncoding('utf-8');
	var pathName = url.parse(request.url).pathname;
	var paramsStr = url.parse(request.url).query;
	var param = querystring.parse(paramsStr);
	//后端路由
	console.log("路由：" + pathName);
	console.log("参数：" + paramsStr);
	//解决跨域
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.writeHead(200, {
		"Content-Type": "text/jsonp;charset=utf-8"
	})
	console.log(request.method);
	if(request.method.toUpperCase() == 'POST') {
		var postData = "";
		/**
		 * 因为post方式的数据不太一样可能很庞大复杂，
		 * 所以要添加监听来获取传递的数据
		 * 也可写作 req.on("data",function(data){});
		 */
		request.addListener("data", function(data) {
			postData += data;
		});
		/**
		 * 这个是如果数据读取完毕就会执行的监听方法
		 */
		request.addListener("end", function() {
			console.log(postData);
			//处理angular的post请求的，去掉"[]"，因为replace只替换一次，所以用循环替换
			while(postData.indexOf('params%5B') >= 0) {
				postData = postData.replace('params%5B', '');
			}
			while(postData.indexOf('%5D') >= 0) {
				postData = postData.replace('%5D', '');
			}
			var query = querystring.parse(postData);
			writeOut(query, response);
		});
	} else if(request.method.toUpperCase() == 'GET') {
		/**
		 * 也可使用var query=querystring.parse(url.parse(req.url).query);
		 * 区别就是url.parse的arguments[1]为true：
		 * 也能达到'querystring库'的解析效果，而且不使用querystring
		 */
		if(pathName == '/add') {
			sqll.curd.add('news', 'title,source,text', '"' + param.title + '",' + '"' + param.source + '",' + '"' + param.text + '"', function(err) {
				if(err) {

				} else {
					var obj = {
						status: 1,
						info: 'success'
					}
					response.end(param.callback + "(" + JSON.stringify(obj) + ")");
				}
			});
		/*
		 * API:http://localhost:8899/find
		 * params:NULL
		 * return 新闻：title:标题,source:来源,text:内容
		 * */
		} else if(pathName == '/find') {
			sqll.curd.find('news', '*', function(err, rows) {
				console.log(rows);
				var obj = {};
				obj.arr = rows;
				response.end(param.callback + "(" + JSON.stringify(obj) + ")");
			});
		} else if(pathName == '/delete') {
			sqll.curd.delete('news', 'id=' + param.id, function(err) {
				sqll.curd.find('news', '*', function(err, rows) {
					console.log(rows);
					var obj = {};
					obj.arr = rows;
					response.end(param.callback + "(" + JSON.stringify(obj) + ")");
				});
			});
		} else if(pathName == '/findByPk') {
			sqll.curd.findByPk('news', '*', 'id=' + param.id, function(err, rows) {
				console.log(rows);
				var obj = {};
				obj.new = rows;
				response.end(param.callback + "(" + JSON.stringify(obj) + ")");
			});
		} else if(pathName == '/update') {
			sqll.curd.update('news', 'title="' + param.title + '"' + ', text="' + param.text + '"' + ', source="' + param.source + '"', 'id=' + param.id, function(err) {
				if(err) {} else {
					var obj = {
						status: 1,
						info: 'success'
					}
					response.end(param.callback + "(" + JSON.stringify(obj) + ")");
				}
			});
		} else if(pathName == '/search') {
			sqll.curd.findByPk('news', '*', 'text=' + '"' + param.search + '"', function(err, rows) {
				console.log(rows);
				var obj = {};
				obj.new = rows;
				response.end(param.callback + "(" + JSON.stringify(obj) + ")");
			});
		}
	} else {
		//head put delete options etc.
		//注意angular的post请求监听到的了类型是option，所以记得处理
	}
}).listen(8899);
console.log("Start server:localhost:8899");
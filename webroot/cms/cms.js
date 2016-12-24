var http = require('http');
var url = require('url');
var querystring = require('querystring');
//引入cms操作数据库的模块
var sqll = require('./sql.js');

function curd(request, response) {
	request.setEncoding('utf-8');
	var pathname = url.parse(request.url).pathname;
	var paramsStr = url.parse(request.url).query;
	var param = querystring.parse(paramsStr);
	//后端路由
	console.log("路由：" + pathname);
	console.log("Hash值：" + paramsStr);
	response.writeHead(200, {
		"Content-Type": "text/jsonp;charset=utf-8"
	})
	console.log("请求方式：" + request.method);
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
			//处理angular的post请求的，去掉"[]"，因为replace只替换一次，所以用循环替换
			while(postData.indexOf('params%5B') >= 0) {
				postData = postData.replace('params%5B', '');
			}
			while(postData.indexOf('%5D') >= 0) {
				postData = postData.replace('%5D', '');
			}
			var param = querystring.parse(postData);
			console.log("请求参数如下：");
			console.log(param);
			if(pathname == '/news/add') {
				sqll.curd.add('news', param, function(err) {
					if(err) {
						console.log("INSERT ERROR" + err);
					} else {
						var obj = {
							status: 1,
							info: 'success'
						}
						response.end(JSON.stringify(obj));
					}
				});
			} else if(pathname == '/news/findAll') {
				sqll.curd.findAll('news', '*', function(err, rows) {
					var obj = {};
					obj.arr = rows;
					response.end(JSON.stringify(obj));
				});
			} else if(pathname == '/news/delete') {
				sqll.curd.delete('news', param, function(err) {
					sqll.curd.findAll('news', '*', function(err, rows) {
						var obj = {};
						obj.arr = rows;
						response.end(JSON.stringify(obj));
					});
				});
			} else if(pathname == '/news/findByPk') {
				sqll.curd.findByPk('news', '*', param, function(err, rows) {
					var obj = {};
					obj.new = rows;
					response.end(JSON.stringify(obj));
				});
			} else if(pathname == '/news/update') {
				sqll.curd.update('news', param, function(err) {
					if(err) {} else {
						var obj = {
							status: 1,
							info: 'success'
						}
						response.end(JSON.stringify(obj));
					}
				});
			}
		});
	} else if(request.method.toUpperCase() == 'GET') {

	} else {
		//head put delete options etc.
		//注意angular的post请求监听到的了类型是option，所以记得处理
	}
}

exports.curd = curd;
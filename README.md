# 日日新闻客户端

效果如下

![这里写图片描述](http://img.blog.csdn.net/20160721173253764)

| 存放控制器的文件 | 存放框架等文件 | 存放示例文件 | 存放图片素材| 存放视图文件 |
| ------------- |:-------------:| :-------------:| :-------------:| -----:|
|[control](https://github.com/Wscats/news/tree/master/control)|[dist](https://github.com/Wscats/news/tree/master/dist)|[gh-pages](https://github.com/Wscats/news/tree/master/ghpage) |[image](https://github.com/Wscats/news/tree/master/image)|[view](https://github.com/Wscats/news/tree/master/view) |

[API来源](http://apistore.baidu.com/apiworks/servicedetail/688.html)

[触摸滑动服务DEMO](https://wscats.github.io/news/ghpage/touch.html)


在对应控制器注入服务`swipe`
```
app.controller('autumnsCtrl', ['$scope', 'swipe', function($scope, swipe) {}])
```
在swipe对象上面执行method服务，并传入需要执行的回调函数
格式`swipe.method([方向],[回调函数])`
方向为四个`top，bottom，left，right`
回调函数的参数可以获取滑动前后的x和y坐标，并且方向的信息
具体是对象中的`x1,x2,y1,y2`属性，和`direction`属性
例如
```
swipe.method("bottom",function(e){
	console.log(e)
})
```

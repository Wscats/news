var app = angular.module('newsApp', ['ui.router', 'ng.post', 'news.controller', 'news.service', 'news.directive']);
//配置路由，
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('index', {
		//url+#/index
		url: '/index',
		templateUrl: 'template/index.html',
		controller: 'indexCtrl'
	}).state('index.list', {
		//新闻列表
		url: '/list',
		templateUrl: 'template/newsList.html',
		controller: 'listCtrl'
	}).state('index.secondlist', {
		//登录页面
		url: '/secondlist',
		templateUrl: 'template/secondList.html',
		controller: 'secondListCtrl'
	}).state('detail', {
		//新闻的详细内容
		url: '/detail/:id',
		templateUrl: 'template/detail.html',
		controller: 'detailCtrl'
	}).state('login', {
		url: '/login',
		templateUrl: 'template/logins.html',
		controller: 'loginsCtrl'
	}).state('register', {
		url: '/register',
		templateUrl: 'template/register.html',
		controller: 'registerCtrl'
	}).state('setting', {
		url: '/setting',
		templateUrl: 'template/setting.html',
		controller: 'settingCtrl'
	})
	$urlRouterProvider.when('', '/index/list');
}])
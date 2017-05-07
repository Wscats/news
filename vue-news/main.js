import Vue from 'vue'
//var Vue = require('vue')
import VueRouter from 'vue-router'
//var VueRouter = require('vue-router');
import 'weui'
//require('weui')
import Vuex from 'vuex';
//var Vuex = require('vuex')
import $ from 'jquery'
//var $ = require('jquery')
//window.$ = $
//window.jQuery = $

var index = require('./app/index.vue')
var wdetail = require('./app/wdetail.vue')
var recommend = require('./app/channel/recommend.vue')
var hot = require('./app/channel/hot.vue')
var entertainment = require('./app/channel/entertainment.vue')

//mui demo
var muiTest = require('./app/mui/test.vue')
//require("./mui/css/mui.css")
//window.mui = require("./mui/js/mui.js")

Vue.use(VueRouter)
const routes = [{
	path: '/index',
	component: index,
	children: [{
		path: 'recommend/:id',
		component: recommend
	}, {
		path: 'hot/:id',
		component: hot
	}, {
		path: 'entertainment/:id',
		component: entertainment
	}]
}, {
	path: '/detail/:id',
	component: wdetail
}, {
	path: '/mui',
	component: muiTest
}, {
	//默认重定向 redirect
	path: '/',
	redirect: '/index/recommend/6'
}]

const router = new VueRouter({
	routes //（缩写）相当于 routes: routes
})

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		userInfo: {},
		searchName: ''
	},
	getters: {
		getUserInfo(state) {
			return state.userInfo;
		}
	},
	mutations: {
		setUserInfo(state, userInfo) {
			state.userInfo = userInfo;
		}
	},
	actions: {
		setUserInfo({
			commit
		}, user) {
			commit('setUserInfo', user);
		}
	}
});

/*new Vue({
	el: '#app',
	render: (createElement) => createElement(App)
})*/

const app = new Vue({
	router,
	store
}).$mount('#app')
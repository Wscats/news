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
window.$ = $
window.jQuery = $

var index = require('./app/index.vue')
var wdetail = require('./app/wdetail.vue')
var recommend = require('./app/channel/recommend.vue')
var hot = require('./app/channel/hot.vue')
var entertainment = require('./app/channel/entertainment.vue')

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
		searchName: 'hello vuex, I am wscats',
	},
	//接受组件commit传过来的数据并保存到state中,this.$store.commit('changeSearchName', this.searchName);
	mutations: {
		changeSearchName: function(state, a) {
			state.searchName = a;
		},
	},
	//可以从组件调用此方法获取值，一般配合计算属性动态获取值
	//(1)return this.$store.state.searchName
	//(2)return this.$store.getters.getSearchName
	getters: {
		getSearchName: function(state) {
			return state.searchName;
		}
	}
})

/*new Vue({
	el: '#app',
	render: (createElement) => createElement(App)
})*/

const app = new Vue({
	router,
	store
}).$mount('#app')
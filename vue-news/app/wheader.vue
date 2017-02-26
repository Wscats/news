<template>
	<div class="weui-tab">
		<div class="weui-navbar">
			<!--weui-bar__item_on-->
			<a href="#/index/recommend/6" @click="tabs(6)" :class="{'weui-bar__item_on': tab==6}" class="weui-navbar__item">
				推荐
			</a>
			<a href="#/index/hot/7" @click="tabs(7)" :class="{'weui-bar__item_on': tab==7}" class="weui-navbar__item">
				热点
			</a>
			<a href="#/index/entertainment/8" @click="tabs(8)" :class="{'weui-bar__item_on': tab==8}" class="weui-navbar__item">
				娱乐
			</a>
		</div>
		<div class="weui-tab__panel">

		</div>
	</div>
</template>
<script>
	export default {
		replace: false,
		data() {
			return {
				tab: 6
			}
		},
		methods: {
			tabs: function(tab) {
				this.tab = tab;
			}
		},
		components: {},
		mounted() {
		},
		directives: {

		}
	}
</script>
<style scoped>
	.weui-navbar a {
		color: black;
	}
</style>
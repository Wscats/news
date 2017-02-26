<template>
	<div>
		<wheader></wheader>
		<wsearch></wsearch>
		<router-view></router-view>
	</div>
</template>
<script>
	//import wheader from "./wheader.vue";
	var wheader = require("./wheader.vue")
	//import wsearch from "./wsearch.vue";
	var wsearch = require("./wsearch.vue")
	export default {
		replace: false,
		data() {
			return {
			}
		},
		methods: {
		},
		components: {
			'wheader': wheader,
			'wsearch': wsearch,
		},
		mounted() {
		},
		directives: {

		}
	}
</script>
<style scoped>
	div {
		color: red;
	}
</style>
<template>
	<div :class="{'weui-search-bar_focusing':isSearch}" class="weui-search-bar" id="search_bar">
		<form class="weui-search-bar__form">
			<div class="weui-search-bar__box">
				<i class="weui-icon-search"></i>
				<input type="search" @focus="inSearch()" @keyup="search()" v-model="searchName" class="weui-search-bar__input" id="search_input" placeholder="搜索" />
				<a href="javascript:" @click="cancel()" class="weui-icon-clear" id="search_clear"></a>
			</div>
			<label for="search_input" class="weui-search-bar__label" id="search_text">
				<i class="weui-icon-search"></i>
				<span>搜索</span>
			</label>
		</form>
		<a href="javascript:" @click="cancel()" class="weui-search-bar__cancel-btn" id="search_cancel">取消</a>
	</div>
</template>
<script>
	export default {
		replace: false,
		data() {
			return {
				isSearch:false,
				searchName:"Hello I'm wscat~"
			}
		},
		methods: {
			inSearch(){
				this.isSearch = true
			},
			cancel(){
				this.isSearch = false
			},
			search(){
				this.$store.searchName = this.searchName;
				console.log(this.$store)
			}
		},
		mounted(){
			console.log(this.$store)
		}
	}
</script>
<style scoped>

</style>
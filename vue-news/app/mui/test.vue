<template>
	<div>
		<div class="mui-slider">
			<div class="mui-slider-group mui-slider-loop">
				<!--支持循环，需要重复图片节点-->
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#"><img src="images/wscats.jpg" /></a>
				</div>
				<div class="mui-slider-item">
					<a href="#"><img src="images/wscats.jpg" /></a>
				</div>
				<!--支持循环，需要重复图片节点-->
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#"><img src="images/wscats.jpg" /></a>
				</div>
			</div>
		</div>
		<!--下拉刷新容器-->
		<div id="refreshContainer" class="mui-content mui-scroll-wrapper" style="top: 180px;">
			<div class="mui-scroll">
				<ul class="mui-table-view mui-table-view-chevron">

				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		replace: false,
		data() {
			return {}
		},
		methods: {},
		components: {},
		mounted() {
			var gallery = mui('.mui-slider');
			gallery.slider({
				interval: 5000 //自动轮播周期，若为0则不自动播放，默认为0；
			});

			console.log($)
			mui.init({
				pullRefresh: {
					container: "#refreshContainer", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
					down: {
						height: 50, //可选,默认50.触发下拉刷新拖动距离,
						auto: true, //可选,默认false.自动下拉刷新一次
						contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
						contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
						contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
						callback: function() {
								mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
								console.log("hello")
							} //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
					}
				}
			});
		},
		directives: {

		}
	}
</script>
<style scoped>

</style>
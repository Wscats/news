<template>
	<!-- 侧滑导航根容器 -->
	<div class="mui-off-canvas-wrap mui-draggable">
		<!-- 菜单容器 -->
		<aside class="mui-off-canvas-left">
			<div class="mui-scroll-wrapper">
				<div class="mui-scroll">
					456
					<!-- 菜单具体展示内容 -->
					...
				</div>
			</div>
		</aside>
		<!-- 主页面容器 -->
		<div class="mui-inner-wrap">
			<!-- 主页面标题 -->
			<header class="mui-bar mui-bar-nav">
				<a class="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
				<h1 class="mui-title">标题</h1>
			</header>
			<div class="mui-content mui-scroll-wrapper">
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
				<div id="refreshContainer" class="mui-content mui-scroll-wrapper" style="top: 224px;">
					<div class="mui-scroll">
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell mui-media">
								<a href="javascript:;">
									<img class="mui-media-object mui-pull-left" src="images/wscats.jpg">
									<div class="mui-media-body">
										幸福
										<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
									</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media">
								<a href="javascript:;">
									<img class="mui-media-object mui-pull-left" src="images/wscats.jpg">
									<div class="mui-media-body">
										木屋
										<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
									</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media">
								<a href="javascript:;">
									<img class="mui-media-object mui-pull-left" src="images/wscats.jpg">
									<div class="mui-media-body">
										CBD
										<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
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
<template>
	<div class="weui-panel weui-panel_access">
		<div class="weui-panel__hd">
			新闻列表
			<span>{{searchName}}</span>
		</div>
		<div class="weui-panel__bd">
			<!--注意不要用new，new为js的关键词-->
			<a :name="searchName" v-for="n in news" :href="'#/detail/'+n.id" class="weui-media-box weui-media-box_appmsg">
				<div class="weui-media-box__hd">
					<img class="weui-media-box__thumb" :src="n.image" alt="">
				</div>
				<div class="weui-media-box__bd">
					<h4 class="weui-media-box__title">{{n.title}}</h4>
					<p class="weui-media-box__desc">{{n.text}}</p>
				</div>
			</a>
		</div>
		<div class="weui-panel__ft">
			<a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
				<div class="weui-cell__bd">查看更多</div>
				<span class="weui-cell__ft"></span>
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					news: [],
				}
			},
			props: ['channel'],
			computed: {
				searchName: function() {
					return this.$store.state.searchName
					//return this.$store.getters.getSearchName
				}
			},
			methods: {
				getNews(callback) {
					var self = this;
					$.ajax({
						type: "get",
						//url: "http://localhost:81/news/php/index.php/news_api/show_detail_by_channel_id",
						url: "./api/list.json",
						data: {
							channel_id: this.channel
						},
						async: true,
						success: function(data) {
							callback(data)
							//callback(JSON.parse(data))
						}
					});
				}
			},
			mounted() {
				var self = this;
				this.getNews(function(data) {
					self.news = data.news_list;
				});
			}
	}
</script>
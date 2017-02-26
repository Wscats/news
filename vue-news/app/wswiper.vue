<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide"><img src="../public/images/wscats.jpg" /></div>
			<div class="swiper-slide"><img src="../public/images/wscats.jpg" /></div>
			<div class="swiper-slide"><img src="../public/images/wscats.jpg" /></div>
		</div>
		<!-- Add Pagination -->
		<div class="swiper-pagination"></div>
	</div>
</template>
<script>
	//import 'swiper';
	require("swiper")
	//import '../node_modules/swiper/dist/css/swiper.css'
	require("../node_modules/swiper/dist/css/swiper.css")
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true
			});
		}
	}
</script>
<style>
	.swiper-container {
		width: 100%;
		height: 100%;
	}
	
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	
	.swiper-slide img {
		width: 100%;
		height: 200px;
	}
</style>
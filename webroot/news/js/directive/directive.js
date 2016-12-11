;
(function() {
	//组件组件
	var app = angular.module('news.directive', [])
	app.directive('newsList', [function() {
		return {
			templateUrl: 'directive/newsList.html'
		}
	}])
	app.directive('searchBar', [function() {
		return {
			templateUrl: 'directive/searchBar.html'
		}
	}])
	app.directive('swiper', [function() {
		return {
			templateUrl: 'directive/swiper.html',
			link: function(scope, ele, attr) {
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					paginationClickable: true
				});
			}
		}
	}])
})()
<template>
	<div>
		<div id="header-news" class="header-news">
			<div class="news-title">
				<img src="./header-news-title.png" alt="酒督惠头条" width="72.5">
			</div>
			<div class="news-text">
				<!-- <span v-for="item in newsList">{{item.title}}</span> -->
				<mt-swipe :auto="3000" :showIndicators="showIndicators">
					<mt-swipe-item v-for="(item,index) in newsList" :key="index">
						<span @click="showDetail(item.id)">{{item.title}}</span>
					</mt-swipe-item>
				</mt-swipe>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HeaderNews",
	data() {
		return {
			auto:0,
			showIndicators: false,
			newsList: []
		};
	},
	methods:{
		showDetail(newsId){
			window.homepage.newsClick(newsId)
		}
	},
	mounted() {
		/* 首页公告 */
		this.$http.post("/app/new/newsList").then(response => {
			response = response.body;
			this.newsList = response.data;
		});
	}
};
</script>

<style lang="stylus" scoped>
.header-news
	display flex
	align-items center
	justify-content start
	margin-top 23.5px
	.news-text
		display block
		flex 1
		height 15px
		line-height 15px
		white-space nowrap
		overflow hidden
		text-overflow ellipsis
		margin-left 10px
		font-size 1.2rem
		span{
			display block
		}
</style>


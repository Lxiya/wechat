<template>
	<div>
		<div class="banner-main">
			<div class="banner-main-title">
				<img src="./banner-main-title.png" alt="主流酒水特惠" width="187">
			</div>
			<div id="goods-list" class="goods-list">
				<jdh-goods-list :goodsList="goodsList"></jdh-goods-list>
			</div>
		</div>
	</div>
</template>

<script>
/* import components*/
import GoodsList from "components/common/goods/GoodsList";

export default {
	name: "BannerMain",
	data() {
		return {
			goodsList: {},
			/* 用户Id */
			userId:''
		};
	},
	components: {
		"jdh-goods-list": GoodsList
	},
	mounted() {
		/* 判定是否登陆,尝试获取userId */
		let userId = window.location.search.substr(1).split('=')[1]
		userId?(this.userId = userId):(this.userId='')
		/* 主流酒水推荐 */
		this.$http.post("/app/new/wineCheap",{userId:this.userId},{ emulateJSON: true }).then(response => {
			response = response.body;
			this.goodsList = response.data;
		});
	}
};
</script>

<style lang="stylus" scoped>
.banner-main
	min-height 412.5px
	padding-top 11.5px
	padding-right 10px
	padding-left 9px
	background url('banner-main-bg.png') no-repeat
	background-size 100% 412.5px
	.banner-main-title
		img
			display block
			margin 0 auto
</style>



<template>
	<div>
		<div id="banner" class="banner">
			<div id="banner-main">
				<jdh-banner-main></jdh-banner-main>
			</div>
			<div id="banner-goods-item">
				<div id="store" class="store">
					<jdh-banner-goods-item :goodsList="store"></jdh-banner-goods-item>
				</div>
				<div id="hotel" class="hotel">
					<jdh-banner-goods-item :goodsList="hotel"></jdh-banner-goods-item>
				</div>
				<div id="wedding" class="wedding">
					<jdh-banner-goods-item :goodsList="wedding"></jdh-banner-goods-item>
				</div>
			</div>
			<div id="banner-adds" class="banner-adds">
				<jdh-banner-adds></jdh-banner-adds>
			</div>
			<div id="hot-sell" class="hot-sell">
				<jdh-banner-goods-item :goodsList="hotSell"></jdh-banner-goods-item>
			</div>
		</div>
	</div>
</template>

<script>
/* import components*/
import BannerGoodsItem from "./child/banner-goods-item/BannerGoodsItem";
import BannerMain from "./child/banner-main/BannerMain";
import Adds from "components/common/adds/Adds";

export default {
	name: "Banner",
	data() {
		return {
			/* 商品列表 */
			store: {},
			hotel: {},
			wedding: {},
			hotSell: {},
			/* 用户Id */
			userId: ""
		};
	},
	components: {
		"jdh-banner-goods-item": BannerGoodsItem,
		"jdh-banner-main": BannerMain,
		"jdh-banner-adds": Adds
	},
	mounted() {
		/* 尝试获取userId */
		let userId = window.location.search.substr(1).split("=")[1];
		userId ? (this.userId = userId) : (this.userId = "");
		/* 实体门店 */
		this.$http
			.post(
				"/app/new/entityStore",
				{ userId: this.userId },
				{ emulateJSON: true }
			)
			.then(response => {
				response = response.body;
				this.store = response.data;
			});
		/* 酒店用酒 */
		this.$http
			.post(
				"/app/new/hotelWine",
				{ userId: this.userId },
				{ emulateJSON: true }
			)
			.then(response => {
				response = response.body;
				this.hotel = response.data;
			});
		/* 喜宴用酒 */
		this.$http
			.post("/app/new/likeWine", { userId: this.userId }, { emulateJSON: true })
			.then(response => {
				response = response.body;
				this.wedding = response.data;
			});
		/* 热卖推荐 */
		this.$http
			.post(
				"/app/new/recommend",
				{ userId: this.userId },
				{ emulateJSON: true }
			)
			.then(response => {
				response = response.body;
				this.hotSell = response.data;
			});
	}
};
</script>

<style lang="stylus">
#hot-sell
	h1.item-name
		margin-bottom 0
		width 13rem
	.goods-list-row:first-child
		border-top 1px #f8f8f8 solid
	.row-item
		padding-top 18px
		padding-bottom 15px
		img
			height 134px
			&+div
				padding-right 13px
				margin-top 19px
				& h1, span.item-price
					font-size 1.4rem
				& span.item-price
					display inline-block
					margin-top 9px
</style>


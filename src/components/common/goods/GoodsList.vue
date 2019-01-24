<template>
	<div class="goods-list-content" :class="{garyborder:borderColor}">
		<div
			class="goods-list-row"
			v-for="(goodsItem,index) in goodsList.goodsList"
			:class="{'no-border-bootm':(index > 2)}"
		>
			<div class="row-item" @click="showGoodsDetail(goodsItem.infoIds)">
				<img alt="商品图片" v-lazy="goodsItem.imageUrl">
				<div>
					<h1 class="item-name">
						<span class="self-icon" v-show="goodsItem.selfSupport">自营</span>
						{{goodsItem.name}}
					</h1>
					<span class="item-price" v-if="goodsItem.price==null ||goodsItem.price==''">价格暂不可见</span>
					<span
						style="margin-left:-2px"
						class="item-price"
						v-else
					>￥{{goodsItem.price}}/{{goodsItem.unit}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "GoodsList",
	props: {
		goodsList: [Object, Array],
		borderColor: Boolean
	},
	methods: {
		showGoodsDetail(wholesaleId) {
			window.homepage.productDetail(wholesaleId);
		}
	}
};
</script>

<style lang="stylus" scoped>
.goods-list-content
	display flex
	justify-content space-between
	flex-wrap wrap
	min-height 323px
	background-color #fff
	border-radius 4px
	.goods-list-row
		border-bottom 2px #dc1537 solid
		border-right 2px #dc1537 solid
		flex-grow 1
		flex-shrink 1
		&.no-border-bootm
			border-bottom 0 none
	& .goods-list-row:nth-child(3n)
		border-right 0 none
	.row-item
		padding-top 12px
		padding-bottom 12px
		h1.item-name
			span.self-icon
				display inline-block
				padding 1px 3px
				margin-right 2px
				background-color #143be7
				color #ffff
				border-radius 5px
		img
			display block
			margin 0 auto
			max-width 100%
			height 93px
			& + div
				margin-top 11px
				padding-left 7px
	&.garyborder .goods-list-row
		border-right 1px #f8f8f8 solid
	&.garyborder .goods-list-row
		border-bottom 1px #f8f8f8 solid
		@media screen and (min-width 390px){
			.row-item{
				img{
					height 100px
				}
			}
		}
</style>


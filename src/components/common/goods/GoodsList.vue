<template>
  <div class="goods-list-content" :class="{garyborder:borderColor}">
    <div class="goods-list-row" v-for="goodsItem in goodsList">
      <div class="row-item" v-for="goods in goodsItem.goodsMap">
        <img :src="goods.goodsImg" alt="商品图片">
        <div>
          <h1 class="item-name">{{goods.goodsName}}</h1>
          <span class="item-price">{{goods.goodsPrice}}</span>
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
  }
};
</script>

<style lang="stylus" scoped>
.goods-list-content
  display flex
  flex-direction column
  justify-content space-around
  min-height 323px
  background-color #fff
  border-radius 4px
  & .goods-list-row:last-child
    border-bottom 0 none
  .goods-list-row
    display flex
    justify-content space-between
    // height 161.5px
    border-bottom 2px #dc1537 solid
    & .row-item:last-child
      border-right 0 none
    .row-item
      flex 1
      // padding 12px 0 15px 7px
      padding-top 12px
      padding-bottom 12px
      border-right 2px #dc1537 solid
      img
        display block
        margin 0 auto
        max-width 100%
        height 93px
        & + div
          margin-top 11px
          padding-left 7px
  &.garyborder .row-item
    border-right 1px #f8f8f8 solid
  &.garyborder .goods-list-row
    border-bottom 1px #f8f8f8 solid
</style>


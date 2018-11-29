<template>
  <div class="goods-list-content">
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
    goodsList: [Object, Array]
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
    height 161.5px
    border-bottom 2px #dc1537 solid
    & .row-item:last-child
      border-right 0 none
    .row-item
      flex 1
      padding 12px 0 15px 7px
      border-right 2px #dc1537 solid
      img
        display inline-block
        height 93px
        max-width 100%
        & + div
          padding-top 11px
</style>


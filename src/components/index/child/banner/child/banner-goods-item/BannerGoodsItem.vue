<template>
  <div>
    <div class="banner-goods-item">
      <div class="goods-item-title">
        	<img :src="'https://www.jdh19.com/' + goodsList.title" alt="实体店用酒" slot="itemTitleImg">
      </div>
      <div class="goods-item-bg">
        	<img v-if="goodsList.banner!=undefined" :src="'https://www.jdh19.com/' + goodsList.banner.imageUrl" alt="实体店用酒" slot="itemBg">
      </div>
      <div class="goods-list">
        <jdh-goods-list :goodsList="goodsList" :borderColor="garyborder"></jdh-goods-list>
      </div>
    </div>
  </div>
</template>

<script>
/* import components*/
import GoodsList from "components/common/goods/GoodsList";

export default {
  props: {
    goodsList: [Array, Object]
  },
  name: "BannerGoodsItem",
  components: {
    "jdh-goods-list": GoodsList
  },
  data() {
    return {
      garyborder: true
    };
  }
};
</script>
<style lang="stylus" scoped>
.banner-goods-item
  margin-top 12.5px
  padding-top 22px
  background-color #fff
  .goods-item-title img
    display block
    width 156px
    margin 0 auto
  .goods-item-bg
    margin-top 18.5px
    img
      display block
      max-width 100%
</style>


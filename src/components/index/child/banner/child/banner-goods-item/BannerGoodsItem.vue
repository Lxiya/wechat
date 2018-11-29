<template>
  <div>
    <div class="banner-goods-item" v-for="item in imgItems">
      <div class="goods-item-title">
        <img :src="item.title" alt="酒水推荐">
      </div>
      <div class="goods-item-bg">
        <img :src="item.bgImg" alt="酒水推荐">
      </div>
      <div class="goods-list">
        <jdh-goods-list></jdh-goods-list>
      </div>
    </div>
  </div>
</template>

<script>
/* import components*/
import GoodsList from "components/common/goods/GoodsList";

export default {
  name: "BannerGoodsItem",
  components: {
    "jdh-goods-list": GoodsList
  },
  data() {
    return {
      imgItems: [
        {
          title: "/static/img/index/banner/shiti_title.png",
          bgImg: "/static/img/index/banner/shiti_bg.png",
          type:''
        },
        {
          title: "/static/img/index/banner/jiudian_title.png",
          bgImg: "/static/img/index/banner/jiudian_bg.png",
          type:''
        },
        {
          title: "/static/img/index/banner/xiyan_title.png",
          bgImg: "/static/img/index/banner/xiyan_bg.png",
          type:''
        }
      ]
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


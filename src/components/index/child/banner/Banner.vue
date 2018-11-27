<template>
  <div>
    <div id="banner" class="banner">
      <div id="banner-main" class="banner-main">
        <jdh-banner-main></jdh-banner-main>
      </div>
      <div id="banner-goods">
        <jdh-banner-goods-item></jdh-banner-goods-item>
      </div>
    </div>
  </div>
</template>

<script>
/* import components*/
import BannerGoodsItem from "./child/banner-goods-item/BannerGoodsItem";
import BannerMain from "./child/banner-main/BannerMain";

export default {
  name: "Banner",
  components: {
    "jdh-banner-goods-item": BannerGoodsItem,
    "jdh-banner-main": BannerMain
  }
};
</script>

<style lang="stylus" scoped>
.banner{
	min-height 187px
	background-image url('./banner-main-bg.png') no-repeat
	background-size 100% 100%
}
</style>


<template>
  <div>
    <div id="banner" class="banner">
        <div id="banner-main">
          <jdh-banner-main></jdh-banner-main>
        </div>
        <div id="banner-goods-item">
          <div id="store" class="store">
            
          </div>
          <div id="hotel" class="hotel"></div>
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

</style>


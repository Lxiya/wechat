<template>
  <div>
    <div id="banner-main" class="banner-main"></div>
    <div id="banner-goods">
      <jdh-banner-goods-item></jdh-banner-goods-item>
    </div>
  </div>
</template>

<script>
/* import components*/
import BannerGoodsItem from "./child/banner-goods-item/BannerGoodsItem";

export default {
  name: "Banner",
  components: {
    "jdh-banner-goods-item": BannerGoodsItem
  }
};
</script>

<style>
</style>

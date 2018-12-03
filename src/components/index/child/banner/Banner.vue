<template>
  <div>
    <div id="banner" class="banner">
      <div id="banner-main">
        <jdh-banner-main></jdh-banner-main>
      </div>
      <div id="banner-goods-item">
        <div id="store" class="store">
          <jdh-banner-goods-item :goodsList="store">
            <img src="/static/img/index/banner/shiti_title.png" alt="实体店用酒" slot="itemTitleImg">
            <img src="/static/img/index/banner/shiti_bg.png" alt="实体店用酒" slot="itemBg">
          </jdh-banner-goods-item>
        </div>
        <div id="hotel" class="hotel">
          <jdh-banner-goods-item :goodsList="hotel">
            <img src="/static/img/index/banner/jiudian_title.png" alt="酒店用酒" slot="itemTitleImg">
            <img src="/static/img/index/banner/jiudian_bg.png" alt="酒店用酒" slot="itemBg">
          </jdh-banner-goods-item>
        </div>
        <div id="wedding" class="wedding">
          <jdh-banner-goods-item :goodsList="wedding">
            <img src="/static/img/index/banner/xiyan_title.png" alt="喜宴用酒" slot="itemTitleImg">
            <img src="/static/img/index/banner/xiyan_bg.png" alt="喜宴用酒" slot="itemBg">
          </jdh-banner-goods-item>
        </div>
      </div>
      <div id="banner-adds" class="banner-adds">
        <jdh-banner-adds></jdh-banner-adds>
      </div>
      <div id="hot-sell" class="hot-sell">
        <jdh-banner-goods-item :goodsList="hotsell">
          <img src="/static//img/index/banner/hot-sell_title.png" alt="热卖推荐" slot="itemTitleImg">
        </jdh-banner-goods-item>
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
      store: {},
      hotel: {},
      wedding: {},
      hotsell: {}
    };
  },
  components: {
    "jdh-banner-goods-item": BannerGoodsItem,
    "jdh-banner-main": BannerMain,
    "jdh-banner-adds": Adds
  },
  mounted() {
    this.$http.get("/static/json/goodsData.json").then(response => {
      response = response.body;
      this.store = response.data.store;
      this.hotel = response.data.hotel;
      this.wedding = response.data.wedding;
      this.hotsell = response.data.hotsell;
    });
  }
};
</script>

<style lang="stylus">
#hot-sell
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
          font-size 14px
        & span.item-price
          display inline-block
          margin-top 11px
</style>


<template>
  <div>
    <div id="banner" class="banner">
      <div id="banner-main">
        <jdh-banner-main></jdh-banner-main>
      </div>
      <div id="banner-goods-item">
        <div id="store" class="store">
          <jdh-banner-goods-item :goodsList="store">
            <img src="/static/img/index/banner/shiti_title.png" alt="" slot="itemTitleImg">
            <img src="/static/img/index/banner/shiti_bg.png" alt="" slot="itemBg">
          </jdh-banner-goods-item>
        </div>
        <div id="hotel" class="hotel">
          <jdh-banner-goods-item :goodsList="hotel">
            <img src="/static/img/index/banner/jiudian_title.png" alt="" slot="itemTitleImg">
            <img src="/static/img/index/banner/jiudian_bg.png" alt="" slot="itemBg">
          </jdh-banner-goods-item>
        </div>
        <div id="wedding" class="wedding">
          <jdh-banner-goods-item :goodsList="wedding">
            <img src="/static/img/index/banner/xiyan_title.png" alt="" slot="itemTitleImg">
            <img src="/static/img/index/banner/xiyan_bg.png" alt="" slot="itemBg">
          </jdh-banner-goods-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import components*/
import BannerGoodsItem from './child/banner-goods-item/BannerGoodsItem'
import BannerMain from './child/banner-main/BannerMain'

export default {
	name: 'Banner',
	data() {
		return {
			store: {},
			hotel: {},
			wedding: {}
		}
	},
	components: {
		'jdh-banner-goods-item': BannerGoodsItem,
		'jdh-banner-main': BannerMain
	},
	mounted() {
		this.$http.get('/static/json/goodsData.json').then(response => {
			response = response.body
			this.store = response.data.store
			this.hotel = response.data.hotel
			this.wedding = response.data.wedding
		})
	}
}
</script>

<style lang="stylus" scoped>
</style>


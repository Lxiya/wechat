<template>
  <div class="adds">
    <div class="adds-list">
      <mt-swipe :auto="auto" :show-indicators="showIndicators">
        <mt-swipe-item>
          <img :src="addsImgList.imageUrl" @click="showDetail(addsImgList.type,addsImgList.infoId)">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Adds",
  data() {
    return {
      auto: 2000,
      showIndicators: false,
      addsImgList: ''
    };
  },
  mounted() {
    /* 首页广告位 */
    this.$http.post("/app/new/wineBanner").then(response => {
      response = response.body;
      this.addsImgList = response.data.banner
    });
  },
  methods:{
    showDetail(type, id) {
			switch (type) {
				case '2':
					window.homepage.productDetail(id);
					break;
				case '3':
					window.homepage.shopInfoClick(id);
					break;
        default:
          alert('没有匹配到相应的参数')
			}
		}
  }
};
</script>

<style lang="stylus" scoped>
.adds
  widows 100%
  padding 0 8px
  margin 17px 0
  .adds-list
    height 93px
    img
      display block
      max-width 100%
      height auto
</style>



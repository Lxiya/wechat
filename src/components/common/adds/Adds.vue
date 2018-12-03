<template>
  <div class="adds">
    <div class="adds-list">
      <mt-swipe :auto="auto" :show-indicators="showIndicators">
        <mt-swipe-item v-for="(item,index) in addsImgList" :key="index">
          <img :src="item">
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
      addsImgList: []
    };
  },
  mounted() {
    this.$http.get("/static/json/addsimg.json").then(response => {
      response = response.body;
      this.addsImgList = response.data.addImgs;
    });
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



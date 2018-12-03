<template>
  <div id="footer" class="footer">
    <footer>
      <mt-tabbar v-model="selected" :fixed="fixed">
        <mt-tab-item id="首页">
          <router-link to="/index"><img :src="selected=='首页'?'/static/img/index/footer/home-active.png':'/static/img/index/footer/home.png'" alt="首页">首页</router-link>
        </mt-tab-item>
        <mt-tab-item id="分类">
          <router-link to="/sort"><img :src="selected=='分类'?'/static/img/index/footer/sort-active.png':'/static/img/index/footer/sort.png'" alt="分类" width="25">分类</router-link>
        </mt-tab-item>
        <mt-tab-item id="消息">
          <router-link to="/message"><img :src="selected=='消息'?'/static/img/index/footer/message-active.png':'/static/img/index/footer/message.png'" alt="消息" width="25">消息</router-link>
        </mt-tab-item>
        <mt-tab-item id="购物车">
          <router-link to="/shopcart"><img :src="selected=='购物车'?'/static/img/index/footer/shop-cart-active.png':'static/img/index/footer/shop-cart.png'" alt="购物车" width="25">购物车</router-link>
        </mt-tab-item>
        <mt-tab-item id="个人">
          <router-link to="/person"><img :src="selected=='个人'?'/static/img/index/footer/person-active.png':'static/img/index/footer/person.png'" alt="个人">个人</router-link>
        </mt-tab-item>
      </mt-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      selected: "首页",
      fixed: true
    };
  }
};
</script>

<style lang="stylus" scoped>
img{
  display block
  height 22px
  margin 0 auto
  margin-bottom 5px
}
a{
  display inline-block
}
.mint-tab-item {
  padding-bottom 4.5px
}
</style>




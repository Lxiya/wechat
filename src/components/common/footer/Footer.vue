<template>
  <div id="footer" class="footer">
    <footer>
      <mt-tabbar v-model="selected" :fixed="fixed">
        <mt-tab-item id="首页">
          <router-link to="/index"><img src="/static/img/index/footer/home.png" alt="首页">首页</router-link>
        </mt-tab-item>
        <mt-tab-item id="分类">
          <router-link to="/sort"><img src="/static/img/index/footer/sort.png" alt="分类">分类</router-link>
        </mt-tab-item>
        <mt-tab-item id="消息">
          <router-link to="/message"><img src="/static/img/index/footer/message.png" alt="消息">消息</router-link>
        </mt-tab-item>
        <mt-tab-item id="购物车">
          <router-link to="/shopcart"><img src="/static/img/index/footer/shop-cart.png" alt="购物车">购物车</router-link>
        </mt-tab-item>
        <mt-tab-item id="个人">
          <router-link to="/person"><img src="/static/img/index/footer/person.png" alt="个人">个人</router-link>
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
  width 22px
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




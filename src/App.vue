<template>
  <div id="app">
    <!-- 页面切换路由 -->
    <section>
      <router-view></router-view>
    </section>

    <!-- 底部导航 -->
    <jdh-footer></jdh-footer>
  </div>
</template>

<script>
/* import components */
import Footer from './components/common/footer/Footer'

export default {
	name: 'App',
	components: {
		'jdh-footer': Footer
	}
}
</script>

<style lang="stylus">
*
  box-sizing border-box
body
  background-color #f5f5f5
  min-height 100%
  overflow-y scroll
ul, ol
  list-style none
  margin 0
  padding 0
</style>


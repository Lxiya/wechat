<template>
  <div>
    <div id="header-nav" class="header-nav">
      <div class="nav-icon">
        <ul class="icon-list">
          <li>
            <i class="icon-blue"></i>
            <span>白酒</span>
          </li>
          <li>
            <i class="icon-red"></i>
            <span>红酒</span>
          </li>
          <li>
            <i class="icon-green"></i>
            <span>洋酒</span>
          </li>
          <li>
            <i class="icon-yellow"></i>
            <span>黄保啤</span>
          </li>
          <li>
            <i class="icon-orange"></i>
            <span>散酒</span>
          </li>
        </ul>
      </div>

			<div class="nav-news">
				<jds-header-nav-news></jds-header-nav-news>
			</div>
    </div>
  </div>
</template>

<script>
/* import components*/
import HeaderNews from '../header-news/HeaderNews'

export default {
  name: "HeaderNav",
	components:{
		'jds-header-nav-news':HeaderNews
	}
};
</script>

<style lang="stylus" scoped>
bg-img($color)
  background-image url('header-nav-icon-' + $color + '.png')
.header-nav
  position absolute
  left 0
  right 0
  bottom -122px
  background-color #fff
  padding-top 22.5px
  padding-bottom 20.5px
  padding-left 18.5px
  padding-right 18.5px
  border-radius 10px
  .nav-icon
    .icon-list
      display flex
      justify-content space-between
    li
      display flex
      flex-direction column
      i
        display inline-block
        width 44px
        height 44px
        background-size 44px 44px
        margin-bottom 7px
        &.icon-blue
          bg-img('blue')
        &.icon-red
          bg-img('red')
        &.icon-green
          bg-img('green')
        &.icon-yellow
          bg-img('yellow')
        &.icon-orange
          bg-img('orange')
      span
        text-align center
        font-size 1.25rem
</style>


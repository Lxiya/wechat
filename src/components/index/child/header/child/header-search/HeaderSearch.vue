<template>
  <div>
    <div id="header-search" class="header-search">
      <div class="position">
        <span class="position-icon">
          <a>
            <img src="./position-icon.png" alt="定位" width="16.5" height="21" class="icon">
          </a>
          <i>济南市</i>
        </span>
      </div>
      <div class="search">
        <span class="search-icon">
          <img src="./search-icon.png" alt width="14">
        </span>
        <span class="input-search">
          <input class="input-blank" type="text">
        </span>
      </div>
      <div class="contact">
        <span>
          <a href>
            <img src="./contact-icon.png" alt width="21">
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name:'HeaderSearch'
}
</script>

<style lang="stylus" scoped>
.header-search
  display flex
  align-items center
  justify-content space-between
  color #fff
  .position
    .position-icon
      .icon
        display inline-block
        vertical-align text-bottom
    i
      font-style normal
      font-size 1.6rem
  .search
    position relative
    .search-icon
      position absolute
      top 7px
      left 12px
    .input-blank
      width 233px
      height 28.5px
      line-height 28.5px
      border 0 none
      outline 0 none
      background-color rgba(255, 255, 255, 0.3)
      border-radius 20px
      padding-left 28px
  .contact
    img
      vertical-align top
</style>




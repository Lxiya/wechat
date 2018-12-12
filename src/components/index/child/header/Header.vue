<template>
  <div style="width:100%;min-height:399px;margin-bottom:15px">
    <div id="header" class="header">
    <header>
      <jdh-header-search></jdh-header-search>
      <jdh-header-nav></jdh-header-nav>
    </header>
  </div>
  </div>
</template>

<script>
/* import components*/
import HeaderSearch from "./child/header-search/HeaderSearch";
import HeaderNav from "./child/header-nav/HeaderNav";

export default {
  name: "Header",
  components: {
    "jdh-header-search": HeaderSearch,
    "jdh-header-nav": HeaderNav
  }
};
</script>

<style lang="stylus" scoped>
header
  position relative
  width 100%
  min-height 277px
  background url('header-bg.png') no-repeat
  background-size 100% 100%
  padding-top 12px
  padding-left 13px
  padding-right 15px
</style>


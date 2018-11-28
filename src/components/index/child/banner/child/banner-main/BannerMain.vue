<template>
  <div>
    <div id="banner-main" class="banner-main">
      <div class="banner-main-title">
        <img src="./banner-main-title.png" alt="主流酒水特惠" width="187">
      </div>
      <div class="banner-main-content">
        <div class="banner-main-row">
          <div class="row-item">
            <img src="./test-img2.png" alt="">
            <div>
              <h1 class="item-name">52度五粮液（普通...</h1>
              <span class="item-price">￥998.00/箱</span>
            </div>
          </div>
          <div class="row-item">
            <img src="./test-img.png" alt="">
             <div>
              <h1 class="item-name">法国拉菲传奇波尔...</h1>
              <span class="item-price">￥998.00/箱</span>
            </div>
          </div>
          <div class="row-item">
            <img src="./test-img3.png" alt="">
            <div>
              <h1 class="item-name">澳洲原瓶进口登机...</h1>
              <span class="item-price">￥998.00/箱</span>
            </div>
          </div>
        </div>
        <div class="banner-main-row">
           <!-- <div class="row-item">
            <img src="./test-img2.png" alt="">
          </div>
          <div class="row-item">
            <img src="./test-img.png" alt="">
          </div>
          <div class="row-item">
            <img src="./test-img3.png" alt="">
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerMain"
};
</script>

<style lang="stylus" scoped>
.banner-main{
  min-height 412.5px
  padding-top 11.5px
  padding-right 10px
  padding-left 9px
  background url('banner-main-bg.png') no-repeat
  background-size 100% 412.5px
  .banner-main-title{
    img{
      display block
      margin 0 auto
    }
  }
  .banner-main-content{
    display flex
    flex-direction column
    justify-content space-around
    min-height 323px
    background-color #fff
    border-radius 10px
    & .banner-main-row:last-child{
      border-bottom 0 none
    }
    .banner-main-row{
      display flex
      justify-content space-between
      min-height 161.5px
      border-bottom 2px #dc1537 solid
      & .row-item:last-child{
        border-right 0 none
      }
      .row-item{
        flex 1
        padding 16px 0 15px 4.5px
        border-right  2px #dc1537 solid
        img{
          display block
          max-width 100%
          height 93px
          & + div{
            margin-top 4px
          }
        }
      }
    }
  }
}
</style>



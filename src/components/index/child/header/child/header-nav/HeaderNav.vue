<template>
	<div>
		<div id="header-nav" class="header-nav">
			<div class="nav-icon">
				<ul class="icon-list">
					<li v-for="item in iconList" @click="showDetail(item.parameter)">
						<i><img :src="item.iconUrl" alt=""></i>
						<span>{{item.iconName}}</span>
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
import HeaderNews from "../header-news/HeaderNews";

export default {
	name: "HeaderNav",
	components: {
		"jds-header-nav-news": HeaderNews
	},
	data() {
		return{
      iconList:[]
    }
	},
	methods:{
		showDetail(parameter){
			// alert(parameter)
			window.homepage.fiveMenusClick(parameter)
		}
	},
	mounted() {
    let _this = this
		this.$http.post("/app/new/getHeadClass").then(response => {
      let iconList = response.data.data.fenlei
      for(var i = 0; i<=4; i++){
        _this.iconList.push({
					'parameter':iconList[i].parameter,
          'iconUrl':iconList[i].url,
          'iconName':iconList[i].name
        })
      }
		});
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
        img{
          display block
          width 100%
          height 100%
        }
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


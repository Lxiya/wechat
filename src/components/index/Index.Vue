<template>
	<div>
		<jdh-header></jdh-header>
		<jdh-banner></jdh-banner>
		<div id="footer-split" class="footer-split">
			<img
				src="/static/img/index/footer/footer-split.png"
				width="201"
				style="display:block; margin:0 auto;"
			>
		</div>
	</div>
</template>

<script>
/* import dependences*/
import "normalize.css";

/* import components */
import Header from "./child/header/Header";
import Banner from "./child/banner/Banner";

export default {
	name: "Index",
	components: {
		"jdh-header": Header,
		"jdh-banner": Banner
	}
};
</script>

<style lang="stylus">
.footer-split
	padding 23px 0
</style>


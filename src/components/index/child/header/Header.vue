<template>
	<div style="width:100%;min-height:399px;margin-bottom:15px">
		<div id="header" class="header">
			<header>
				<jdh-header-search @alertPosition="alertPosition" :currentPosition="currentPosition"></jdh-header-search>
				<jdh-header-nav></jdh-header-nav>
				<jdh-header-position v-show="showPosition" @closePosition="closePosition"></jdh-header-position>
			</header>
		</div>
	</div>
</template>

<script>
/* import components*/
import HeaderSearch from "./child/header-search/HeaderSearch";
import HeaderNav from "./child/header-nav/HeaderNav";
import SelectPosition from "components/index/child/header/child/header-position/HeaderPosition";

export default {
	name: "Header",
	components: {
		"jdh-header-search": HeaderSearch,
		"jdh-header-nav": HeaderNav,
		"jdh-header-position": SelectPosition
	},
	data() {
		return {
			showPosition: false,
			currentPosition: {
				areaId: "",
				areaName: ""
			}
		};
	},
	methods: {
		alertPosition() {
			this.showPosition = true;
		},
		closePosition(areaId, areaName) {
			if (areaId != undefined && areaName != undefined) {
				this.currentPosition.areaId = areaId;
				this.currentPosition.areaName = areaName;
			}
			window.homepage.getLocationFromjs(this.currentPosition.areaName,this.currentPosition.areaId)
			this.showPosition = false;
		},
		/*向 webview 暴露的方法 */
		getCurrentPosition(locationName, locationCode) {
			this.currentPosition.areaId = locationCode;
			this.currentPosition.areaName = locationName;
		}
	},
	mounted() {
		window.localwithjs = this.getCurrentPosition;
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


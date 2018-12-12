<template>
	<div>
		<mt-header title="选择您所在的位置" :fixed="fixed">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<div class="position-list">
			<div class="list-item province">
				<span class="province-item" v-for="item in provinceList">
					<a @click="postCity(item.id)">{{item.name}}</a>
				</span>
			</div>
			<div class="list-item city" v-show="selectedProvince">
				<span class="province-item" v-for="item in cityList">
					<a @click="postArea(item.id)">{{item.name}}</a>
				</span>
			</div>
			<div class="list-item area" v-show="selectedArea">
				<span class="province-item" v-for="item in areaList">
					<a>{{item.name}}</a>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HeaderPostion",
	data() {
		return {
			/* 固定顶部 */
			fixed: true,
			/* 控制显示 */
			selectedProvince: false,
			selectedCity: false,
			selectedArea: false,
			/* 控制列表 */
			provinceList: [],
			cityList: [],
			areaList: []
		};
	},
	mounted() {
		/* 请求省 */
		this.$http.post("/app/new/secacheSheng").then(reponse => {
			reponse = reponse.body;
			this.provinceList = reponse.data;
		});
	},
	methods: {
		/* 请求市 */
		postCity(provinceId) {
			this.$http
				.post(
					"/app/new/secacheCitys",
					{ parentId: provinceId },
					{ emulateJSON: true }
				)
				.then(reponse => {
					reponse = reponse.body;
					this.cityList = reponse.data;
					this.selectedProvince = true;
				});
		},
		/* 请求区 */
		postArea(cityId) {
			this.$http
				.post(
					"/app/new/secacheCitys",
					{ parentId: cityId },
					{ emulateJSON: true }
				)
				.then(reponse => {
					reponse = reponse.body;
					this.areaList = reponse.data;
					this.selectedArea = true;
				});
		}
	}
};
</script>

<style <style lang="stylus" scoped>
.mint-header
	background-color #143be7
	a
		color #fff
div.position-list
	display flex
	justify-content flex-start
	overflow hidden
	padding-top 40px
	width 100%
	height 100vh
	background-color #f3f3f3
	div.list-item
		height 100%
		display flex
		overflow-y scroll
		flex-direction column
		span
			background-color #fff
			// border-bottom #ccc solid 1px
			a
				padding 1.5rem
				display block
				&:active
					background-color #143be7
					color #fff
				&.active
					background-color #143be7
					color #fff
		& span:last-child
			border-bottom 0 none
</style>


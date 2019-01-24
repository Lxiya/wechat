<template>
	<div>
		<div class="header-position">
			<mt-header title="选择您所在的位置" :fixed="fixed">
				<router-link to="/" slot="left">
					<mt-button icon="back" @click="$emit('closePosition')">返回</mt-button>
				</router-link>
			</mt-header>
			<div class="position-list">
				<div class="list-item province">
					<span class="province-item" v-for="item in provinceList">
						<a
							@click="postCity(item.id,item.name)"
							:class="{active:activeProvince==item.name}"
						>{{item.name}}</a>
					</span>
				</div>
				<div class="list-item city" v-show="selectedProvince">
					<span class="province-item" v-for="item in cityList">
						<a
							@click="postArea(item.id,item.name)"
							:class="{active:activeCity == item.name}"
						>{{item.name}}</a>
					</span>
				</div>
				<div class="list-item area" v-show="selectedArea">
					<span
						class="province-item"
						v-for="item in areaList"
						@click="$emit('closePosition',item.id,item.name)"
					>
						<a>{{item.name}}</a>
					</span>
				</div>
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
			areaList: [],
			/* 控制高亮 */
			activeProvince: "",
			activeCity: ""
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
		postCity(provinceId, name) {
			if (provinceId == 0) {
				this.$emit("closePosition", provinceId, name);
			} else {
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
						this.selectedArea = false;
					});
				this.activeProvince = name;
			}
		},
		/* 请求区 */
		postArea(cityId, name) {
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
			this.activeCity = name;
		}
	}
};
</script>

<style lang="stylus" scoped>
div.header-position
	position fixed
	left 0
	right 0
	z-index 3
	.mint-header
		background-color #143be7
		a
			color #fff
	div.position-list
		display flex
		justify-content flex-start
		overflow hidden
		width 100%
		height 100Vh
		background-color #f3f3f3
		margin-top -1px
		div.list-item
			display flex
			height 100%
			overflow-y scroll
			flex-direction column
			padding-bottom 3rem
			span
				background-color #fff
				a
					display block
					font-size 1.4rem
					padding 1.5rem
					&:active
						// background-color #143be7
						color #ff4e00
					&.active
						color #ff4e00
</style>


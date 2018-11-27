<template>
	<div id="footer" class="footer">
		<footer>
			<mt-tabbar v-model="selected">
				<mt-tab-item id="首页">
					<router-link to="/index">首页</router-link>
				</mt-tab-item>
				<mt-tab-item id="分类">
					<router-link to="/sort">分类</router-link>
				</mt-tab-item>
				<mt-tab-item id="消息">
					<router-link to="/message">消息</router-link>
				</mt-tab-item>
				<mt-tab-item id="购物车">
					<router-link to="/shopcart">购物车</router-link>
				</mt-tab-item>
				<mt-tab-item id="个人">
					<router-link to="/person">个人</router-link>
				</mt-tab-item>
			</mt-tabbar>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			selected: '首页'
		}
	}
}
</script>

<style scoped>
</style>



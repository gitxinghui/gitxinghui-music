<template>
	<view class="pageIndex">
		<!-- 头部  -->
		<view class="flex justify-around align-center pageTop">
			<text class="cuIcon-sort sidebarBtn"></text>
			<view class="flex justify-around align-center navList">
				<view class="navTitle" :class="navCur == index ? 'activeColor':''" v-for="(item,index) in navListData" :key="item.id" :data-index="index" @tap="changeNav">{{item.title}}</view>
			</view>
			<text class="cuIcon-search searchBtn"></text>
		</view>
		<musicHall v-if="navCur == 0"></musicHall>
		<musicVideo v-if="navCur == 2"></musicVideo>
	</view>
</template>

<script>
	import musicHall from './musicHall/musicHall.vue';
	import musicVideo from './musicVideo/musicVideo.vue';
export default {
	data() {
		return {
			navCur: 1, // 首页内容切换下表
			navListData: [
				{
					id: 0,
					title: '音乐馆'
				},
				{
					id: 1,
					title: '原声带'
				},
				{
					id: 2,
					title: '视频'
				},
				{
					id: 3,
					title: '现场'
				}
			],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
		};
	},
	components: {
		musicHall,
		musicVideo
	},
	onLoad() {},
	methods: {
		/**
		 * @param {Object} e
		 * 切换nav
		 */
		changeNav(e) {
			if (this.navCur == e.currentTarget.dataset.index) return false;
			this.navCur = e.currentTarget.dataset.index;
		}
	}
};
</script>
<style lang="scss" scoped>
	@import "./index.scss";
</style>

<template>
	<view class="musicVideo">
		<!-- mv类型 -->
		<scroll-view class="navList" scroll-x="true" >
			<view class="flex justify-center align-center navTitle" :class="index == navCur ? 'active':''" v-for="(item,index) in navListData" :key="item.id" :data-index="index" @tap="changeNav">{{item.title}}</view>
		</scroll-view>
		<!-- mv列表 -->
		<view class="list">
			<mvVideo :mvData="item" v-for="(item,index) in videoListData" :key="item.id"></mvVideo>
		</view>
	</view>
</template>

<script>
	import mvVideo from '@/pages/components/mvVideo/mvVideo.vue';
	export default {
		name: "musicVideo",
		components: {
			mvVideo
		},
		data() {
			return {
				navCur: 0,
				navListData: [
					{
						id: 0,
						title: '推荐'
					},
					{
						id: 1,
						title: '精选'
					},
					{
						id: 2,
						title: '最新'
					},
					{
						id: 3,
						title: '热门'
					},
					{
						id: 4,
						title: '直播'
					},
				],
				videoListData: [
					{
						id: 0,
						title: '那片林，那条路',
						mp4: 'http://img.cdn.qiniu.dcloud.net.cn/wap2appvsnative.mp4',
						cover: 'https://ae01.alicdn.com/kf/Ha221b8c6e7e84cc6ab7112d6cc7a8f2a8.jpg',
						author: {
							name: '老毛',
							avatar: 'https://ae01.alicdn.com/kf/H338b30e3562f40d1a956c8b0ebbe5bf57.jpg'
						},
						love: 23,
						messageNum: 23
					},
					{
						id: 1,
						title: '那片林，那条路',
						mp4: 'http://img.cdn.qiniu.dcloud.net.cn/wap2appvsnative.mp4',
						cover: 'https://ae01.alicdn.com/kf/Ha221b8c6e7e84cc6ab7112d6cc7a8f2a8.jpg',
						author: {
							name: '老毛',
							avatar: 'https://ae01.alicdn.com/kf/H338b30e3562f40d1a956c8b0ebbe5bf57.jpg'
						},
						love: 23,
						messageNum: 23
					},
					{
						id: 2,
						title: '那片林，那条路',
						mp4: 'http://img.cdn.qiniu.dcloud.net.cn/wap2appvsnative.mp4',
						cover: 'https://ae01.alicdn.com/kf/Ha221b8c6e7e84cc6ab7112d6cc7a8f2a8.jpg',
						author: {
							name: '老毛',
							avatar: 'https://ae01.alicdn.com/kf/H338b30e3562f40d1a956c8b0ebbe5bf57.jpg'
						},
						love: 23,
						messageNum: 23
					},
					{
						id: 3,
						title: '那片林，那条路',
						mp4: 'http://img.cdn.qiniu.dcloud.net.cn/wap2appvsnative.mp4',
						cover: 'https://ae01.alicdn.com/kf/Ha221b8c6e7e84cc6ab7112d6cc7a8f2a8.jpg',
						author: {
							name: '老毛',
							avatar: 'https://ae01.alicdn.com/kf/H338b30e3562f40d1a956c8b0ebbe5bf57.jpg'
						},
						love: 23,
						messageNum: 23
					}
				]
			};
		},
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
	}
</script>

<style lang="scss" scoped>
@import "./musicVideo.scss";
</style>

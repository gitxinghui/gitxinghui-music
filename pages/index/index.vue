<template>
	<view class="pageIndex">
		<!-- 头部  -->
		<view class="flex justify-around align-center pageTop">
			<text class="cuIcon-sort sidebarBtn"></text>
			<view class="flex justify-around align-center navList">
				<view class="navTitle activeColor">音乐馆</view>
				<view class="navTitle">原声带</view>
				<view class="navTitle">视频</view>
				<view class="navTitle">现场</view>
			</view>
			<text class="cuIcon-search searchBtn"></text>
		</view>
		<!-- 轮播图 -->
		<view class="banner">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item>
								<image class="bannerImage" src="../../static/images/banner.png"></image>
							</swiper-item>
						</swiper>
						<!-- 指示点 -->
						<view class="point flex justify-end align-center">
							<view class="pointItem"></view>
							<view class="pointItem"></view>
							<view class="pointItem"></view>
							<view class="pointItem"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 功能区 -->
		<view class="flex justify-between align-center functionalArea">
			<view class="flex justify-center align-center functionalItem">
				<image class="functionIcon" src="../../static/images/icon/svg/icon22.svg" mode=""></image>
				<view class="iconText">每日推荐</view>
			</view>
			<view class="flex justify-between align-center functionalItem">
				<image class="functionIcon" src="../../static/images/icon/svg/icon23.svg" mode=""></image>
				<view class="iconText">歌单</view>
			</view>
			<view class="flex justify-between align-center functionalItem">
				<image class="functionIcon" src="../../static/images/icon/svg/icon24.svg" mode=""></image>
				<view class="iconText">排行榜</view>
			</view>
			<view class="flex justify-between align-center functionalItem">
				<image class="functionIcon" src="../../static/images/icon/svg/icon1.svg" mode=""></image>
				<view class="iconText">电台</view>
			</view>
			<view class="flex justify-between align-center functionalItem">
				<image class="functionIcon" src="../../static/images/icon/svg/icon2.svg" mode=""></image>
				<view class="iconText">直播</view>
			</view>
		</view>
		<!-- 推荐区域 -->
		<view class="recommend">
			<view class="sheetItem" v-for="(item,index) in sheetData" :key="index">
				<!--歌单 -->
				<recommend :sheetData="item"></recommend>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			// 歌单
			sheetData: [
				{
					title: '推荐歌单',
					sheets: [
						{
							id: 0,
							image: 'https://ae01.alicdn.com/kf/Hfcaab79d1b524aafaa1ab43b2e8e0fa3G.jpg',
							playVolume: '1000',
							des: '[话语速爆新歌]最新 话语音乐推荐'
						},
						{
							id: 2,
							image: 'https://ae01.alicdn.com/kf/Hfcaab79d1b524aafaa1ab43b2e8e0fa3G.jpg',
							playVolume: '1000',
							des: '[话语速爆新歌]最新 话语音乐推荐'
						},
						{
							id: 3,
							image: 'https://ae01.alicdn.com/kf/Hfcaab79d1b524aafaa1ab43b2e8e0fa3G.jpg',
							playVolume: '1000',
							des: '[话语速爆新歌]最新 话语音乐推荐'
						},
						{
							id: 4,
							image: 'https://ae01.alicdn.com/kf/Hfcaab79d1b524aafaa1ab43b2e8e0fa3G.jpg',
							playVolume: '1000',
							des: '[话语速爆新歌]最新 话语音乐推荐'
						},
						{
							id: 5,
							image: 'https://ae01.alicdn.com/kf/Hfcaab79d1b524aafaa1ab43b2e8e0fa3G.jpg',
							playVolume: '1000',
							des: '[话语速爆新歌]最新 话语音乐推荐'
						}
					]
				},
				{
					title: '新歌首发',
					sheets: [
						{
							id: 0,
							image: 'https://ae01.alicdn.com/kf/Hfcaab79d1b524aafaa1ab43b2e8e0fa3G.jpg',
							playVolume: '1000',
							des: '[话语速爆新歌]最新 话语音乐推荐'
						}
					]
				}
			]
			
		};
	},
	onLoad() {},
	methods: {}
};
</script>
<style lang="scss" scoped>
	@import "./index.scss";
</style>

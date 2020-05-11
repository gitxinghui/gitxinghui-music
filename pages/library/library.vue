<template>
	<view class="libraryPage">
		<!-- 头部  -->
		<view class="flex justify-around align-center pageTop">
			<text class="cuIcon-sort sidebarBtn"></text>
			<view class="flex justify-start align-center searchBox">
				<text class="cuIcon-search"></text>
				<input class="searchInput" type="text" placeholder="搜索曲目" name="search" value="" />
			</view>
			<view class="listen">
				<text class="huiIconFont huiIcongongneng15icon"></text>
				<view class="listenText">听歌识曲</view>
			</view>
		</view>
		<!-- 轮播图 -->
		<swiper
			class="card-swiper"
			:class="dotStyle ? 'square-dot' : 'round-dot'"
			:indicator-dots="true"
			:circular="true"
			:autoplay="false"
			interval="5000"
			duration="500"
			@change="cardSwiper"
			indicator-color="#C9C9C9"
		>
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 功能区 -->
		<view class="flex justify-between align-center functionalArea">
			<view class="flex justify-center align-center functionalItem">
				<image class="functionIcon" src="@/static/images/icon/svg/icon3.svg" mode=""></image>
				<view class="iconText">曲风流派</view>
			</view>
			<view class="flex justify-between align-center functionalItem">
				<image class="functionIcon" src="@/static/images/icon/svg/icon4.svg" mode=""></image>
				<view class="iconText">主题分类</view>
			</view>
			<view class="flex justify-between align-center functionalItem">
				<image class="functionIcon" src="@/static/images/icon/svg/icon5.svg" mode=""></image>
				<view class="iconText">歌手艺人</view>
			</view>
			<view class="flex justify-between align-center functionalItem">
				<image class="functionIcon" src="@/static/images/icon/svg/icon6.svg" mode=""></image>
				<view class="iconText">新歌新碟</view>
			</view>
			<view class="flex justify-between align-center functionalItem">
				<image class="functionIcon" src="@/static/images/icon/svg/icon7.svg" mode=""></image>
				<view class="iconText">MQA专区</view>
			</view>
		</view>
		<!-- 推荐区域 -->
		<view class="recommend">
			<view class="sheetItem" v-for="(item,index) in sheetData" :key="index">
				<!--歌单 -->
				<recommend :sheetData="item" recommendType="library"></recommend>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 轮播图
			cardCur: 0,
			swiperList: [
				{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				},
				{
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg'
				},
				{
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				},
				{
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				},
				{
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				},
				{
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				},
				{
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}
			],
			dotStyle: true,
			towerStart: 0,
			direction: '',
			// 歌单
			sheetData: [
				{
					title: '推荐曲风',
					sheets: [
						{
							id: 0,
							image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
							name: '静谧'
						},
						{
							id: 0,
							image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
							name: '静谧'
						},
						{
							id: 0,
							image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
							name: '静谧'
						},
						{
							id: 0,
							image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
							name: '静谧'
						},
						{
							id: 0,
							image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
							name: '静谧'
						}
					]
					
				},
				{
					title: '热搜歌曲',
					sheets: [
						{
							id: 0,
							image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
							name: '静谧'
						},
						{
							id: 0,
							image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
							name: '静谧'
						},
						{
							id: 0,
							image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
							name: '静谧'
						},
						{
							id: 0,
							image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
							name: '静谧'
						},
						{
							id: 0,
							image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
							name: '静谧'
						}
					]
					
				},
			]
		};
	},
	methods: {
		cardSwiper(e) {
			this.cardCur = e.detail.current;
		}
	}
};
</script>

<style lang="scss">
@import './library.scss';
</style>

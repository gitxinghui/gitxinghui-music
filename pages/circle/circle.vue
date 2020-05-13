<template>
	<view class="circlePage">
		<!-- 头部  -->
		<view class="pageTop">
			<view class="flex justify-around align-center pageSearch">
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
			<!-- 自定义 轮播图 -->
			<swiper
				class="card-swiper"
				:indicator-dots="false"
				:circular="true"
				:autoplay="true"
				interval="5000"
				duration="500"
				@change="cardSwiper">
				<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
					<view class="swiper-item">
						<image :src="item.url" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
			<!-- 指示点 -->
			<view class="flex justify-start align-center dots">
				<view class="dotItem" :class="cardCur == index ? 'activeDot':''" v-for="(item,index) in swiperList" :key="index"></view>
			</view>
		</view>
		<!-- 功能区 -->
		<view class="flex justify-between align-center functionalArea">
			<view class="flex justify-center align-center functionalItem">
				<image class="functionIcon" src="@/static/images/icon/svg/icon13.svg" mode=""></image>
				<view class="iconText">附近的人</view>
			</view>
			<view class="flex justify-between align-center functionalItem">
				<image class="functionIcon" src="@/static/images/icon/svg/icon14.svg" mode=""></image>
				<view class="iconText">周边圈子</view>
			</view>
			<view class="flex justify-between align-center functionalItem">
				<image class="functionIcon" src="@/static/images/icon/svg/icon15.svg" mode=""></image>
				<view class="iconText">粉丝福地</view>
			</view>
			<view class="flex justify-between align-center functionalItem">
				<image class="functionIcon" src="@/static/images/icon/svg/icon16.svg" mode=""></image>
				<view class="iconText">心情动态</view>
			</view>
			<view class="flex justify-between align-center functionalItem">
				<image class="functionIcon" src="@/static/images/icon/svg/icon17.svg" mode=""></image>
				<view class="iconText">福利中心</view>
			</view>
		</view>
		<!-- 推荐区域 -->
		<view class="recommend">
			<view class="sheetItem" v-for="(item,index) in sheetData" :key="index">
				<!--歌单 -->
				<recommend :sheetData="item" recommendType="circle"></recommend>
			</view>
		</view>
		<!-- 音乐人 -->
		<view class="musicPeople">
			<scroll-view class="navScroll" scroll-x="true" >
				<view class="navItem" :class="musicCur == index ? 'activeNav':''" v-for="(item,index) in musicNav" :key="item.id" :data-index="index" @tap="musicChagne">{{item.title}}</view>
			</scroll-view>
			<view class="peopleList">
				<view class="peopleItem">
					<view class="flex justify-between align-center itemTop">
						<view class="flex justify-start align-center author">
							<image class="avatar" src="https://ae01.alicdn.com/kf/H91339549dfc44e3d8e93cd7d6f515015P.jpg"></image>
							<view class="flex justify-center align-start name">
								<view class="authorName">音乐鬼才</view>
								<view class="time">36分钟前</view>
							</view>
						</view>
						<text class="huiIconFont huiIcongongneng1icon"></text>
					</view>
					<view class="comment more-cut">初识不知曲中意，再闻已是曲中人...每次听到这首歌都忍不住泪 流...</view>
				</view>
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
						title: '推荐话题',
						titleTip: '全部话题',
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
						
					}
				],
				// 音乐人类型
				musicCur: 0,
				musicNav: [
					{
						id: 0,
						title: '精选'
					},
					{
						id: 1,
						title: '关注'
					},
					{
						id: 2,
						title: '热门'
					},
					{
						id: 3,
						title: '流行音乐'
					},
					{
						id: 4,
						title: '嘻哈风'
					},
					{
						id: 5,
						title: '乡村音乐'
					}
				]
			};
		},
		methods: {
			cardSwiper(e) {
				this.cardCur = e.detail.current;
			},
			musicChagne(e) {
				if (this.musicCur == e.currentTarget.dataset.index) return false;
				this.musicCur = e.currentTarget.dataset.index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "./circle.scss";
</style>

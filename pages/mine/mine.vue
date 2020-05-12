<template>
	<view class="minePage">
		<!-- 头部  -->
		<view class="pageTop">
			<view class="flex justify-between align-center pageNav">
				<text class="cuIcon-sort sidebarBtn"></text>
				<text class="cuIcon-search searchBtn"></text>
			</view>
			<!-- 用户信息 -->
			<view class="flex justify-between align-center user">
				<view class="name">Hi，kku</view>
				<image class="avatar" src="https://ae01.alicdn.com/kf/H91339549dfc44e3d8e93cd7d6f515015P.jpg" mode=""></image>
			</view>
			<!-- 功能区 -->
			<view class="flex justify-between align-center functionalArea">
				<view class="flex justify-center align-center functionalItem">
					<image class="functionIcon" src="@/static/images/icon/svg/icon8.svg" mode=""></image>
					<view class="iconText">我的动态</view>
				</view>
				<view class="flex justify-between align-center functionalItem">
					<image class="functionIcon" src="@/static/images/icon/svg/icon9.svg" mode=""></image>
					<view class="iconText">私人电台</view>
				</view>
				<view class="flex justify-between align-center functionalItem">
					<image class="functionIcon" src="@/static/images/icon/svg/icon10.svg" mode=""></image>
					<view class="iconText">我的收藏</view>
				</view>
				<view class="flex justify-between align-center functionalItem">
					<image class="functionIcon" src="@/static/images/icon/svg/icon11.svg" mode=""></image>
					<view class="iconText">我的下载</view>
				</view>
				<view class="flex justify-between align-center functionalItem">
					<image class="functionIcon" src="@/static/images/icon/svg/icon12.svg" mode=""></image>
					<view class="iconText">我的好友</view>
				</view>
			</view>
		</view>
		<!-- 本地歌曲信息 -->
		<view class="pageCenter">
			<view class="flex justify-start align-center localItem" v-for="(item,index) in localNav" :key="item.id">
				<text class="huiIconFont" :class="item.icon"></text>
				<view class="localText">
					{{item.text}}
					<text class="num">({{item.num}})</text>
				</view>
			</view>
		</view>
		<!-- 我的歌单 -->
		<view class="pageBottom">
			<view class="sheetItem" v-for="(item,index) in sheetData" :key="index">
				<!--歌单 -->
				<recommend :sheetData="item" recommendType="mine"></recommend>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				localNav: [
					{
						id: 0,
						text: '本地音乐',
						num: 13,
						icon: 'huiIcongongneng17icon'
					},
					{
						id: 0,
						text: '最近播放',
						num: 160,
						icon: 'huiIcongongneng18icon'
					},
					{
						id: 0,
						text: '下载管理',
						num: 56,
						icon: 'huiIcongongneng19icon'
					},
					{
						id: 0,
						text: '我的电台',
						num: 0,
						icon: 'huiIcongongneng20icon'
					}
				],
				// 歌单
				sheetData: [
					{
						title: '我创建的歌单',
						num: 8,
						sheets: [
							{
								id: 0,
								image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
								name: '我的喜欢',
								num: 56
							},
							{
								id: 0,
								image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
								name: '车载音乐',
								num: 56
							},
							{
								id: 0,
								image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
								name: '爱情',
								num: 56
							},
							{
								id: 0,
								image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
								name: '跑步',
								num: 56
							},
							{
								id: 0,
								image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
								name: '跑步',
								num: 56
							}
						]
						
					},
					{
						title: '我收藏的歌单',
						num: 8,
						sheets: [
							{
								id: 0,
								image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
								name: '静谧',
								num: 56
							},
							{
								id: 0,
								image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
								name: '静谧',
								num: 56
								
							},
							{
								id: 0,
								image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
								name: '静谧',
								num: 56
							},
							{
								id: 0,
								image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
								name: '静谧',
								num: 56
							},
							{
								id: 0,
								image: 'https://ae01.alicdn.com/kf/Hfeb85f1814d34af59268bfdb35520348m.jpg',
								name: '静谧',
								num: 56
							}
						]
						
					},
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import "./mine.scss";
</style>

<template>
	<view>
		<view class="SongSheet">
			<view class="flex justify-between align-center title">
				<view class="songText">{{sheetData.title}}<text v-if="sheetData.num" class="num">({{sheetData.num}})</text></view>
				<text class="cuIcon-right"></text>
			</view>
			<!-- 左右滑动歌单 类型一 -->
			<scroll-view v-if="recommendType == 'index'" class="sheetList" scroll-x="true" >
				<view class="songItem" v-for="(item,index) in sheetData.sheets" :key="item.id">
					<view class="songImageBox">
						<image class="songImage" :src="item.image"></image>
						<view class="flex justify-start align-center playVolume">
							<text class="cuIcon-playfill"></text>
							<text class="num">{{item.playVolume}}次播放</text>
						</view>
					</view>
					<view class="more-cut des">{{item.des}}</view>
				</view>
			</scroll-view>
			<!-- 图片排列歌单 类型二 -->
			<view v-if="recommendType == 'library'" class="flex justify-start align-start imageSheet">
				<view class="songItem" v-for="(item,index) in sheetData.sheets" :key="item.id">
					<image class="songImage" :src="item.image"></image>
					<view class="flex justify-center align-center songText">{{item.name}}</view>
				</view>
			</view>
			<!-- 图片排列左右滑动 类型三 -->
			<scroll-view v-if="recommendType == 'mine'" class="imageScroll" scroll-x="true" >
				<view class="songItem" v-for="(item,index) in sheetData.sheets" :key="item.id">
					<image class="songImage" :src="item.image"></image>
					<view class="flex justify-start align-center playVolume">
						<view class="sheetName text-cut">{{item.name}}</view>
						<view class="num">{{item.num}}首</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "recommend",
		props: {
			sheetData: {
				type: Object,
				value: {
					title: '推荐歌单',
					sheets: [
						{
							image: 'https://pics.images.ac.cn/image/5eb6ebfcc82a8.html',
							playVolume: '1000',
							des: '[话语速爆新歌]最新 话语音乐推荐'
						},
						{
							image: 'https://pics.images.ac.cn/image/5eb6ebfcc82a8.html',
							playVolume: '1000',
							des: '[话语速爆新歌]最新 话语音乐推荐'
						},
						{
							image: 'https://pics.images.ac.cn/image/5eb6ebfcc82a8.html',
							playVolume: '1000',
							des: '[话语速爆新歌]最新 话语音乐推荐'
						},
						{
							image: 'https://pics.images.ac.cn/image/5eb6ebfcc82a8.html',
							playVolume: '1000',
							des: '[话语速爆新歌]最新 话语音乐推荐'
						},
						{
							image: 'https://pics.images.ac.cn/image/5eb6ebfcc82a8.html',
							playVolume: '1000',
							des: '[话语速爆新歌]最新 话语音乐推荐'
						}
					]
				}
			},
			recommendType: {
				type: String,
				value: 'index'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import "./recommend.scss";
</style>

<template>
	<view>
		<view class="SongSheet">
			<view class="flex justify-between align-center title">
				<view class="songText">{{sheetData.title}}</view>
				<text class="cuIcon-right"></text>
			</view>
			<!-- 左右滑动歌单 -->
			<scroll-view class="sheetList" scroll-x="true" >
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

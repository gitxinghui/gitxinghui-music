<template>
	<view class="musicPlayPage">
		<navTop></navTop>
		<!-- 歌曲播放器 -->
		<view class="playBox">
			<view class="flex justify-center align-center musicInfo">
				<view class="name">这，就是爱呀</view>
				<view class="singer">老哥</view>
				<view class="flex justify-center align-center coverImage">
					<image class="cover" src="https://ae01.alicdn.com/kf/H33093f3f412943499cbde8b713726f79u.jpg"></image>
					<view class="flex justify-center align-center bigCircle">
						<view class="smallCircle"></view>
					</view>
				</view>
				<!-- 歌曲功能 -->
				<view class="flex justify-between align-center fun">
					<text class="huiIconFont huiIcongongneng2icon"></text>
					<text class="huiIconFont huiIcongongneng11icon"></text>
					<text class="huiIconFont huiIcongongneng3icon"></text>
					<text class="huiIconFont huiIcongongneng4icon"></text>
				</view>
			</view>
		</view>
		<!-- 歌词区 -->
		<view class="lyric-box">
			<view class="ric">{{lytop}}</view>
			<view class="ric cur activeColor">{{lycur}}</view>
			<view class="ric">{{lybot}}</view>
		</view>
		<!-- 播放进度 -->
		<view class="flex justify-center align-center playProgress">
			<text class="beginTime">02:13</text>
			<slider value="0" class="schedule" @change="seheduleChange"  activeColor="#C471F5" backgroundColor="#F19EC2" block-color="#C471F5" block-size="2"/>
			<text class="endTime">05:06</text>
		</view>
		<!-- 播放功能按钮 -->
		<view class="flex justify-between align-center playBtnBox">
			<!-- 播放方式 -->
			<text class="huiIconFont huiIcongongneng9icon playType"></text>
			<!-- 播放控制 -->
			<view class="flex justify-center align-center playControl">
				<text class="cuIcon-backwardfill pre activeColor"></text>
				<text v-if="playStatus" class="cuIcon-stop pause activeColor"></text>
				<text v-else class="huiIconFont huiIcongongneng21icon play activeColor"></text>
				<text class="cuIcon-play_forward_fill next activeColor"></text>
			</view>
			<!-- 音乐列表 -->
			<text class="huiIconFont huiIcongongneng12icon musicList"></text>
		</view>
	</view>
</template>

<script>
	var _self = null;
	export default {
		data() {
			return {
				lytop: 'xxxxxxxxxx',
				lycur: 'xxxxxxxxxxxxxxxxx',
				lybot: 'xxxxxxxxxxxxxxxxx',
				playStatus: false,
			};
		},
		methods: {
			seheduleChange(e) {
				console.log('value 发生变化：' + e.detail.value)
			}
		},
		onLoad() {
			_self = this;
		}
	}
</script>

<style lang="scss" scoped>
	@import "./musicPlay.scss";
</style>

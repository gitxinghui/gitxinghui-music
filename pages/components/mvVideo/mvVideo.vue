<template>
	<view class="mvVideo">
		<video class="videoBxo" id="gitVideo" :src="mvData.mp4" @error="videoErrorCallback" enable-danmu danmu-btn controls></video>
		<!-- mv信息 -->
		<view class="info">
			<view class="title">{{ mvData.title }}</view>
			<view class="flex justify-between align-center infoBottom">
				<view class="flex justify-start align-center author">
					<image :src="mvData.author.avatar"></image>
					<view class="name">{{ mvData.author.name }}</view>
				</view>
				<view class="flex justify-start align-center mvInfo">
					<view class="loveInfo">
						<text class="huiIconFont huiIcongongneng2icon"></text>
						<text class="num">{{ mvData.love }}</text>
					</view>
					<view class="message">
						<text class="huiIconFont huiIcongongneng3icon"></text>
						<text class="num">{{ mvData.messageNum }}</text>
					</view>
					<text class="huiIconFont huiIcongongneng4icon"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: "mvVideo",
	props: {
		mvData: {
			type: Object,
			value:{
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
		}
	},
	data() {
		return {
		};
	},
	methods: {
		videoErrorCallback: function(e) {
			// uni.showModal({
			// 	content: e.target.errMsg,
			// 	showCancel: false
			// })
		},
	},
	created: function(res) {
		// #ifndef MP-ALIPAY
		// this.videoContext = uni.createVideoContext('gitVideo')
		// #endif
	},
}
</script>

<style lang="scss" scoped>
.mvVideo {
	width: 100%;
	padding-bottom: 43rpx;
	.videoBxo {
		width: 100%;
		height: 316rpx;
		border-radius: 10rpx;
	}
	.info {
		width: 100%;
		padding: 20rpx 0rpx 0rpx;
		.title {
			font-size: 28rpx;
			font-family: SourceHanSansCN;
			font-weight: 400;
			color: rgba(46, 46, 46, 1);
			line-height: 48rpx;
		}
		.infoBottom {
			width: 100%;
			margin-top: 28rpx;
			.author {
				image {
					width: 50rpx;
					height: 50rpx;
				}
				.name {
					font-size: 24rpx;
					font-family: SourceHanSansCN;
					font-weight: 400;
					color: rgba(91, 91, 91, 1);
					margin-left: 19rpx;
				}
			}
			.mvInfo {
				.loveInfo,
				.message {
					.huiIcongongneng2icon {
						font-size: 30rpx;
						color: #2f2f2f;
					}
					.huiIcongongneng3icon {
						font-size: 28rpx;
						color: #2f2f2f;
					}
					.num {
						font-size: 18rpx;
						font-family: SourceHanSansCN;
						font-weight: 400;
						color: rgba(47, 47, 47, 1);
						margin-left: 8rpx;
					}
				}
				.huiIcongongneng3icon {
					margin-left: 25rpx;
				}
				.huiIcongongneng4icon {
					font-size: 32rpx;
					color: #2f2f2f;
					margin-left: 19rpx;
				}
			}
		}
	}
}
</style>

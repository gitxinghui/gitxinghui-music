<template>
	<view class="flex justify-between align-center navTop">
		<text class="cuIcon-back_android"></text>
		<text class="cuIcon-moreandroid"></text>
	</view>
</template>

<script>
	export default {
		name: 'navTop',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.navTop {
		width: 100%;
		padding: 0rpx 30rpx;
		height: 60rpx;
		.cuIcon-back_android {
			font-size: 46rpx;
			color: #313131;
		}
		.cuIcon-moreandroid {
			font-size: 46rpx;
			color: #434343
		}
	}
</style>

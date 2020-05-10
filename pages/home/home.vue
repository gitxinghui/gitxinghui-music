<template>
	<!-- 主页面，方便底部导航栏跳转 -->
	<view id="homePage">
		<indexPage v-if="pageCur === 'index'"></indexPage>
		<libraryPage v-if="pageCur === 'library'"></libraryPage>
		<minePage v-if="pageCur === 'mine'"></minePage>
		<circlePage v-if="pageCur === 'circle'"></circlePage>
		<!-- 底部导航栏 -->
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="navAction flex justify-between align-center" data-cur="index" @tap="navChange">
				<view class="cuIcon-cu-image">
					<text class="huiIconFont huiIcongongneng5icon" :class="pageCur === 'index' ? 'activeColor':''"></text>
				</view>
				<view class="navTitle" :class="pageCur === 'index' ? 'activeColor':''">首页</view>
			</view>
			<view class="navAction flex justify-between align-center" data-cur="library" @tap="navChange">
				<view class="cuIcon-cu-image">
					<text class="huiIconFont huiIcongongneng6icon" :class="pageCur === 'library' ? 'activeColor':''"></text>
				</view>
				<view class="navTitle" :class="pageCur === 'library' ? 'activeColor':''">乐库</view>
			</view>
			<!-- 个人头像 -->
			<view class="flex justify-center align-center avatar">
				<image src="https://ae01.alicdn.com/kf/H91339549dfc44e3d8e93cd7d6f515015P.jpg" mode=""></image>
			</view>
			<view class="navAction flex justify-between align-center" data-cur="mine" @tap="navChange">
				<view class="cuIcon-cu-image">
					<text class="huiIconFont huiIcongongneng7icon" :class="pageCur === 'mine' ? 'activeColor':''"></text>
				</view>
				<view class="navTitle" :class="pageCur === 'mine' ? 'activeColor':''">我的音乐</view>
			</view>
			<view class="navAction flex justify-between align-center" data-cur="circle" @tap="navChange">
				<view class="cuIcon-cu-image">
					<text class="huiIconFont huiIcongongneng8icon" :class="pageCur === 'circle' ? 'activeColor':''"></text>
				</view>
				<view class="navTitle" :class="pageCur === 'circle' ? 'activeColor':''">音乐圈</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self = null;
	export default {
		data() {
			return {
				pageCur: 'index'
			};
		},
		onLoad(options) {
			_self = this;
		},
		methods: {
			/**
			 * @param {Object} e
			 * 切换底部导航栏
			 */
			navChange(e) {
				_self.pageCur = e.currentTarget.dataset.cur;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "./home.scss";
</style>

<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
		/**
		 * 个人icon
		 */
		@import "@/common/font/iconfont.css";
		/**
		 * colorui--第三方ui
		 */
		@import "@/common/style/colorui/main.css";
		@import "@/common/style/colorui/icon.css";
		/**
		 * 自定义样式
		 */
		@import "./App.scss";
</style>

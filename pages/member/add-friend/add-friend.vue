<template>
	<view>
		<navbar title="添加好友" :backBtn="true"></navbar>
		<view class="list">
			<rectangle  leftText="手机联系人" iconSrc="contact" ></rectangle>
			<rectangle  leftText="扫一扫" iconSrc="scan" @click="toScanCode()"></rectangle>
			<rectangle  leftText="附近的人" iconSrc="nearpeople" @click="toNearby()"></rectangle>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			//跳转到附近的人
			toNearby() {
				uni.navigateTo({
					url: '../nearby/nearby'
				});
			},
			toScanCode() {
				uni.navigateTo({
					url: '../../my/scan-qr-code/scan-qr-code'
				});
			},
		}
	}
</script>

<style lang="scss">
	.list {
		margin: 15px 0 0 0;
	}
</style>

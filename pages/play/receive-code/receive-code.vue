<template>
	<view id="receive-code">
		<navbar title="个人收款" :backBtn="true"></navbar>
		<view class="content">
			<p>长城钱包扫一扫，向我付钱</p>
			<view class="QR-code"></view>
			<view class="set-save">
				<view class="set">设置金额</view>
				<view class="save">保存图片</view>
			</view>
			<rectangle  leftText="收款记录" iconSrc="" @click="toReceiveRecord()"></rectangle>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			//跳转到 收款记录
			toReceiveRecord(){
				uni.navigateTo({
					url: '../receive-record/receive-record'
				});				
			}
		}
	}
</script>

<style lang="scss">
#receive-code{
	background-color: $cw-base-color;
	height: 100%;
	.content{
		background-color: $uni-bg-color;
		margin: 20px 12px 0 12px;
		height: 85%;
	}
}
</style>

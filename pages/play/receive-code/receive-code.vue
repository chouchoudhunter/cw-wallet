<template>
	<view id="receive-code">
		<navbar title="个人收款" :backBtn="true"></navbar>
		<view class="content">
			<p class="text">长城钱包扫一扫，向我付钱</p>
			<view class="qr-code"></view>
			<view class="set-save">
				<view class="set" @click="toSetAmount()">设置金额</view>
				<view class="save">保存图片</view>
			</view>
			<rectangle  leftText="收款记录" iconSrc="recevie" @click="toReceiveRecord()"></rectangle>
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
			},
			//跳转到 设置金额
			toSetAmount(){
				uni.navigateTo({
					url: '../set-amount/set-amount'
				});	
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
#receive-code{
	background-color: $cw-base-color;
	height: 100%;
	.content{
		background-color: $uni-bg-color;
		margin: 20px 12px 0 12px;
		padding-top: 36px;
		height: 83%;
		text-align: center;
		border-radius: 5px;
		.text{
			font-size: 15px;
			margin-bottom: 36px;
		}
		.qr-code{
			width: 178px;
			height: 178px;
			margin: 0 auto;
			background-color: #C0C0C0;
		}
		.set-save{
			display: flex;
			justify-content: center;
			font-size: 14px;
			color: $cw-base-color;
			margin: 40px 0;
			.set{
				width: 89px;
				text-align: left;
				border-right: solid 0.5px #E5E5E5;
			}
			.save{
				width: 89px;
				text-align: right;
				border-left: solid 0.5px #E5E5E5;
			}
		}
	}
}
</style>

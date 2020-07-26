<template>
	<view id="pay-code">
		<navbar title="二维码付款" :backBtn="true"></navbar>
		<view class="content">
			<view class="record" @click="toPayRecord()">付款记录
				<image class="arrows" src="@/static/icon/member/arrows.png" mode=""></image>
			</view>
			<view class="bar-code"></view>
			<view class="number">45313443657995</view>
			<view class="qr-code"></view>
			<view class="pay-style">选择支付方式
				<image class="arrows" src="@/static/icon/member/arrows.png" mode=""></image>
			</view>			
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
			//跳转到 付款记录
			toPayRecord(){
				uni.navigateTo({
					url: '../pay-record/pay-record'
				});				
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
#pay-code{
	background-color: $cw-base-color;
	height: 100%;
	.content{
		background-color: $uni-bg-color;
		margin: 20px 12px 0 12px;
		padding: 15px;
		height: 83%;
		border-radius: 5px;
		.record{
			font-size: 15px;
			padding-bottom: 0.5px;
			text-align: right;	
			margin-bottom: 30px;
			.arrows {
				width: 6.5px;
				height: 12px;	
				margin-left: 10px;
			}
		}
		.bar-code{
			height: 100px;
			margin: 0 auto;
			background-color: #C0C0C0;
		}
		.number{
			font-size: 16px;
			color: #999999;
			text-align: center;
			margin: 20px 0 40px;
		}
		.qr-code{
			width: 178px;
			height: 178px;
			margin: 0 auto;
			background-color: #C0C0C0;
		}
		
		.pay-style{
			font-size: 15px;
			text-align: center;
			margin-top: 40px;
			.arrows {
				width: 6.5px;
				height: 12px;	
				margin-left: 10px;
			}
		}
	}
}
</style>
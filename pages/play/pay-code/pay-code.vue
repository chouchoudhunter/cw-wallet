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
#pay-code{
	background-color: $cw-base-color;
	height: 100%;
	.content{
		background-color: $uni-bg-color;
		margin: 20px 12px 0 12px;
		height: 85%;
		.record{
			
			.arrows {
				width: 6.5px;
				height: 12px;	
			}
		}
		
		.pay-style{
			
			.arrows {
				width: 6.5px;
				height: 12px;	
			}
		}
	}
}
</style>
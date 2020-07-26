<template>
	<view id="sacn-qr-code">
		<navbar title="" :backBtn="true" backColor="transparent"></navbar>
		<view class="content">
			<view class="camera"></view>
			<view class="hint">将二维码/条码放入框内，即可自动扫描</view>
			<view class="bottom-item">
				<view class="item" @click="toPayCode()">
					<image src="../../../static/icon/my/paycode.png" mode=""></image>
					<view class="title">付款码</view>
				</view>
				<view class="item">
					<image src="../../../static/icon/my/album.png" mode=""></image>
					<view class="title">相册</view>
				</view>
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
			//跳转到 付款码
			toPayCode(){
				uni.navigateTo({
					url: '../../play/pay-code/pay-code'
				});				
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #494949;
	}
#sacn-qr-code{
	display: flex;
	flex-direction: column;
	// justify-content: center;
	align-items: center;
	padding-top:  100px;
	.content{
			
		.camera{
			width: 276px;
			height: 254px;
			background-color: #C8C7CC;
		}
		.hint{
			font-size: 12px;
			color: #FFFFFF;
			text-align: center;
			margin-top: 7px;
		}
		.bottom-item{
			display: flex;
			justify-content:center;
			margin-top: 53px;
			.item{
				margin: 0 40px;
				text-align: center;
				image{
					width: 46px;
					height: 46px;
				}
				.title{
					font-size: 15px;
					color: #FFFFFF;
				}
			}
		}
	}
}
</style>

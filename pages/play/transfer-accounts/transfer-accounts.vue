<template>
	<view id="transfer">
		<navbar title="转账" :backBtn="true"></navbar>
		<view class="style">
			<view class="item" @click="toFriend()">
				<image src="../../../static/icon/friend.png" mode=""></image>
				<view class="title">选择好友</view>
			</view>
			<view class="item" @click="toPhone()">
				<image src="../../../static/icon/mobile.png" mode=""></image>
				<view class="title">输入手机号</view>
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
			//跳转到 好友列表
			toFriend(){
				// alert("123");
				uni.navigateTo({
					url: '../../member/friend/friend'
				});
			},
			//跳转到 转到对方账户
			toPhone(){
				uni.navigateTo({
					url: '../transfer-phone-number/transfer-phone-number'
				});
			}
		}
	}
</script>

<style lang="scss">
#transfer{
	background-color: $uni-bg-color;
	height: 100%;
	.style{
		display: flex;
		justify-content:center;
		margin-top: 53px;
		.item{
			margin: 0 40px;
			text-align: center;
			image{
				width: 54px;
				height: 54px;
				border-radius: 10px;
			}
			.title{
				font-size: 13px;
			}
		}
	}
}
</style>

<template>
	<view>
		<navbar title="我的邀请码" :backBtn="true">
			<view slot="right">分享到微信</view>
		</navbar>
		<view class="back">
			<view class="invite-code">邀请码</view>
			<image class="img"src="" mode=""></image>
			<view class="myself">我的专属邀请码</view>
			<view class="number">1652781931</view>
		</view>
		<button class="save-img">保存图片</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.back{
	margin: 12px 10px 16px 10px;
	background: url(../../../static/icon/1111@2x.png);
	background-size:  100% 100%;
	height: 410px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.invite-code{
		font-size: 35px;
		color: #FFFFFF;
		margin-bottom: 34px;
	}
	.img{
		width: 70px;
		height: 70px;
		background-color: #C8C7CC;
		margin-bottom: 19px
	}
	.myself{
		font-size: 14px;
		color: #74260A;
		margin-bottom: 28px
	}
	.number{
		font-size: 25px;
		color: #FFFFFF;
	}
}
.save-img{
	margin: 0 12px;
}
</style>

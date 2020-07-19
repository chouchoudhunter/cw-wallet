<template>
	<view id="my-code">
		<navbar title="我的二维码" :backBtn="true" backColor="transparent"></navbar>
		<view class="img-name">
			<view class="img"></view>
			<view class="name">成吉思汗</view>
		</view>
		<view class="background">
			<view class="code"></view>
		</view>
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
#my-code{
	background-color: #494949;
	height: 100%;
	 display: flex;
	 flex-direction:column;
	 align-items: center;
	.img-name{
		position: fixed;
		top: 130px;
		z-index: 100;
		.img{
			width: 80px;
			height: 80px;
			background-color: #C0C0C0;
		}
		.name{
			font-size: 18px;
			text-align: center;
			margin-top: 10px;
		}
	}
	.background{
		width: 314px;
		height: 330px;
		margin-top: 130px;
		border-radius: 4px;
		background-color: $uni-bg-color;
		.code{
			width: 200px;
			height: 200px;
			margin: 90px 55px 0 55px;
			background-color: #C8C7CC;
		}
	}
}
</style>

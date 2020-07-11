<template>
	<view style="background-color: #f0eff3;height: 100%;">
		<navbar title="我的"></navbar>
		<view class="header">
			<view class="img"></view>
			<view class="name">成吉思汗</view>
		</view>
		<view class="info">
			<view class="info-row">
				<view class="info-item">
					<view class="desc">￥9.9</view>
					<view class="title">零钱</view>
				</view>
				<view class="info-item">
					<view class="desc">2</view>
					<view class="title">优惠券</view>
				</view>
			</view>
			<view class="hr"></view>
		</view>
			<view class="list">
				<view class="list-item">
					<view class="icon">
						
					</view>
					<view class="title">申请成为推广代理</view>
					
					<view class="go">></view>
				</view>
				<view class="hr"></view>
				<view class="list-item">
					<view class="icon">
						
					</view>
					<view class="title">申请成为推广代理</view>
					
					<view class="go">></view>
				</view>
				<view class="hr"></view>
				<view class="list-item">
					<view class="icon">
						
					</view>
					<view class="title">申请成为推广代理</view>
					
					<view class="go">></view>
				</view>
				<view class="hr"></view>
			</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss">
.hr {
	border-bottom: 1px solid #dddddd;
}
.header {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40px 0;
	background-color:$cw-base-color;
	color: #ffffff;
	.img {
		width: 80px;
		height: 80px;
		background-color: #e3e3e3;
		border-radius: 6px;
	}
}
.info {
	text-align: center;
	background-color: #FFFFFF;
	padding-top:20px;
	.info-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 20px;
		.info-item {
			flex-grow: 1;
			.title {
				font-size: 16px;
				color: #7c7c7c;
			}
		}
	}
}
.list{
	margin-top: 30px;
	.list-item{
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px 15px;
		background-color: #FFFFFF;
		.icon{
			width: 30px;
			height: 30px;
			background-color: #C0C0C0;
		}
		.title{
			font-size: 18px;
			margin-left: 10px;
			flex-grow: 1;
		}
		.go{
			color: #C0C0C0;
		}
	}
}
</style>

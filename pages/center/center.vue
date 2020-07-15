<template>
	<view>
		<navbar title="我的"></navbar>
		<view class="header">
			<view class="img" @click="toInformation()"></view>
			<view class="name" @click="toInformation()">成吉思汗</view>
		</view>
		<view class="info">
			<view class="info-row">
				<view class="info-item" @click="toChange()">
					<view class="desc">￥9.99</view>
					<view class="title">零钱</view>
				</view>
				<view class="info-item">
					<view class="desc">2</view>
					<view class="title">优惠券</view>
				</view>
			</view>
		</view>
		<view class="list">
			<rectangle class="rect" leftText="申请成为商户" ></rectangle>
			<rectangle class="rect" leftText="申请成为推广代理" @click="toAgent()"></rectangle>
			<rectangle class="rect" leftText="发布优惠券" ></rectangle>
			<rectangle class="rect" leftText="帮助中心" @click="toHelp()"></rectangle>
			<rectangle class="rect" leftText="我的工单" ></rectangle>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			//跳转到个人信息
			toInformation(){
				uni.navigateTo({
					url: '../my/information/information'
				});
			},
			//跳转到零钱
			toChange(){
				uni.navigateTo({
					url: '../my/change/change'
				});
			},
			//跳转到帮助中心
			toHelp(){
				uni.navigateTo({
					url: '../my/help-center/help-center'
				});
			},
			//跳转到成为代理
			toAgent(){
				uni.navigateTo({
					url: '../my/do-agent/do-agent'
				});
			},
		}
	};
</script>

<style lang="scss">
	
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 40px 0;
		background-color: $cw-base-color;
		color: #ffffff;
		.img {
			width: 70px;
			height: 70px;
			background-color: #e3e3e3;
			border-radius: 6px;
		}
		.name{
			font-size: 17px;
			margin-top: 9px;
		}
	}

	.info {
		text-align: center;
		background-color: #FFFFFF;
		// margin-bottom: 10px;
		.info-row {
			display: flex;
			flex-direction: row;
			justify-content: center;
			margin-bottom: 10px;
			padding: 20px 0;
			.info-item {
				flex-grow: 1;
				.title {
					font-size: 12px;
					color: #7c7c7c;
				}
			}
		}
	}
	.list {
		.rect{
			margin-bottom: -4px;
		}
	}
</style>

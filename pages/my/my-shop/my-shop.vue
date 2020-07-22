<template>
	<view>
		<navbar title="我的店铺" :backBtn="true">
			<view class="branch" slot="right" @click="toMyBranch()">我的分店</view>
		</navbar>
		<view class="my-shop">
			<view class="my-top">
				<image src="../../../static/icon/my/location.png" mode=""></image>	
				<view class="address">店铺地址：四川省金牛区西竹大道87号</view>
			</view>
			<view class="my-middle">
				<view class="picture"></view>
				<view class="name">店铺名称店铺名称店铺名称店铺名称店铺名称</view>
			</view>
			<view class="my-bottom">
				<view class="bottom-left">
					<view class="title">今日收款金额（元）</view>
					<view class="amounts">￥0.00</view>
				</view>
				<view class="bottom-right">查看收款记录 ></view>
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
			//跳转到 我的分店
			toMyBranch(){
				uni.navigateTo({
					url: '../my-branch/my-branch'
				});
			}
		}
	}
</script>

<style lang="scss">
.my-shop{
	padding: 18px 22px 18px 12px;
	margin-bottom: 5px;
	background-color: #FFFFFF;
	line-height: 2;
	.my-top{
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		image{
			width: 10px;
			height: 14px;
			margin-right: 6px;
		}
		.address{
			font-size: 14px;
		}
	}
	.my-middle{
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		.picture{
			flex-shrink:0;
			width: 121px;
			height: 90px;
			background-color: #C8C7CC;
			margin-right: 13px;
		}
		.name{
			font-size: 16px;
		}
	}
	.my-bottom{
		display: flex;
		font-size: 13px;
		.bottom-left{
			flex-grow: 1;
			.amounts{
				
				color: #FF0000;
			}
		}
	}
}
</style>

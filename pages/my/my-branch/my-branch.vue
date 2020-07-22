<template>
	<view>
		<navbar title="我的分店" :backBtn="true"></navbar>
		<view class="total">分店共1家</view>
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
				<view class="principal">店铺负责人：周思敏</view>
				<view class="tel">联系电话：17628219211</view>
			</view>
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
.total{
	font-size: 15px;
	margin: 18px 12px 12px 12px;
}
.my-shop{
	padding: 10px 22px 18px 12px;
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
		font-size: 14px;
	}
}
</style>

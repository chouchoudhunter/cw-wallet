<template>
	<view>
		<navbar title="我的代理" :backBtn="true"></navbar>
		<view class="my-agent">
			<view class="number-title">
				<view class="number">8家</view>
				<view class="title">推广商家</view>
			</view>
			<view class="number-title">
				<view class="number">10人</view>
				<view class="title">累计邀请</view>
			</view>
			<view class="number-title">
				<view class="number">0.00元</view>
				<view class="title">推广佣金</view>
			</view>
			<view class="number-title">
				<view class="number">0.00元</view>
				<view class="title">邀请佣金</view>
			</view>
		</view>
		<view class="shop-list">
			<view class="shop">
				<view class="shop-img-name">
					<view class="shop-img"></view>
					<view class="shop-name">店铺名称店铺名称店铺名称店铺名称店铺名称</view>
				</view>
				<view class="shop-address-tel">
					商家地址：四川省金牛区西竹大道87号<br>
					电话：17628121987
				</view>
				<view class="shop-money-date">
					<view class="money">推广佣金<span>￥2.42</span></view>
					<view class="date">入驻日期：2020-03-24</view>
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
		}
	}
</script>

<style lang="scss">
.my-agent{
	display: flex;
	flex-wrap: wrap;
	background-color: $uni-bg-color;
	height: 148px;
	margin-bottom: 7px;
	.number-title{
		flex-shrink: 0;
		text-align: center;
		width: 50%;
		margin: 20px 0;
		.number{
			font-size: 13px;
			color: #888888;
		}
		.title{
			font-size: 15px;
		}
	}
}
.shop-list{
	.shop{
		padding: 12px;
		margin-bottom: 1px;
		background-color: $uni-bg-color;
		line-height: 2;
		.shop-img-name{
			display: flex;
			margin-bottom: 12px;
			.shop-img{
				flex-shrink: 0;
				width: 120px;
				height: 90px;
				background-color: #C8C7CC;
				margin-right: 12px;
			}
			.shop-name{
				font-size: 16px;
				line-height: 1.5;
			}
		}
		.shop-address-tel{
			font-size: 14px;
		}
		.shop-money-date{
			display: flex;
			font-size: 14px;
			.money{
				flex-grow: 1;
				span{
					color: #FF2121;
				}
			}
		}		
	}
}
</style>

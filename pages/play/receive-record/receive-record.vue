<template>
	<view id="receive-record">
		<navbar title="收款记录" :backBtn="true"></navbar>
		<view class="list">
			<view class="list-left">
				<p class="p1">交易收款-**意</p>
				<p class="p2">2020-06-24 12:04:36</p>
			</view>
			<view class="list-right">
				<view class="amount">收入 +2000.00</view>
				<view class="style">微信收款</view>
			</view>
		</view>
		<view class="list">
			<view class="list-left">
				<p class="p1">交易收款-**意</p>
				<p class="p2">2020-06-24 12:04:36</p>
			</view>
			<view class="list-right">
				<view class="amount">收入 +2000.00</view>
				<view class="style">微信收款</view>
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
#receive-record{
	background-color: $cw-base-color;
	.list{
			display: flex;
			align-items: center;
			margin: 12px;
			padding: 15px;
			height: 50px;
			background-color: $uni-bg-color ;
			border-radius: 6px;
			.list-left{
				flex-grow: 1;
				.p1{
					font-size: 15px;
					margin-bottom: 6px;
				}
				.p2{
					font-size: 12px;
					color: #888888;
				}
			}
			.list-right{
				font-size: 13px;
				color: #333333;	
				text-align: right;
				.amount{
					margin-bottom: 6px;
				}
			}
	}	
}
</style>


</style>

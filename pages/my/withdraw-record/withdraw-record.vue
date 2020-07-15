<template>
	<view>
		<navbar title="提现记录" :backBtn="true"></navbar>
		<view class="list">
			<view class="list-left">
				<p class="p1">银行卡</p>
				<p class="p2">****************8791</p>
				<p class="p3">2020-06-24 12:04:36</p>
			</view>
			<view class="list-right">
				<p>充值 -2000.00</p>
				<br>
				<P class="green">成功</P>
			</view>
		</view>
		<view class="list">
			<view class="list-left">
				<p class="p1">银行卡</p>
				<p class="p2">****************8791</p>
				<p class="p3">2020-06-24 11:04:36</p>
			</view>
			<view class="list-right">
				<p>充值 -2000.00</p>
				<br>
				<P class="green">成功</P>
			</view>
		</view>
		<view class="list">
			<view class="list-left">
				<p class="p1">银行卡</p>
				<p class="p2">****************8791</p>
				<p class="p3">2020-06-24 10:04:36</p>
			</view>
			<view class="list-right">
				<p>充值 -2000.00</p>
				<br>
				<P class="red">失败</P>
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
	.list {
		display: flex;
		flex-direction: row;
		margin: 10px 12px 0;
		padding: 15px;
		height: 65px;
		background-color: $uni-bg-color;
		border-radius: 4px;

		.list-left {
			flex-grow: 1;

			.p1 {
				font-size: 15px;

			}

			.p2 {
				font-size: 14px;
				margin: 8px 0 6px 0;
			}

			.p3 {
				font-size: 12px;
				color: #888888;
			}
		}

		.list-right {
			font-size: 13px;
			text-align: right;
			color: #333333;

			.green {
				color: green;
			}

			.red {
				color: red;
			}
		}
	}
</style>

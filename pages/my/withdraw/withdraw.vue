<template>
	<view>
		<navbar title="零钱提现" :backBtn="true"></navbar>
		<view class="way">
			<view class="way-bank">
				<p class="p1">到账银行</p>
				<view class="bank">
					<p class="p2">中国工商银行（8791）</p>
					<p class="p3">2小时到账</p>
				</view>
			</view>
			<view class="arrow">></view>
		</view>
		<view class="amount">
			<p>提现金额</p>
			<c-input inputText="￥" placeholder="" cFontSize="20px"></c-input>
			<p class="grey">当前零钱余额9.99元，<a>全部提现</a></p>
			<p class="grey">手续费￥0.01</p>
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
.record{
		font-size: 15px;
	}
	.way{
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 94px;
		background-color: $uni-bg-color;
		.way-bank{
			display: flex;
			flex-direction: row;
			align-items: center;
			flex-grow: 1;
			.p1{
				font-size: 15px;
				line-height: 94px;
				margin: 0 40px 0 14px;
			}
			.p2{
				font-size: 14px;
				margin-bottom: 10px;
			}
			.p3{
				font-size: 12px;
				color: #888888;
				text-align: center;
			}
		}
		.arrow{
			font-size: 15px;
			margin-right: 16px;
		}
	}
	.amount {
		margin: 26px 14px 0;
		p{
			font-size: 14px;
		}
		.grey{
			font-size: 12px;
			color: #888888;
			a{
				color: blue;
			}
		}
	}
</style>

<template>
	<view id="recharge">
		<navbar title="充值" :backBtn="true">
			<view class="record" slot="right" @click="toRecord()">充值记录 ></view>
		</navbar>
		<view class="way">
			<view class="way-bank">
				<p class="p1">充值方式</p>
				<view class="bank">
					<p class="p2">中国工商银行（8791）</p>
					<p class="p3">单日交易限额¥50000.00</p>
				</view>
			</view>
			<view class="arrow">></view>
		</view>
		<view class="amount">
			<p>转账金额</p>
			<c-input inputText="¥" placeholder="" cFontSize="20px"></c-input>
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
			//跳转到 充值记录
			toRecord(){
				uni.navigateTo({
					url: '../recharge-record/recharge-record'
				});
			}
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
	}
</style>

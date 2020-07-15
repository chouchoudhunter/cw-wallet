<template>
	<view>
		<navbar title="零钱" :backBtn="true">
			<view class="record" slot="right" @click="toRecharge()">充值 ></view>
		</navbar>
		<view class="content">
			<p class="p1"> 总资产 (元)</p>
			<p class="p2">￥9.99</p>
		</view>
		<c-button class="but" cFontSize="17px" @click="toWithdraw">提现</c-button>
		<p class="look" @click="toRecord">提现记录查看 ></p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			//跳转到充值
			toRecharge(){
				uni.navigateTo({
					url: '../recharge/recharge'
				});
			},
			//跳转到零钱提现
			toWithdraw(){
				uni.navigateTo({
						url: '../withdraw/withdraw'
					});
			},
			//跳转到提现记录
			toRecord(){
				uni.navigateTo({
					url: '../withdraw-record/withdraw-record'
				});
			}
		}
	}
</script>

<style lang="scss">
.content{
	padding: 80px 0;
	text-align: center;
	.p1{
		font-size: 15px;
		margin-bottom:25px;
	}
	.p2{
		font-size: 25px;
		color: $cw-base-color;
	}
}
.but {
	margin: 50px 12px;
}
.look{
	font-size: 15px;
	color: #666666;
	text-align: center;
}
</style>

<template>
	<view id="transfer-phone-amount">
		<navbar title="手机号转账" :backBtn="true"></navbar>
		<view class="amount">
			<p class="aaa">转账金额</p>
			<c-input inputText="¥" placeholder="" cFontSize="20px">
				<image slot="right" src="../../../static/icon/close.png" @click="clearNum()"></image>	
			</c-input>
		</view>
		<c-button class="but">确认转账</c-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			//清楚输入的数字
			clearNum(){
				
			}
		}
	}
</script>

<style lang="scss">
#transfer-phone-amount{
	background-color: $uni-bg-color;
	height: 100%;
	.amount {
		margin: 26px 14px 0;
		.aaa{
			font-size: 14px;
		}
		image{
			width: 16px;
			height: 16px;
			margin-top: 6px;
		}
	}	
	.but {
		margin: 50px 12px 0;
	}
}	
</style>

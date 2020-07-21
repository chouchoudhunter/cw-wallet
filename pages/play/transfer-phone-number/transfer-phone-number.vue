<template>
	<view>
		<navbar title="转到对方账户" :backBtn="true"></navbar>
		<view class="input">
			<c-input placeholder="请输入转入的手机号" cStyle="box1"></c-input>
		</view>
		<c-button class="but" @click="toTransfer()">确认转账</c-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			//跳转到 手机号转账
			toTransfer(){
				uni.navigateTo({
					url: '../transfer-phone-amount/transfer-phone-amount'
				});
			}
		}
	}
</script>

<style lang="scss">
.input{
	margin-top: 20px;
}	
.but {
	margin: 100px 12px 0;
}
</style>

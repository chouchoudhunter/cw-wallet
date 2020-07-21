<template>
	<view id="change-pay-password">   
		<navbar title="修改支付密码" :backBtn="true"></navbar>
		<c-input iconImg="user" placeholder="请输入新支付密码"></c-input>
		<c-input iconImg="lock" placeholder="请确认支付密码"></c-input>
		<c-button class="submit">确认确认</c-button>
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
#change-pay-password{
	padding: 20px 30px;
	background-color: $uni-bg-color;
	height: 100%;
}
.submit{
	margin-top: 50px;
}
</style>

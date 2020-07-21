<template>
	<view id="forget-password">
		<navbar title="忘记支付密码" :backBtn="true"></navbar>
		<c-input cStyle="box1" placeholder="请输入手机号"></c-input>
		<c-input cStyle="box1" placeholder="请输入验证码">
			<c-button slot="right" cRadius="0" cFontSize="15px" cHeight="24px" cWidth="80px">获取验证码</c-button>
		</c-input>
		<c-button class="but">下一步</c-button>
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
#forget-password{
	padding: 12px;
}
.but{
	margin-top: 71px;
}
</style>

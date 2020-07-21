<template>
	<view id="change-login-password">   
		<navbar title="修改登录密码" :backBtn="true"></navbar>
		<c-input iconImg="user" placeholder="请输入旧的登录密码"></c-input>
		<c-input iconImg="lock" placeholder="请输入新的登录密码"></c-input>
		<c-input iconImg="lock" placeholder="请确认新的登录密码"></c-input>
		<c-button class="submit">确认</c-button>
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
#change-login-password{
	padding: 20px 30px;
	background-color: $uni-bg-color;
	height: 100%;
}
.submit{
	margin-top: 50px;
}
</style>

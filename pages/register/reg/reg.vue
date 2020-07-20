<template>
	<view class="fin-body">
		<navbar title="会员注册" :backBtn="true"></navbar>
		<c-input inputText="姓名" cStyle="box1" placeholder="请输入姓名"></c-input>
		<c-input inputText="身份证号" cStyle="box1" placeholder="请输入身份证号"></c-input>
		<c-input inputText="手机号" cStyle="box1" placeholder="请输入手机号"></c-input>
		<c-input inputText="验证码" cStyle="box1" placeholder="请输入验证码" :isGroup="true"></c-input>
		<c-input inputText="设置密码" cStyle="box1" placeholder="请输入密码"></c-input>
		<c-input inputText="确认密码" cStyle="box1" placeholder="请确认密码"></c-input>
		<c-button class="reg-btn">完成注册</c-button>
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
.fin-body{
	padding: 0 15px;
	background-color: $cw-background-grey;
	height: 100%;
}
.reg-btn{
	margin-top: 40px;
}
</style>

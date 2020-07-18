<template>
	<view class="fin-body">
		<navbar title="找回密码" :backBtn="true"></navbar>
		<c-input iconImg="user" cStyle="box" placeholder="请输入手机号"></c-input>
		<c-input iconImg="user" cStyle="box" placeholder="请输入验证码">
			<view class="" slot="right">
				<c-button class="c-input-group-btn" cRadius="0px" cFontSize="15px" cHeight="24px">获取验证码</c-button>
			</view>
			
		</c-input>
		<c-input iconImg="user" cStyle="box" placeholder="请输入密码"></c-input>
		<c-input iconImg="user" cStyle="box" placeholder="请确认密码"></c-input>
		<c-button>完成</c-button>
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
	height: 100%;
	.c-input-group-btn {
		width: 120px;
	}
}
</style>

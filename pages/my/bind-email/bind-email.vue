<template>
	<view id="bindEmail">
		<navbar title="绑定邮箱" :backBtn="true"></navbar>
		<c-input class="in" cTextAlign="right" inputText="绑定邮箱" cStyle="box1" placeholder="请输入邮箱地址"></c-input>
		<c-button class="but" cFontSize="17px" @click="toEmailCode()">发送验证码</c-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			//跳转到 绑定邮箱-验证码
			toEmailCode(){
				uni.navigateTo({
					url: '../email-code/email-code'
				});
			},			
		}
	}
</script>

<style lang="scss">
.in {
	margin: 18px 0 0 0;
}
.but {
	margin: 50px 12px 0;
}	
</style>

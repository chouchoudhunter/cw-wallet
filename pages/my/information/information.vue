<template>
	<view id="personInformation">
		<navbar title="个人信息" :backBtn="true"></navbar>
		<view class="list">			
			<rectangle  leftText="我的二维码" :leftIcon="false"></rectangle>
			<rectangle  leftText="个人信息修改" :leftIcon="false"></rectangle>
			<rectangle  leftText="登录密码修改" @click="toChangeLogin()" :leftIcon="false" ></rectangle>
			<rectangle  leftText="支付密码修改" @click="toChangePay()" :leftIcon="false"></rectangle>
		</view>
		<c-button class="but" cFontSize="17px">退出登录</c-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			//跳转到 修改登录密码
			toChangeLogin(){
				uni.navigateTo({
					url: '../change-login-password/change-login-password'
				});
			},
			//跳转到 修改支付密码
			toChangePay(){
				uni.navigateTo({
					url: '../change-pay-password/change-pay-password'
				});
			},	
						
		}
	}
</script>

<style lang="scss">
.list{
	margin: 15px 0 0 0;
}
.but {
	margin: 50px 12px 0;
}			
</style>


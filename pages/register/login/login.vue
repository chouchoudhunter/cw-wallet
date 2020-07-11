<template>
	<view class="body">
		<navbar title="登录" :backBtn="true"></navbar>
		<view class="title">
			欢迎登陆长城钱包APP
		</view>
		<c-input iconImg="user"></c-input>
		<c-input iconImg="lock"></c-input>
		<view class="find-password">
			<view @click="findPassword()">
				忘记密码?
			</view>
		</view>
		<c-button class="submit">确认</c-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			findPassword(){
				uni.navigateTo({
					url:"../find/find"
				})
			}
		}
	}
</script>

<style lang="scss">
.body{
	padding: 20px 10%;
}
.title{
	font-size: 17px;
	margin: 30px 0;
}
.find-password{
	display: flex;
	flex-direction: row;
	justify-content:flex-end;
	font-size: 13px;
	color: #666666;
}
.submit{
	margin-top: 50px;
}
</style>

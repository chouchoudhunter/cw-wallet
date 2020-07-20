<template>
	<view>
		<view class="content">
			<navbar title="留言/工单" :backBtn="true">
				<view class="record" slot="right" @click="toHistory()">历史留言</view>
			</navbar>
			<p>留言</p>
			<view class="text">	
				<textarea maxlength="200" value="" placeholder="请输入内容..." />
			</view>
			<c-input inputText="*联系人" placeholder="请输入联系人" cStyle="box1"></c-input>
			<c-input inputText="*手机号" placeholder="请输入手机号" cStyle="box1"></c-input>
			<c-input inputText="*验证码" placeholder="请输入验证码" cStyle="box1" :isGroup="true"></c-input>
			<c-button class="but">确认提交</c-button>			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			//跳转到 历史留言
			toHistory(){
				uni.navigateTo({
					url: '../history/history'
				});
			}
		}
	}
</script>

<style lang="scss">
.content{
	margin: 21px 12px 0 12px;
	p{
		font-size: 15px;
		margin-bottom: 12px;
	}
	.text{
		border-radius: 2px;
		background-color: $uni-bg-color;
		padding: 12px;
	}
	textarea{
		font-size: 14px;
		width: 100%;
	}
}
.but{
	margin-top: 65px;
}
</style>

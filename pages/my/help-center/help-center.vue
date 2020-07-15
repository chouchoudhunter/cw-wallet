<template>
	<view id="helpCenter">
		<navbar title="帮助中心" :backBtn="true"></navbar>
		<view class="list">			
			<rectangle leftText="文章列表" :leftIcon="false"></rectangle>
			<rectangle leftText="客服中心" :leftIcon="false"></rectangle>
			<rectangle leftText="电话咨询" :leftIcon="false" rightText="028-5246271"></rectangle>
			<rectangle leftText="留言/工单" :leftIcon="false" @click="toMessage()"></rectangle>
			<rectangle leftText="关于我们" :leftIcon="false"></rectangle>
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
			//跳转到 留言/工单
			toMessage(){
				uni.navigateTo({
					url: '../leave-message/leave-message'
				});
			}
		}
	}
</script>

<style lang="scss">
.list{
	margin: 15px 0 0 0;
}
</style>

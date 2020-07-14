<template>
	<view>
		<navbar title="添加好友" :backBtn="true"></navbar>
		<view class="list">			
			<rectangle leftText="手机联系人" :iconSrc="require('@/static/icon/member/contact.png')"></rectangle>
			<rectangle leftText="扫一扫" :iconSrc="require('@/static/icon/member/scan.png')"></rectangle>
			<rectangle leftText="附近的人" :iconSrc="require('@/static/icon/member/nearpeople.png')"
			@click="nearby()"></rectangle>
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
			nearby(){
				uni.navigateTo({
					url: '../nearby/nearby'
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

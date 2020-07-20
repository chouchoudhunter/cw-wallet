<template>
	<view>
		<navbar title="留言回复" :backBtn="true"></navbar>
		<view class="text">
			<textarea maxlength="200" value="" placeholder="请输入留言回复" />
		</view>
		<c-button class="but">发送</c-button>
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
.text{
	border-radius: 6px;
	background-color: $uni-bg-color;
	padding: 12px;
	margin: 36px 12px 0 12px;	
}
textarea{
	font-size: 14px;
	width: 100%;
}	
.but{
	margin: 65px 12px 0 12px;
}
</style>

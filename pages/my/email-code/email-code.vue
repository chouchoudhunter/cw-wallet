<template>
	<view>
		<navbar title="绑定邮箱" :backBtn="true"></navbar>
		<c-input class="in" cTextAlign="right" inputText="验证码" cStyle="box" placeholder="请输入验证码"></c-input>
		<c-button class="but" cFontSize="17px">确定</c-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		
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
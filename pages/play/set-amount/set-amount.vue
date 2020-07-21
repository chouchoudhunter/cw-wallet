<template>
	<view>
		<navbar title="设置金额" :backBtn="true"></navbar>
		<c-input class="input" cStyle="box1" inputText="金额" placeholder="" cFontSize="20px">
			<image slot="right" src="../../../static/icon/close.png" mode=""></image>
		</c-input>
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
.input{
	image{
		width: 16px;
		height: 16px;
		margin: auto 0;
		padding-right: 12px;
	}
}

</style>

<template>
	<view>
		<navbar title="历史留言" :backBtn="true"></navbar>
		<view class="style1">
			<P class="leave-time">2020-02-02 10:11</P>
			<view class="leave-content">留言1<br>留言1</view>
		</view>
		<view class="style2">
			<P class="leave-time">2020-02-02 10:11</P>
			<view class="leave-content">留言2<br>留言2</view>
			<p class="reply">回复：你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</p>
		</view>
		
		
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
.style1{
	margin: 15px 12px 12px 12px;
	.leave-time{
		font-size: 12px;
		color: #888888;
		margin-bottom: 10px;
		text-align: center;
	}
	.leave-content{
		font-size: 15px;
		padding: 12px 10px;
		background-color: $uni-bg-color;
		border-radius: 4px;
	}
}
.style2{
	margin: 15px 12px 12px 12px;
	.leave-time{
		font-size: 12px;
		color: #888888;
		margin-bottom: 10px;
		text-align: center;
	}
	.leave-content{
		font-size: 15px;
		padding: 12px 10px;
		background-color: $uni-bg-color;
		border-radius: 4px;
	}
	.reply{
		font-size: 15px;
		padding: 0 12px;
		margin-top: 8px;
	}
}
</style>

<template>
	<view id="collected-list">
		<navbar title="收藏列表" :backBtn="true"></navbar>		
		<view class="article-style1" @click="toArticleDetails()">
			<view class="title">生意人|异乡打拼的你，最初的热血被现实浇凉了吗？</view>
			<view class="picture">
				<view class="img"></view>
				<view class="img"></view>
				<view class="img"></view>
			</view>
			<view class="time">2020-06-24 15:29</view>
		</view>
		<view class="article-style2">
			<view class="title-time">
				<view class="title">用长城钱包时，遇到问题该怎么办？</view>
				<view class="time">2020-06-24 11:29</view>
			</view>
			<view class="img"></view>
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
			//跳转到 文章详情
			toArticleDetails(){
				uni.navigateTo({
					url: '../article-details/article-details'
				});
			},
		}
	}
</script>

<style lang="scss">

.article-style1{
	padding: 15px 12px;
	margin-bottom: 5px;
	background-color: $uni-bg-color;
	.title{
		font-size: 14px;
	}
	.picture{
		display: flex;
		// justify-content: space-between;
		margin: 14px 0;
		.img{
			width: 100px;
			height: 100px;
			margin-right: 15px;
			background-color: #C0C0C0;
			border-radius: 2px;
		}
	}
	.time{
		font-size: 12px;
		color: #888888;
	}
}
.article-style2{
	padding: 15px 12px;
	margin-bottom: 5px;
	background-color: $uni-bg-color;
	display: flex;
	.title-time{
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		.title{
			font-size: 14px;
			margin-bottom: 30px;
		}
		.time{
			font-size: 12px;
			color: #888888;
		}
	}
	.img{
		width: 166px;
		height: 113px;
		background-color: #C0C0C0;
		border-radius: 2px;
	}
}
</style>


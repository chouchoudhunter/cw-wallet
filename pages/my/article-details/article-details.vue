<template>
	<view id="article-details">
		<navbar title="文章详情" :backBtn="true"></navbar>
		<view class="article">
			<h1 class="title">异乡打拼的你，最初的热血被现实浇凉了吗？</h1>
			<view class="author-time">
				<p class="author">作者：按时吃饭</p>
				<p class="time">6天前</p>
			</view>
			<view class="content" >
				<p>栏目导语 “平安钱包300多万的商家，每一个都有着属于自己的故事：烈日下流着汗水卸货，寒风中搓着双手打开店门；你看过凌晨的月光，也见过早上的太阳。生意人——我们听你说。”</p>
				<p>南方潮湿炎热的夏季，北国寒风凛冽的冬天。同亲人打电话时不小心流露的哽咽，夜深人静时无人能道的心酸......</p>				
				<p>异乡打拼，有过没钱买车票回家过年的窘迫，有过在车水马龙的立交桥上崩溃大哭的瞬间，在外打拼，遇到的困难比想象的还要多。</p>				
				<p>你是否问过自己，当初的一腔热血被现实浇凉了吗？</p>
				<p>栏目导语 “平安钱包300多万的商家，每一个都有着属于自己的故事：烈日下流着汗水卸货，寒风中搓着双手打开店门；你看过凌晨的月光，也见过早上的太阳。生意人——我们听你说。”</p>
				<p>南方潮湿炎热的夏季，北国寒风凛冽的冬天。同亲人打电话时不小心流露的哽咽，夜深人静时无人能道的心酸......</p>				
				<p>异乡打拼，有过没钱买车票回家过年的窘迫，有过在车水马龙的立交桥上崩溃大哭的瞬间，在外打拼，遇到的困难比想象的还要多。</p>				
				<p>你是否问过自己，当初的一腔热血被现实浇凉了吗？</p>
				<p>栏目导语 “平安钱包300多万的商家，每一个都有着属于自己的故事：烈日下流着汗水卸货，寒风中搓着双手打开店门；你看过凌晨的月光，也见过早上的太阳。生意人——我们听你说。”</p>
				<p>南方潮湿炎热的夏季，北国寒风凛冽的冬天。同亲人打电话时不小心流露的哽咽，夜深人静时无人能道的心酸......</p>				
				<p>异乡打拼，有过没钱买车票回家过年的窘迫，有过在车水马龙的立交桥上崩溃大哭的瞬间，在外打拼，遇到的困难比想象的还要多。</p>				
				<p>你是否问过自己，当初的一腔热血被现实浇凉了吗？</p>
			</view>
			<view class="img">
				
			</view>
		</view>
		<view class="collect" @click="collected()">
			<image src="@/static/icon/my/collect.png"></image>
			<p ref="aaa">收藏</p>
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
			//按下显示已收藏
			collected(){
				if(this.$refs.aaa.innerText=='收藏')
					this.$refs.aaa.innerText='已收藏';
				else this.$refs.aaa.innerText='收藏';
			}
		}
	}
</script>

<style lang="scss">

.article{
	margin: 25px 12px;
	h1{
		font-size: 15px;
	}
	.author-time{
		display: flex;
		p{			
			font-size: 13px;
			color: #666666;
			margin: 15px 10px 15px 0;
		}
	}
	.content{
		text-indent:2em;
		font-size: 14px;
		color: #2D2D2D;
		line-height: 20px;
		p{
			margin-bottom: 4px;
		}
	}
	.img{
		height: 175px;
		margin-top: 20px20rpx;
		background-color: #666666;		
	}
}
.collect{
	position: fixed;
	bottom: 80px;
	right: 15px;
	width: 50px;
	height: 50px;
	border-radius: 25px;
	background-color: $uni-bg-color;
	text-align: center;
	image{
		width: 25px;
		height: 25px;
		vertical-align: middle;
	}
	p{
		font-size: 11px;
		color: #666666;
	}
}
</style>

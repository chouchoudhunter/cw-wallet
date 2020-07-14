<template>
	<view id="friend">
		<navbar title="好友列表">
			<view slot="right">
				<uni-icons type="plus" color="#FFFFFF" size="24"></uni-icons>
			</view>
		</navbar>
		<view class="search">
			<span></span>
			<p>关键词搜索</p>
		</view>
		<view class="list">
			<view>
				<view class="item">
					<view class="img"></view>
					<view class="text">
						<h1>王德</h1>
						<p>昵称:生辉</p>
					</view>
				</view>
				<view class="hr"></view>
			</view>
			<view>
				<view class="item">
					<view class="img"></view>
					<view class="text">
						<h1>王德</h1>
						<p>昵称:生辉</p>
					</view>
				</view>
				<view class="hr"></view>
			</view>
			<view>
				<view class="item">
					<view class="img"></view>
					<view class="text">
						<h1>王德</h1>
						<p>昵称:生辉</p>
					</view>
				</view>
				<view class="hr"></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title:'sdfsfd'
		};
	},
	methods: {}
};
</script>

<style lang="scss">
#friend{
	background-color:$uni-bg-color;
}
.search {
	display: flex;
	flex-direction: row;
	justify-content: center;
	font-size: 16px;
	text-align: center;
	background-color: #efefef;
	margin: 15px 20px;
	padding: 5px;
	border-radius: 7px;
	color: #767676;
}
.list {
	padding: 0 20px;
	.item {
		display: flex;
		flex-direction: row;
		align-items: center;
		.img {
			width: 70px;
			height: 70px;
			background-color: #dedede;
			border-radius: 5px;
		}
		.text {
			margin-left: 10px;
			line-height: 30px;
			h1 {
				font-size: 18px;
			}
			p {
				font-size: 14px;
				color: #868686;
			}
		}
	}
	.hr {
		height: 1px;
		background-color: #dddddd;
		margin: 20px 0;
	}
}
</style>

<template>
	<view>
		<uni-nav-bar title="好友列表" backgroundColor="#f00004" border="false" color="#FFFFFF"><view slot="right"></view></uni-nav-bar>
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
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
export default {
	components: { uniNavBar },
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss">
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

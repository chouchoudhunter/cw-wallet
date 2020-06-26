<template>
	<view>
		<view class="top-bg"></view>
		<uni-nav-bar title="吃喝玩乐首页" backgroundColor="#ff0004" border="false" color="#FFFFFF"><view slot="left">成都</view></uni-nav-bar>
		<view class="slider">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" indicator-dots="true" autoplay="true" :interval="interval" :duration="duration">
						<swiper-item><view class="swiper-item">A</view></swiper-item>
						<swiper-item><view class="swiper-item">B</view></swiper-item>
						<swiper-item><view class="swiper-item">C</view></swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="quick-link">
			<ul>
				<li class="link-item"></li>
				<li class="link-item"></li>
				<li class="link-item"></li>
			</ul>
			<ul>
				<li class="link-item"></li>
				<li class="link-item"></li>
				<li class="link-item"></li>
			</ul>
		</view>
		<view class="discount">
			<scroll-view scroll-y="true" class="scroll">
				<view id="demo1" class="scroll-view-item">
					<view class="img"></view>
					<view class="text">
						<h1>陈多多仙草屋(人民公园店)</h1>
						<p>2020-05-23 12:09~2020-05-23 12:09</p>
					</view>
					<view class="button">
						<p>￥120</p>
						<view class="b-button">去使用</view>
					</view>
				</view>
				<view id="demo2" class="scroll-view-item">
					<view class="img"></view>
					<view class="text">
						<h1>陈多多仙草屋(人民公园店)</h1>
						<p>2020-05-23 12:09~2020-05-23 12:09</p>
					</view>
					<view class="button">
						<p>￥120</p>
						<view class="b-button">去使用</view>
					</view>
				</view>
				<view id="demo3" class="scroll-view-item">
					<view class="img"></view>
					<view class="text">
						<h1>陈多多仙草屋(人民公园店)</h1>
						<p>2020-05-23 12:09~2020-05-23 12:09</p>
					</view>
					<view class="button">
						<p>￥120</p>
						<view class="b-button">去使用</view>
					</view>
				</view>
				<view id="demo3" class="scroll-view-item">
					<view class="img"></view>
					<view class="text">
						<h1>陈多多仙草屋(人民公园店)</h1>
						<p>2020-05-23 12:09~2020-05-23 12:09</p>
					</view>
					<view class="button">
						<p>￥120</p>
						<view class="b-button">去使用</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
export default {
	components: { uniNavBar },
	data() {
		return {
			title: 'Hello',
			interval: 2000,
			duration: 500
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="scss">
.slider {
	.swiper-item {
		background-color: #ececec;
		height: 100%;
	}
}
.top-bg {
}
.quick-link {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 20px;
	ul {
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 20px;
		.link-item {
			width: 60px;
			height: 60px;
			background-color: #f3f3f3;
			border-radius: 10px;
			text-align: center;
			margin: 0 25px;
		}
	}
}
.discount {
	.scroll {
		background-color: #ebebeb;
		.scroll-view-item {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin: 10px 10px;
			background-color: #ffffff;
			border-radius: 5px;
			padding: 10px;
			.img {
				width: 70px;
				height: 70px;
				background-color: #f1f1f1;
			}
			.text {
				padding: 0 10px;
				flex-grow: 1;
				vertical-align: middle;
				h1 {
					font-size: 14px;
				}
				p {
					font-size: 10px;
					color: #8d8d8d;
				}
			}
			.button {
				text-align: center;
				p {
					font-size: 14px;
					color: #ff0004;
				}
				.b-button {
					width: 50px;
					border: none;
					background-color: #ff0004;
					color: #ffffff;
					font-size: 14px;
					padding: 2px 5px;
					border-radius: 3px;
				}
			}
		}
	}
}
</style>

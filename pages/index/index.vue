<template>
	<view>
		<view class="top-bg"></view>
		<navbar title="吃喝玩乐首页" leftText="成都">
			<view slot="left" style="height: 18px;"><image src="../../static/icon/location.png" id="navbar-icon"></image></view>
		</navbar>
		<view class="slider">
			<swiper class="swiper" indicator-dots="true" autoplay="true" :interval="interval" :duration="duration">
				<swiper-item><view class="swiper-item">A</view></swiper-item>
				<swiper-item><view class="swiper-item">B</view></swiper-item>
				<swiper-item><view class="swiper-item">C</view></swiper-item>
			</swiper>
		</view>
		<view class="quick-link">
			<ul>
				<li class="link-item" @click="scan()"></li>
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
export default {
	data() {
		return {
			title: 'Hello',
			interval: 2000,
			duration: 500
		};
	},
	onLoad() {},
	methods: {
		scan() {
			uni.navigateTo({
				url: '../register/login/login'
			});
		}
	}
};
</script>

<style lang="scss">
.slider {
	margin: 10px 15px;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0px 0px 8px 0px #9c9c9c;
	.swiper-item {
		background-color: #ececec;
		height: 100%;
	}
}
.bg-content {
	display: flex;
	
	.top-bg {
		position: absolute;
		background-color: $cw-base-color;
		height: 100px;
		width: 100px;
		}
}

#navbar-icon {
	width: 18px;
	height: 18px;
	margin-left: 2px;
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
			background-color: red;
			border-radius: 10px;
			text-align: center;
			margin: 0 25px;
		}
	}
}
.discount {
	.scroll {
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

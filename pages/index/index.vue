<template>
	<view>
		<navbar title="吃喝玩乐首页" leftText="成都">
			<view slot="left" style="height: 18px;"><image src="../../static/icon/location.png" id="navbar-icon"></image></view>
		</navbar>
		<view class="background-white">
			<view class="top-bg"></view>
			<view class="slider">
				<swiper class="swiper" indicator-dots="true" autoplay="true" :interval="interval" :duration="duration">
					<swiper-item><view class="swiper-item">A</view></swiper-item>
					<swiper-item><view class="swiper-item">B</view></swiper-item>
					<swiper-item><view class="swiper-item">C</view></swiper-item>
				</swiper>
			</view>

			<view class="quick-link">
				<ul>
					<li class="link-item" @click="toScanCode()">
						<image src="../../static/icon/index/scan.png" mode=""></image>
						<view class="title">扫一扫</view>
					</li>
					<li class="link-item" @click="toReceive()">
						<image src="../../static/icon/index/receive.png" mode=""></image>
						<view class="title">收款</view>
					</li>
					<li class="link-item" @click="toPay()">
						<image src="../../static/icon/index/pay.png" mode=""></image>
						<view class="title">付款</view>
					</li>
				</ul>
				<ul>
					<li class="link-item" @click="toTransfer()">
						<image src="../../static/icon/index/transfer.png" mode=""></image>
						<view class="title">转账</view>
					</li>
					<li class="link-item" @click="toNearby()">
						<image src="../../static/icon/index/nearby.png" mode=""></image>
						<view class="title">附近优惠</view>
					</li>
					<li class="link-item" @click="toNotice()">
						<image src="../../static/icon/index/notice.png" mode=""></image>
						<view class="title">通知</view>
					</li>
				</ul>
			</view>
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
		//跳转到 扫一扫
		toScanCode() {
			uni.navigateTo({
				url: '../my/scan-qr-code/scan-qr-code'
			});
		},
		//跳转到 收款
		toReceive() {
			uni.navigateTo({
				url: '../play/receive-code/receive-code'
			});
		},
		//跳转到 付款
		toPay() {
			uni.navigateTo({
				url: '../play/pay-code/pay-code'
			});
		},
		//跳转到 转账
		toTransfer() {
			uni.navigateTo({
				url: '../play/transfer-accounts/transfer-accounts'
			});
		},
		//跳转到 附近商家
		toNearby() {
			uni.navigateTo({
				url: '../play/nearby-shops/nearby-shops'
			});
		},
		//跳转到 消息通知
		toNotice() {
			uni.navigateTo({
				url: '../play/message-notice/message-notice'
			});
		}
	}
};
</script>

<style lang="scss">
.background-white {
	background-color: #ffffff;
	padding-top: 10px;
}
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
.top-bg {
	background-color: $cw-base-color;
	height: 300px;
	width: 200%;
	border-radius: 50%;
	position: absolute;
	top: -150px;
	margin-left: -50%;
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
			margin: 0 25px;
			text-align: center;
			image {
				width: 54px;
				height: 54px;
				border-radius: 10px;
			}
			.title {
				font-size: 13px;
			}
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

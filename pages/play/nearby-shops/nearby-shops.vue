<template>
	<view>
		<navbar title="附近商家" :backBtn="true"></navbar>
		<view class="slider">
			<swiper class="swiper" indicator-dots="true" autoplay="true" :interval="interval" :duration="duration">
				<swiper-item><view class="swiper-item">A</view></swiper-item>
				<swiper-item><view class="swiper-item">B</view></swiper-item>
				<swiper-item><view class="swiper-item">C</view></swiper-item>
			</swiper>
		</view>
		<view class="shop-nav">
			<!-- 导航栏 -->
			<view :class="{ 'style-black':true, 'style-red': menuActive[0] }" ref="pop" @click="goActiveList(0)">人气商家</view>
			<view :class="{ 'style-black':true, 'style-red': menuActive[1]}" @click="goActiveList(1)">品牌商家</view>
			<view :class="{ 'style-black':true, 'style-red': menuActive[2] }" @click="goActiveList(2)">推荐商家</view>
			<view :class="{ 'style-black':true, 'style-red': menuActive[3]}" @click="goActiveList(3)">最新入驻</view>
			<view :class="{ 'style-black':true, 'style-red': menuActive[4] }" @click="goActiveList(4)">距离最近</view>
		</view>
		<view class="shop-list" v-for="(item, index) in nowlist" :key="index">
			<view class="shop-left">
				<image class="picture" :src="item.picture" mode=""></image>
				<!-- <view class="picture">item.picture</view> -->
				<view class="name-address">
					<view class="name">{{ item.name }}</view>
					<view class="address">{{ item.address }}</view>
				</view>
			</view>
			<view class="shop-right">
				<image class="location" src="@/static/icon/location-red.png" mode=""></image>
				<view class="distance">{{ item.distance }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentActive: 0,
			menuActive: [true, false, false, false, false],
			interval: 2000,
			duration: 500,
			nowlist: [{ picture: '', name: '1', address: '', distance: '' }, { picture: '', name: '2', address: '', distance: '' }],
			shopLists: [
				//推荐商家
				[
					{ picture: '@/static/logo.png', name: '买的多（富力桃园店）', address: '成都市新都区富力桃园267号', distance: '2.0km' },
					{ picture: '', name: '肯德基（音乐学院店）', address: '成都市新都区音乐学院223号', distance: '3.3km' },
					{ picture: '', name: '三只松鼠（音乐学院店）', address: '成都市新都区音乐学院187号', distance: '1.7km' },
					{ picture: '', name: '良家铺子（音乐学院店）', address: '成都市新都区音乐学院123号', distance: '5.4km' },
					{ picture: '', name: '肯德基（音乐学院店）', address: '成都市新都区音乐学院223号', distance: '3.3km' },
					{ picture: '', name: '三只松鼠（音乐学院店）', address: '成都市新都区音乐学院187号', distance: '1.7km' },
					{ picture: '', name: '良家铺子（音乐学院店）', address: '成都市新都区音乐学院123号', distance: '5.4km' }
				],
				//品牌商家
				[
					{ picture: '', name: '买的多（富力桃园店）', address: '成都市新都区富力桃园267号', distance: '2.0km' },
					{ picture: '', name: '肯德基（音乐学院店）', address: '成都市新都区音乐学院223号', distance: '3.3km' }
				],
				//推荐商家
				[
					{ picture: '', name: '买的多（富力桃园店）', address: '成都市新都区富力桃园267号', distance: '2.0km' },
					{ picture: '', name: '肯德基（音乐学院店）', address: '成都市新都区音乐学院223号', distance: '3.3km' },
					{ picture: '', name: '肯德基（音乐学院店）', address: '成都市新都区音乐学院223号', distance: '3.3km' },
					{ picture: '', name: '肯德基（音乐学院店）', address: '成都市新都区音乐学院223号', distance: '3.3km' },
					{ picture: '', name: '肯德基（音乐学院店）', address: '成都市新都区音乐学院223号', distance: '3.3km' }
				],
				//最新入驻
				[
					{ picture: '', name: '买的多（富力桃园店）', address: '成都市新都区富力桃园267号', distance: '2.0km' },
					{ picture: '', name: '肯德基（音乐学院店）', address: '成都市新都区音乐学院223号', distance: '3.3km' },
					{ picture: '', name: '肯德基（音乐学院店）', address: '成都市新都区音乐学院223号', distance: '3.3km' }
				],
				//距离最近
				[{ picture: '', name: '买的多（富力桃园店）', address: '成都市新都区富力桃园267号', distance: '2.0km' }]
			]
		};
	},
	methods: {
		//跳转
		goActiveList(listIndex) {
			this.menuActive[this.currentActive] = false;
			this.currentActive = listIndex;
			this.menuActive[listIndex]=true;
			this.nowlist = this.shopLists[this.currentActive];
		}
	},
	mounted() {
		this.nowlist = this.shopLists[this.currentActive];
	}
};
</script>

<style lang="scss">
.slider {
	background-color: #999999;
}
.shop-nav {
	display: flex;
	height: 40px;
	background-color: $uni-bg-color;
	font-size: 14px;
	line-height: 40px;
	text-align: center;
	.style-red {
		width: 20%;
		color: $cw-base-color;
		border-bottom: solid 2px $cw-base-color;
	}
	.style-black {
		width: 20%;
		// color:$cw-base-color;
		// border-bottom: solid 2px $cw-base-color;
	}
}
.shop-list {
	height: 60px;
	margin: 12px;
	padding: 10px;
	border-radius: 6px;
	background-color: $uni-bg-color;
	display: flex;
	align-items: center;
	flex-grow: 1;
	.shop-left {
		display: flex;
		align-items: center;
		flex-grow: 1;
		.picture {
			width: 60px;
			height: 60px;
			margin-right: 15px;
			border-radius: 4px;
			background-color: #c0c0c0;
		}
		.name-address {
			.name {
				font-size: 14px;
				margin-bottom: 8px;
			}
			.address {
				font-size: 11px;
				color: #888888;
			}
		}
	}
	.shop-right {
		display: flex;
		.location {
			width: 12px;
			height: 17px;
			margin-right: 7px;
		}
		.distance {
			width: 50px;
			font-size: 12px;
		}
	}
}
</style>

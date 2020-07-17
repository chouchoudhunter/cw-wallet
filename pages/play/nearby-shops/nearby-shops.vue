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
		<view class="shop-nav">  <!-- 导航栏 -->
			<view :class="style" ref="pop" @click="goPopular()">人气商家</view>
			<view :class="style" @click="goBrand()">品牌商家</view>
			<view :class="style" @click="goRecommend()">推荐商家</view>
			<view :class="style" @click="goNewest()">最新入驻</view>
			<view :class="style" @click="goClosest()">距离最近</view>
		</view>
		<view class="shop-list" v-for="item in nowlist" :key="item">
			<view class="shop-left">
				<image class="picture" :src="item.picture" mode=""></image>
				<!-- <view class="picture">item.picture</view> -->
				<view class="name-address">
					<view class="name">{{item.name}}</view>
					<view class="address">{{item.address}}</view>
				</view>
			</view>
			<view class="shop-right">
				<image class="location" src="@/static/icon/location-red.png" mode=""></image>
				<view class="distance">{{item.distance}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				style:'style1',
				nowlist:[
					{picture:'',name:'1',address:'',distance:''},
					{picture:'',name:'2',address:'',distance:''},
				],
				//推荐商家
				popular:[
					{picture:'@/static/logo.png',name:'买的多（富力桃园店）',address:'成都市新都区富力桃园267号',distance:'2.0km'},
					{picture:'',name:'肯德基（音乐学院店）',address:'成都市新都区音乐学院223号',distance:'3.3km'},
					{picture:'',name:'三只松鼠（音乐学院店）',address:'成都市新都区音乐学院187号',distance:'1.7km'},
					{picture:'',name:'良家铺子（音乐学院店）',address:'成都市新都区音乐学院123号',distance:'5.4km'},
					{picture:'',name:'肯德基（音乐学院店）',address:'成都市新都区音乐学院223号',distance:'3.3km'},
					{picture:'',name:'三只松鼠（音乐学院店）',address:'成都市新都区音乐学院187号',distance:'1.7km'},
					{picture:'',name:'良家铺子（音乐学院店）',address:'成都市新都区音乐学院123号',distance:'5.4km'},
				],
				//品牌商家
				brand:[
					{picture:'',name:'买的多（富力桃园店）',address:'成都市新都区富力桃园267号',distance:'2.0km'},
					{picture:'',name:'肯德基（音乐学院店）',address:'成都市新都区音乐学院223号',distance:'3.3km'},
				],
				//推荐商家
				recommend:[
					{picture:'',name:'买的多（富力桃园店）',address:'成都市新都区富力桃园267号',distance:'2.0km'},
					{picture:'',name:'肯德基（音乐学院店）',address:'成都市新都区音乐学院223号',distance:'3.3km'},
					{picture:'',name:'肯德基（音乐学院店）',address:'成都市新都区音乐学院223号',distance:'3.3km'},
					{picture:'',name:'肯德基（音乐学院店）',address:'成都市新都区音乐学院223号',distance:'3.3km'},
					{picture:'',name:'肯德基（音乐学院店）',address:'成都市新都区音乐学院223号',distance:'3.3km'},
				],
				//最新入驻
				newest:[
					{picture:'',name:'买的多（富力桃园店）',address:'成都市新都区富力桃园267号',distance:'2.0km'},
					{picture:'',name:'肯德基（音乐学院店）',address:'成都市新都区音乐学院223号',distance:'3.3km'},
					{picture:'',name:'肯德基（音乐学院店）',address:'成都市新都区音乐学院223号',distance:'3.3km'},
				],
				//距离最近
				closest:[
					{picture:'',name:'买的多（富力桃园店）',address:'成都市新都区富力桃园267号',distance:'2.0km'},
				]
			};
		},
		methods:{
			//跳转到 人气商家
			goPopular(){
				this.style='style2';
				this.nowlist=JSON.parse(JSON.stringify(this.popular));
			},
			//跳转到 品牌商家
			goBrand(){
				this.nowlist=JSON.parse(JSON.stringify(this.brand));
			},
			//跳转到 推荐商家
			goRecommend(){
				this.nowlist=JSON.parse(JSON.stringify(this.recommend));
			},
			//跳转到 最新入驻
			goNewest(){
				this.nowlist=JSON.parse(JSON.stringify(this.newest));
			},
			//跳转到 距离最近
			goClosest(){
				this.nowlist=JSON.parse(JSON.stringify(this.closest));
			},
		},
		mounted(){
			this.nowlist=JSON.parse(JSON.stringify(this.popular));
		}		
	}
</script>

<style lang="scss">
.slider{
	background-color: #999999;
}
.shop-nav{
	display: flex;
	height: 40px;
	background-color: $uni-bg-color;
	font-size: 14px;
	line-height: 40px;
	text-align: center;
	.style1{
		width: 20%;
		// color:$cw-base-color;		
		// border-bottom: solid 2px $cw-base-color;
	}
	.style2{
		width: 20%;
		color:$cw-base-color;		
		border-bottom: solid 2px $cw-base-color;
	}
}
.shop-list{
	height: 60px;
	margin: 12px;
	padding: 10px;
	border-radius: 6px;
	background-color: $uni-bg-color;
	display: flex;
	align-items: center;
	flex-grow: 1;
	.shop-left{
		display: flex;
		align-items: center;
		flex-grow: 1;
		.picture{
			width: 60px;
			height: 60px;
			margin-right: 15px;
			border-radius: 4px;
			background-color: #C0C0C0;
		}
		.name-address{
			.name{
				font-size: 14px;
				margin-bottom: 8px;
			}
			.address{
				font-size: 11px;
				color: #888888;
			}
		}
	}
	.shop-right{
		display: flex;
		.location{
			width: 12px;
			height: 17px;
			margin-right: 7px;
		}
		.distance{
			width: 50px;
			font-size: 12px;
		}
	}
}
</style>

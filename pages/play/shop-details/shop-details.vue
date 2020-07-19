<template>
	<view id="shop-details">
		<navbar title="商家详情" :backBtn="true"></navbar>
		<view class="slider">
			<swiper class="swiper" indicator-dots="true" autoplay="true" :interval="interval" :duration="duration">
				<swiper-item><view class="swiper-item">A</view></swiper-item>
				<swiper-item><view class="swiper-item">B</view></swiper-item>
				<swiper-item><view class="swiper-item">C</view></swiper-item>
			</swiper>
		</view>
		<view class="shop-infor">
			<view class="name">I DO新都区婚纱摄影店I DO新都区婚纱摄影店I DO新都区婚纱摄影店</view>
			<view class="location">
				<view class="location-left">
					<image src="@/static/icon/location@2x.png" mode=""></image>
					<view class="address">
						<view class="address1">新都区容地大道南四段189号新城市广场四楼</view>
						<view class="address2">距离3号线地铁三河场站步行1658米</view>
					</view>
				</view>
				<view class="location-right">导航</view>
			</view>	
			<view class="tel-share">
				<view class="tel">联系电话：16267919879</view>
				<view class="share">
					<image class="img" src="@/static/icon/share.png" mode=""></image>
					<view class="title">分享</view>
				</view>
			</view>
		</view>
		<view class="open-time">
			<text class="time-title">营业时间</text>
			9:00 - 21:00		
		</view>
		<view class="introduce">
			<text>商家简介：</text>
			该店位于新都新城市广场四楼，环境优美，我们i do的由来埃菲尔铁塔是全球爱情朝圣地。
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				interval: 2000,
				duration: 500,
			};
		}
	}
</script>

<style lang="scss">
#shop-details{
	background-color: $uni-bg-color;
	height: 100%;
}
.slider {
	background-color: #999999;
}
.shop-infor{
	padding: 15px 12px 12px 12px;
	border-bottom: solid 5px $cw-background-grey;
	.name{
		font-size: 17px;
	}
	.location{
		display: flex;
		margin-top: 20px;
		.location-left{
			display: flex;
			flex-grow: 1;
			image {
			width: 10px;
			height: 14px;
			margin: 2px 8px 0 0;		
			}
			.address{
				.address1{
					font-size: 12px;
					margin-bottom: 4px;
				}
				.address2{
					font-size: 10px;
					color: #888888;
				}
			}
		}
		.location-right{
			width: 50px;
			height: 22px;
			font-size: 12px;
			color: $cw-base-color;
			text-align: center;
			line-height: 22px;
			border: solid 0.5px $cw-base-color;
			border-radius: 11px;			
		}		
	}
	.tel-share{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 10px;
		.tel{
			flex-grow: 1;
			font-size: 13px;			
		}
		.share{
			display: flex;
			flex-direction: column;
			align-items: center;
			.img{
				width: 20px;
				height: 18px;
			}
			.title{
				font-size: 10px;
			}
		}
	}
}
.open-time{
		font-size: 12px;
		padding: 15px 12px;
		border-bottom: solid 2px $cw-background-grey;
		text{
			font-size: 15px;
			margin-right: 13px;
			padding-left: 10px;
			border-left: solid 2px  $cw-base-color;
		}	
	}
.introduce{
		font-size: 12px;
		padding: 15px 12px;
		text{
			font-size: 15px;
		}		
	}	
</style>

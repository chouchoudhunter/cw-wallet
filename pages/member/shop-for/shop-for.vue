<template>
	<view>
		<navbar :backBtn="true" ></navbar>
		<view class="slider">
			<swiper class="swiper" indicator-dots="true" autoplay="true" :interval="interval" :duration="duration">
				<swiper-item><view class="swiper-item">A</view></swiper-item>
				<swiper-item><view class="swiper-item">B</view></swiper-item>
				<swiper-item><view class="swiper-item">C</view></swiper-item>
			</swiper>
		</view>
		<view class="infor">
			店招名称：新都区梦幻婚礼婚纱摄影店<br>
            店铺地址：新都区容地大道南四段189号<br>
			经营范围：四川连锁店<br>
			联系电话：18765745642<br>
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
.slider {
	background-color: #999999;
}
.infor{
	margin: 21px 12px 0 12px;
	font-size: 15px;
	line-height: 2;
}
</style>

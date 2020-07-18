<template>
	<view>
		<navbar :backBtn="true"></navbar>
		<view class="slider">
			<swiper class="swiper" indicator-dots="true" autoplay="true" :interval="interval" :duration="duration">
				<swiper-item><view class="swiper-item">A</view></swiper-item>
				<swiper-item><view class="swiper-item">B</view></swiper-item>
				<swiper-item><view class="swiper-item">C</view></swiper-item>
			</swiper>
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
</style>

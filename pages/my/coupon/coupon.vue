<template>
	<view>
		<navbar title="优惠券" :backBtn="true"></navbar>
		<view class="tab-coupon">
			<view class="item-coupon">未使用</view>
			<view class="item-coupon">已使用</view>
			<view class="item-coupon">已过期</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.tab-coupon{
	display: flex;
	flex-direction: row;
	text-align: center;
	background-color: #FFFFFF;
	font-size: 14px;
	height: 44px;
	align-items: center;
	.item-coupon{
		flex-grow: 1;
	}
}
</style>

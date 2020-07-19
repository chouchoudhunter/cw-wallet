<template>
	<view>
		<navbar title="优惠券" :backBtn="true"></navbar>
		<view class="tab-coupon">
			<view class="item-coupon" @click="activeBtn(0)">
				<view class="text">未使用</view>
				<view :class="{'active-line':activeStatus[0]}"></view>
			</view>
			<view class="item-coupon" @click="activeBtn(1)">
				<view class="text">已使用</view>
				<view :class="{'active-line':activeStatus[0]}"></view>
			</view>
			<view class="item-coupon" @click="activeBtn(2)">
				<view class="text">已过期</view>
				<view :class="{'active-line':active}"></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			activeStatus:[true,false,false],
			currentActive:0,
			active:true,
		};
	},
	mounted() {
		
	},
	methods:{
		activeBtn(index){
			this.activeStatus[this.currentActive]=false;
			this.currentActive=index;
			this.activeStatus[index]=true;
			console.log(this.activeStatus);
			this.active=!this.active;
		}
	}
	
};
</script>

<style lang="scss">
.tab-coupon {
	display: flex;
	flex-direction: row;
	text-align: center;
	background-color: #ffffff;
	font-size: 14px;
	height: 44px;
	position: relative;
	border-bottom: #e2e2e2 1px solid;
	.item-coupon {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		height: 44px;
		align-items: center;
		.text{
			line-height: 41px;
			flex-grow: 1;
		}
		.active-line {
			height: 3px;
			background-color: $cw-base-color;
			width: 50%;
		}
	}
}
</style>

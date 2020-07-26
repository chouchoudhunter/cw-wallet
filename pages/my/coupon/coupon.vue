<template>
	<view>
		<navbar title="优惠券" :backBtn="true"></navbar>
		<view class="tab-coupon">
			<view class="item-coupon" @click="activeBtn(0)">
				<view class="text">未使用</view>
				<view :class="{ 'active-line': activeStatus[0].bool }"></view>
			</view>
			<view class="item-coupon" @click="activeBtn(1)">
				<view class="text">已使用</view>
				<view :class="{ 'active-line': activeStatus[1].bool }"></view>
			</view>
			<view class="item-coupon" @click="activeBtn(2)">
				<view class="text">已过期</view>
				<view :class="{ 'active-line': activeStatus[2].bool }"></view>
			</view>
		</view>
		<view class="coupon-items">
			<view class="coupon-item" :class="['coupon-item-bg'+(currentActive+1)]">
				<view class="count">
					￥100
				</view>
				<view class="desc">
					<view class="name">
						商家名称
					</view>
					<view class="date">
						2020.7.1-2020.9.31
					</view>
				</view>
				<view class="mark">
					去使用
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentActive: 0,
			activeStatus: [{ bool: true }, { bool: false }, { bool: false }],
			active: true
		};
	},
	mounted() {},
	methods: {
		activeBtn(index) {
			this.activeStatus[this.currentActive].bool = false;
			this.currentActive = index;
			this.activeStatus[index].bool = true;
			console.log(this.activeStatus);
			this.active = !this.active;
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
		.text {
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
.coupon-items {
	display: flex;
	flex-direction: column;
	.coupon-item-bg1{
		background-image: url('~@/static/recicon/coupon1.png');
		.count{
			color: $cw-base-color;
		}
		.desc{
			.name{
			}
			.date{
				color: #888888;
			}
		}
		.mark{
			color: #FFFFFF;
		}
	}
	.coupon-item-bg2{
		background-image: url('~@/static/recicon/coupon2.png');
		.count{
			color: $cw-base-color;
		}
		.desc{
			.name{
			}
			.date{
				color: #888888;
			}
		}
		.mark{
			opacity: 0;
		}
	}
	.coupon-item-bg3{
		background-image: url('~@/static/recicon/coupon3.png');
		color: #666666;
		.mark{
			opacity: 0;
		}
	}
	.coupon-item {
		flex-grow: 1;
		margin: 10px 15px;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height: 106px;
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
		.count{
			flex: 3.5;
			font-size: 30px;
			padding-left: 15px;
		}
		.desc{
			flex: 4.5;
			text-align: left;
			.name{
				font-size: 16px;
			}
			.date{
				font-size: 11px;
			}
		}
		.mark{
			flex: 2;
			font-size: 15px;
		}
	}
}
</style>

<template>
	<view>
		<navbar title="银行卡列表" :backBtn="true">
			<view slot="right" @click="toAddCard()">添加银行卡</view>
		</navbar>
		<view class="card-list">
			<view class="card-orange">
				<view class="card-left">
					<image src="../../../static/icon/my/bank-card.png" mode=""></image>
					<view class="name-type">
						<view class="name">中国平安银行</view>
						<view class="type">储蓄卡</view>
					</view>
				</view>
				<view class="card-right">****7831</view>
			</view>
			<view class="card-red">
				<view class="card-left">
					<image src="../../../static/icon/my/bank-card.png" mode=""></image>
					<view class="name-type">
						<view class="name">中国平安银行</view>
						<view class="type">储蓄卡</view>
					</view>
				</view>
				<view class="card-right">****7833</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			//跳转到 添加银行卡
			toAddCard(){
				uni.navigateTo({
					url: '../add-bank-card/add-bank-card'
				});
			}
		}
	}
</script>

<style lang="scss">
.card-list{
	padding: 0 12px;
	.card-orange{
		display: flex;
		align-items: center;
		padding: 18px 20px;
		margin: 10px 0;
		background: url(../../../static/icon/my/back-orange.png);
		background-size:  100% 100%;
		.card-left{
			flex-grow: 1;
			display: flex;
			image{
				width: 44px;
				height: 44px;
				margin-right: 13px;
			}
			.name-type{
				.name{
					font-size: 16px;
					color: #FFFFFF;
					margin-bottom: 7px;
				}
				.type{
					font-size: 14px;
					color: #FAE2E0;
				}
			}
		}
		.card-right{
			font-size: 14px;
			color: #FAE2E0;
		}
	}
	.card-red{
		display: flex;
		align-items: center;
		padding: 18px 20px;
		margin: 10px 0;
		background: url(../../../static/icon/my/back-red.png);
		background-size:  100% 100%;
		.card-left{
			flex-grow: 1;
			display: flex;
			image{
				width: 44px;
				height: 44px;
				margin-right: 13px;
			}
			.name-type{
				.name{
					font-size: 16px;
					color: #FFFFFF;
					margin-bottom: 7px;
				}
				.type{
					font-size: 14px;
					color: #FAE2E0;
				}
			}
		}
		.card-right{
			font-size: 14px;
			color: #FAE2E0;
		}
	}
}
</style>

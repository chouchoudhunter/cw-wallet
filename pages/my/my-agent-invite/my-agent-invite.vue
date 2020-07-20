<template>
	<view>
		<navbar title="我的代理" :backBtn="true"></navbar>
		<view class="my-agent">
			<view class="number-title">
				<view class="number">8家</view>
				<view class="title">推广商家</view>
			</view>
			<view class="number-title">
				<view class="number">10人</view>
				<view class="title">累计邀请</view>
			</view>
			<view class="number-title">
				<view class="number">0.00元</view>
				<view class="title">推广佣金</view>
			</view>
			<view class="number-title">
				<view class="number">0.00元</view>
				<view class="title">邀请佣金</view>
			</view>
		</view>
		<view class="user-list">
			<view class="user">
				<view class="img-name-money">
					<view class="img"></view>
					<view class="name-money">
						<view class="name">用户名称</view>
						<view class="money">邀请佣金<span>￥1.14</span></view>
					</view>
				</view>	
				<view class="tel-date">
					电话：17890247495<br>
					加入日期：2020-01-01
				</view>	
			</view>
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
.my-agent{
	display: flex;
	flex-wrap: wrap;
	background-color: $uni-bg-color;
	height: 148px;
	margin-bottom: 7px;
	.number-title{
		flex-shrink: 0;
		text-align: center;
		width: 50%;
		margin: 20px 0;
		.number{
			font-size: 13px;
			color: #888888;
		}
		.title{
			font-size: 15px;
		}
	}
}
.user-list{
	.user {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 12px;
		background-color: $uni-bg-color;
		.img-name-money {
			flex-grow: 1;
				display: flex;
			// margin: 13px 0 0 0;
			// .img-text {
			// 	display: flex;
			// 	flex-direction: row;
			// 	align-items: center;// }
				.img {
					width: 70px;
					height: 70px;
					background-color: #dedede;
					border-radius: 5px;
				
				.neme {
					margin-left: 10px;
					line-height: 30px;
	
					h1 {
						font-size: 16px;
						color: #333333;
					}
	
					p {
						font-size: 12px;
						color: #888888;
					}
				}
			}
		}
		.location {
			display: flex;
			align-items: center;
			margin-top: 10px;
			image {
				width: 12px;
				height: 17px;
				margin: 0 10px 0 0;
			}
	
			p {
				font-size: 12px;
				color: #333333;
			}
		}
	}
}
</style>
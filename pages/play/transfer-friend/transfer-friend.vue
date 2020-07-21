<template>
	<view id="transfer-friend">
		<navbar title="转到好友账户上" :backBtn="true"></navbar>
		<view class="friend">
			<view class="img"></view>
			<view class="name-tel">
				<view class="name">落日生辉（**毅）</view>
				<view class="tel">176****2787</view>
			</view>
		</view>
		
		<view class="amount">
			<p class="aaa">转账金额</p>
			<c-input inputText="¥" placeholder="" cFontSize="20px"></c-input>
		</view>
		<c-button class="but">确认转账</c-button>
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
#transfer-friend{
	background-color: $uni-bg-color;
	height: 100%;
	padding: 18px 12px 0 12px;
	.friend{
		display: flex;
		align-items: center;
		.img{
			width: 60px;
			height: 60px;
			background-color: #C8C7CC;
			margin-right: 8px;
		}
		.name-tel{
			line-height: 2;
			.name{
				font-size: 16px;
			}
			.tel{
				font-size: 12px;
				color: #888888;
			}
		}
	}
	.amount {
		margin-top: 26px;
		.aaa{
			font-size: 14px;
		}
	}	
	.but {
		margin-top: 50px;
	}
}
</style>

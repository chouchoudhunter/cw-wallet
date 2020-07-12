<template>
	<view style="background-color: #f0eff3;height: 100%;">
		<navbar title="添加好友" :backBtn="true"></navbar>
		<view class="content">			
			<view class="list-go">
				<view class="img-text">					
					<image class="contact" src="@/static/icon/member/contact.png" mode=""></image>
					<p>手机联系人</p>
				</view>
				<image class="arrows" src="@/static/icon/member/arrows.png" mode=""></image>
			</view>
			<view class="list-go">
				<view class="img-text">
					<image class="scan" src="@/static/icon/member/scan.png" mode=""></image>
					<p>扫一扫</p>
				</view>
				<image class="arrows" src="@/static/icon/member/arrows.png" mode=""></image>
			</view>
			<view class="list-go">
				<view class="img-text">
					<image class="near" src="@/static/icon/member/nearpeople.png" mode=""></image>
					<p>附近的人</p>
				</view>
				<image class="arrows" src="@/static/icon/member/arrows.png" mode=""></image>
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
.content {
	margin: 15px 0 0 0;
	.list-go {
		display: flex;
		height: 44px;
		margin: 0 0 8px 0;
		border-top: 1px solid #dddddd;
		border-bottom: 1px solid #dddddd;
		padding:0 15px;
		background-color: #FFFFFF;
		.img-text{
			display: flex;
			flex-direction: row;
			align-items: center;
			flex-grow: 1;
			.contact {
				width: 12.5px;
				height: 18px;
				padding: 0 0 0 2px;
			}
			.scan {
				width: 17px;
				height: 17px;
			}
			.near {
				width: 20px;
				height: 20px;
			}
			p {
				margin: 0 0 0 15px;
				font-size: 15px;
			}
		}
		.arrows {
			margin: 15px 0 0 0;
			width: 6.5px;
			height: 12px;			
		}
	}
	.list-go:active{
		background-color: #e8e8e8;
	}
}
</style>

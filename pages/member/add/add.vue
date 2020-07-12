<template>
	<view style="background-color: #f0eff3;height: 100%;">
		<navbar title="添加好友" :backBtn="true"></navbar>
		<view class="content">			
			<button>
				<view class="img-text">					
					<image class="contact" src="@/static/icon/member/contact.png" mode=""></image>
					<p>手机联系人</p>
				</view>
				<image class="arrows" src="@/static/icon/member/arrows.png" mode=""></image>
			</button>
			<button>
				<view class="img-text">
					<image class="scan" src="@/static/icon/member/scan.png" mode=""></image>
					<p>扫一扫</p>
				</view>
				<image class="arrows" src="@/static/icon/member/arrows.png" mode=""></image>
			</button>
			<button>
				<view class="img-text">
					<image class="near" src="@/static/icon/member/nearpeople.png" mode=""></image>
					<p>附近的人</p>
				</view>
				<image class="arrows" src="@/static/icon/member/arrows.png" mode=""></image>
			</button>
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
	button {
		display: flex;
		width: 375px;
		height: 44px;
		margin: 0 0 8px 0;
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
}
</style>

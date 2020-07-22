<template>
	<view>
		<navbar title="消息通知" :backBtn="true"></navbar>
		<view class="notice">
			<view class="img-time">
				<image src="../../../static/icon/clock.png" mode=""></image>
				<view class="time">2020/06/07 15:23</view>
			</view>
			<view class="notice-content">
				<view class="top">
					<view class="title">公告</view>
				</view>
				<view class="content">公告通知公告通知公告通知公告通知公告通知公告通知公告通知公告通知公告通知公告通知公告通知公告通知公告通知公告通知公告通知公告通知</view>
			</view>
		</view>
		<view class="notice">
			<view class="img-time">
				<image src="../../../static/icon/clock.png" mode=""></image>
				<view class="time">2020/06/07 15:23</view>
			</view>
			<view class="notice-content">
				<view class="top">
					<view class="title">好友通知
						<view class="red-dot"></view>	
					</view>
					<c-button cRadius="4px" cFontSize="13px" cHeight="0">同意</c-button>
				</view>
				<view class="content">“旅行的意义”请求添加你为好友！</view>
			</view>
		</view>	
		<view class="notice">
			<view class="img-time">
				<image src="../../../static/icon/clock.png" mode=""></image>
				<view class="time">2020/06/07 15:23</view>
			</view>
			<view class="notice-content">
				<view class="top">
					<view class="title">留言通知
						<view class="red-dot"></view>	
					</view>
				</view>
				<view class="content">您的留言得到了回复，点击查看详情...</view>
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
.notice{
	margin: 12px;
	.img-time{
		display: flex;
		align-items: center;
		image{
			width: 18px;
			height: 18px;
			margin-right: 8px;
		}
		.time{
			font-size: 12px;
		}
	}
	.notice-content{
		margin-top: 12px;
		border-radius: 8px;
		background-color: #FFFFFF;
		padding: 10px;
		.top{
			display: flex;
			align-items: center;
			padding-bottom: 12px;
			border-bottom: solid 1px #F4F4F4;
			.title{
				flex-grow: 1;
				display: flex;
				font-size: 16px;
				.red-dot{
					width: 6px;
					height: 6px;
					border-radius: 3px;
					background-color: #FF2121;
				}	
			}
		}
		.content{
			font-size: 14px;
			color: #666666;
			padding: 10px 0;
			line-height: 1.5;
		}
	}
}
</style>

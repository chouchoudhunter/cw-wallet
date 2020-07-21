<template>
	<view>
		<navbar title="公告" :backBtn="true"></navbar>
		<view class="message">
			<view class="time">2020年6月19日 上午10:30</view>
			<view class="content">
				长城钱包是国内领先的多场景支付解决方案服务提供商，移动支付交易规模位居行业第三，拥有互联网支付、 移动支付、预付卡发行与受理、银行卡收单等多元化的业 务资质。旗下积分平台（深圳万里通网络信息技术有限公 司）是国内领先的积分管理服务平台。
			</view>
			<view class="triangle"></view>
		</view>
		<view class="discuss">
			<view class="title">评论列表</view>
			<view class="discuss-list">
				<view class="one-discuss">
					<view class="img"></view>
					<view class="name-time-reply">
						<view class="name-time">
							<view class="name">夏目</view>
							<view class="time">5月12日 12:23</view>
						</view>	
						<view class="reply">这样的服务平台，很赞！</view>
					</view>
				</view>
				<view class="one-discuss">
					<view class="img"></view>
					<view class="name-time-reply">
						<view class="name-time">
							<view class="name">静香</view>
							<view class="time">5月12日 12:23</view>
						</view>	
						<view class="reply">回复<span>夏目</span>：你果真足够优秀！</view>
					</view>
				</view>
			</view>
		</view>
		<view class="add-comment">
			<input type="text" value="" placeholder="请输入"/>
			<view class="emoticon">
				<image src="../../../static/icon/emoticon.png" mode=""></image>
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
.message{
	padding: 24px 12px 40px;
	background-color: #FFFFFF;
	line-height: 1.6;
	position: relative;
	.time{
		font-size: 13px;
		color: #666666;
	}
	.content{
		font-size: 14px;
		text-indent: 2em;
	}
	.triangle{
		position: absolute;
		bottom: 0;
		left: 14px;
		width: 0;
		height: 0;
		border: solid 10px;
		border-color: transparent transparent #F4F4F4 transparent;
	}
}
.discuss{
	padding: 20px 12px 0 12px;
	.title{
		padding: 0 0 14px 3px;
		font-size: 15px;
		border-bottom: solid 0.5px #E0E0E2;
	}
	.discuss-list{
		.one-discuss{
			border-bottom: solid 0.5px #E0E0E2;
			padding: 10px 0 13px 0;
			line-height: 1.5;
			display: flex;
			.img{
				flex-shrink:0;
				width: 32px;
				height: 32px;
				border-radius: 18px;
				background-color: #C8C7CC;
				margin-right: 10px;
			}
			.name-time-reply{
				flex-grow: 1;
				.name-time{
					display: flex;
					.name{
						flex-grow: 1;
						font-size: 14px;
					}
					.time{
						font-size: 11px;
						color: #888888;
					}
				}	
			}
			.reply{
				font-size: 12px;
				color: #555555;
				span{
					margin-left: 4px;
				}
			}
		}				
	}		
}
.add-comment{
	display: flex;
	align-items: center;
	height: 40px;
	background-color: #FFFFFF;
	// border-radius: 20px;
	// margin: 0 12px 0 12px;
	padding: 0 11px;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	input{
		flex-grow: 1;
	}
	.emoticon{
		image{
			width: 20px;
			height: 20px;
		}
	}
}
</style>

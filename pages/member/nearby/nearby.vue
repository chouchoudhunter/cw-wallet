<template>
	<view id="nearby">
		<navbar title="附近的人" :backBtn="true"></navbar>
		<view class="list">
			<view>
				<view class="content">
					<view class="item">
						<view class="img-text">
							<view class="img"></view>
							<view class="text">
								<h1>陈先以</h1>
								<p>昵称: 生辉</p>
							</view>
						</view>
						<view class="location">
							<image src="@/static/icon/location@2x.png" mode=""></image>
							<p>4.0km</p>
						</view>
					</view>
					<c-button cRadius="4px" cFontSize="14px" cHeight="10px" cWidth="50px">添加</c-button>
				</view>
				<view class="hr"></view>
			</view>
			
			<view>
				<view class="content">
					<view class="item">
						<view class="img-text">
							<view class="img"></view>
							<view class="text">
								<h1>陈先以</h1>
								<p>昵称: 生辉</p>
							</view>
						</view>
						<view class="location">
							<image src="@/static/icon/location@2x.png" mode=""></image>
							<p>4.0km</p>
						</view>
					</view>
					<c-button cRadius="4px" cFontSize="14px" cHeight="10px" cWidth="50px">添加</c-button>
				</view>
				<view class="hr"></view>
			</view>
			
			<view>
				<view class="content">
					<view class="item">
						<view class="img-text">
							<view class="img"></view>
							<view class="text">
								<h1>陈先以</h1>
								<p>昵称: 生辉</p>
							</view>
						</view>
						<view class="location">
							<image src="@/static/icon/location@2x.png" mode=""></image>
							<p>4.0km</p>
						</view>
					</view>
					<c-button cRadius="4px" cFontSize="14px" cHeight="10px" cWidth="50px">添加</c-button>
				</view>
				<view class="hr"></view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		}
	};
</script>

<style lang="scss">
	#nearby {
		background-color: $uni-bg-color;
	}

	.list {
		.content {
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 0 20px;
			.item {
				flex-grow: 1;
				margin: 13px 0 0 0;
				.img-text {
					display: flex;
					flex-direction: row;
					align-items: center;
					.img {
						width: 70px;
						height: 70px;
						background-color: #dedede;
						border-radius: 5px;
					}
					.text {
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
		.hr {
			border-top: solid 1px $cw-background-grey;
			margin-top: 10px;
		}
	}
</style>

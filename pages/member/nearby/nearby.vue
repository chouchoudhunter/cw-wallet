<template>
	<view id="nearby">
		<navbar title="附近的人" :backBtn="true"></navbar>
		<view class="list">
			<view>
				<view class="item">
					<view class="img-text">
						<view class="img"></view>
						<view class="text">
							<h1>陈先以</h1>
							<p>昵称: 生辉</p>
						</view>
					</view>
					<c-button cRadius="4px" cFontSize="14px" cHeight="10px" cWidth="50px">同意</c-button>
				</view>
				<view class="location">
					<image src="@/static/icon/location@2x.png" mode=""></image>
					<p>4.0km</p>
				</view>
				<view class="hr"></view>
			</view>
			<view>
				<view class="item">
					<view class="img-text">
						<view class="img"></view>
						<view class="text">
							<h1>陈先以</h1>
							<p>昵称: 生辉</p>
						</view>
					</view>
					<c-button cRadius="4px" cFontSize="14px" cHeight="10px" cWidth="50px">同意</c-button>
				</view>
				<view class="location">
					<image src="@/static/icon/location@2x.png" mode=""></image>
					<p>4.0km</p>
				</view>
				<view class="hr"></view>
			</view>
			<view>
				<view class="item">
					<view class="img-text">
						<view class="img"></view>
						<view class="text">
							<h1>陈先以</h1>
							<p>昵称: 生辉</p>
						</view>
					</view>
					<c-button cRadius="4px" cFontSize="14px" cHeight="10px" cWidth="50px">同意</c-button>
				</view>
				<view class="location">
					<image src="@/static/icon/location@2x.png" mode=""></image>
					<p>4.0km</p>
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
#nearby{
		background-color:$uni-bg-color;
}	
.list {
	padding: 0 20px;
	margin: 15px 0 0 0;
	.item {
		display: flex;
		flex-direction: row;
		align-items: center;
		.img-text {
			display: flex;
			flex-direction: row;
			flex-grow: 1;
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
		margin: 10px 0;
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
	.hr {
		height: 1px;
		background-color: #dddddd;
		margin: 10px 0;
	}
}
</style>

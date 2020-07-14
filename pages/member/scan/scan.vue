<template>
	<view id="scan">
		<navbar title="扫一扫" :backBtn="true"></navbar>
		<view class="content">
			<view class="item">
				<view class="img"></view>
				<view class="text">
					<h1>成吉思汗</h1>
					<p>昵称: kdfgusgfjbjdf</p>
				</view>
			</view>
			<c-button>同意</c-button>
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
#scan{
	background-color:$uni-bg-color;
	height: 100%;
}	
.content {
	padding: 25px 12px 0 12px;
	.item {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0 0 50px 0;
		.img {
			width: 80px;
			height: 80px;
			background-color: #dedede;
			border-radius: 3px;
		}
		.text {
			margin-left: 10px;
			line-height: 30px;
			h1 {
				font-size: 17.5px;
			}
			p {
				font-size: 14px;
				color: #868686;
			}
		}
	}
}
</style>

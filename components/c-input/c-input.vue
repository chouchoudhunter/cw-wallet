<template>
	<view :class="cStyle">
		<view :class="{ 'c-input-group': isGroup }">
			<view class="input">
				<image v-if="iconImg" :src="'../../../static/icon/' + iconImg + '.png'" class="icon"></image>
				<view v-if="inputText" class="input-text">{{ inputText }}</view>
				<input type="text" :placeholder="placeholder" class="box-text" />
			</view>
			<c-button class="c-input-group-btn" v-if="isGroup" cRadius="0px" cFontSize="15px" cHeight="24px">获取验证码</c-button>
		</view>

		<view class="hr" v-if="cStyle == 'line' ? true : false"></view>
	</view>
</template>

<script>
export default {
	props: {
		iconImg: {
			type: String,
			default: ''
		},
		inputText: {
			type: String,
			default: ''
		},
		placeholder: {
			type: String,
			default: '输入'
		},
		cStyle: {
			type: String,
			default: 'line'
		},
		isGroup: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.hr {
	border-bottom: 1px solid #d2d2d2;
	margin-top: 10px;
}
.input-text {
	margin-right:10px;
	width: 60px;
	font-size: 15px;
	color: #333333;
}
.c-input-group {
	display: flex;
	flex-direction: row;
	.input{
		flex-grow: 1;
	}
	.c-input-group-btn {
		width: 120px;
	}
}
.line {
	margin: 20px 0;
	.input {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		.icon {
			width: 15px;
			height: 16px;
			margin: 0 10px;
		}
		.box-text {
			flex: 1;
			font-size: 14px;
			color: #888888;
		}
	}
}
.box {
	margin: 10px 0;
	.input {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		background-color: #ffffff;
		padding: 12px;
		.icon {
			width: 15px;
			height: 16px;
			margin: 0 10px;
		}
		.box-text {
			flex: 1;
			font-size: 14px;
			color: #888888;
		}
	}
}
</style>

<template>
	<view :class="cStyle">
		<view class="c-input-content">
			<view class="input">
				<image v-if="iconImg" :src="'../../../static/icon/' + iconImg + '.png'" class="icon"></image>
				<view v-if="inputText" class="input-text">{{ inputText }}</view>
				<input :disabled="cDisabled" type="text" :placeholder="placeholder" :style="{'text-align':cTextAlign,'font-size':cFontSize,'color':cColor}" class="box-text" />
			</view>
			
			<slot name="right"></slot>
		</view>

		<view class="hr" v-if="cStyle == 'line' ? true : false"></view>
	</view>
</template>

<script>
export default {
	props: {
		//左边图标
		iconImg: {
			type: String,
			default: ''
		},
		//左边文字
		inputText: {
			type: String,
			default: ''
		},
		//占位提示
		placeholder: {
			type: String,
			default: '输入'
		},
		//占位文字对齐方式
		cTextAlign: {
			type: String,
			default: '',
		},
		//输入文字的大小
		cFontSize: {
			type: String,
			default: ''
		},
		//输入文字的颜色
		cColor: {
			type: String,
			default: '#333333'
		},
		//line box 两种样式
		cStyle: {
			type: String,
			default: 'line'
		},
		//是否禁用
		cDisabled:{
			type:Boolean,
			default:false
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
	font-size: 15px;
	margin-right: 20px;
	color: #333333;
}
.c-input-content{
	display: flex;
	flex-direction: row;
	background-color: #FFFFFF;
	.input{
		flex-grow: 1;
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

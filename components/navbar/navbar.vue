<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view class="navbar-status" :style="{ height: statusBarHeight + 'px' }"></view>
			<view class="navbar-content" :style="{ height: navbarHeight + 'px' ,width:navbarWidth?navbarWidth+'px':'100%'}">
				<view class="slot-left">
					<uni-icons type="arrowleft" color="#FFFFFF" v-if="backBtn" size="24" @click="navigateBack()"></uni-icons>
					<view v-if="leftText" class="left-text">{{leftText}}</view>
					<!-- 插槽 -->
					<slot name="left"></slot>
					<uni-icons :type="leftIcon" color="#FFFFFF" size="18" v-if="leftIcon"></uni-icons>
				</view>
				<view class="title">{{ title }}</view>
				<view class="slot-right"><slot name="right"></slot></view>
			</view>
		</view>
		<view :style="{height:statusBarHeight+navbarHeight+'px'}"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			statusBarHeight: 20,
			navbarHeight: 45,
			navbarWidth:0
		};
	},
	props: {
		//导航栏标题
		title: {
			type: String,
			default: ''
		},
		//左边文字
		leftText: {
			type: String,
			default: ''
		},
		//左边图标
		leftIcon: {
			type: String,
			default: ''
		},
		//返回按钮
		backBtn: {
			type: Boolean,
			default: false
		}
	},
	created() {
		//手机系统信息+状态栏高度
		const info = uni.getSystemInfoSync();
		this.statusBarHeight = info.statusBarHeight;
		//#ifndef H5||APP-PLUS||MP-ALIPAY
		//获取小程序胶囊
		const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
		//计算导航栏高度  宽度
		this.navbarHeight = menuButtonInfo.bottom - this.statusBarHeight + (menuButtonInfo.top - this.statusBarHeight);
		this.navbarWidth=menuButtonInfo.left;
		//#endif
	},
	methods:{
		navigateBack(){
			uni.navigateBack({
				
			})
		}
	}
};
</script>

<style lang="scss">
.navbar {
	.navbar-fixed {
		position: fixed;
		background-color: $cw-base-color;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 99;
		.navbar-status {
		}
		.navbar-content {
			display: flex;
			flex-direction: row;
			align-items: center;
			color: #ffffff;
			.slot-left {
				width: 25%;
				text-align: left;
				padding-left: 10px;
				display: flex;
				flex-direction: row;
				align-items: center;
				.left-text{
					font-size: 15px;
					margin-right: 5px;
				}
			}
			.title {
				flex-grow: 1;
				text-align: center;
				font-size: 17px;
			}
			.slot-right {
				width: 25%;
				font-size: 16px;
				text-align: right;
				padding-right: 14px;
			}
		}
	}
}
</style>

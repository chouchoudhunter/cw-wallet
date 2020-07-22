<template>
	<view>
		<navbar title="个人信息修改" :backBtn="true"></navbar>
		<view class="head">
			<view class="title">头像</view>
			<view class="img"></view>
		</view>
		<c-input inputText="我的昵称" cStyle="box2" placeholder="成吉思汗" cTextAlign="right" :cDisabled="true">
			<view slot="right" class="right-arrow"><uni-icons type="arrowright" color="#b0b0b0" size="18"></uni-icons></view>
		</c-input>
		<c-input inputText="绑定微信" cStyle="box2" placeholder="请绑定微信" cTextAlign="right" :cDisabled="true">
			<view slot="right" class="right-arrow"><uni-icons type="arrowright" color="#b0b0b0" size="18"></uni-icons></view>
		</c-input>
		<c-input inputText="绑定邮箱" cStyle="box2" placeholder="请绑定邮箱" cTextAlign="right" :cDisabled="true">
			<view slot="right" class="right-arrow"><uni-icons type="arrowright" color="#b0b0b0" size="18"></uni-icons></view>
		</c-input>
		<c-input inputText="个人资料权限设置" cStyle="box2" placeholder="" cTextAlign="right" :cDisabled="true">
			<select class="select-style" slot="right">
				<option selected="selected">自己</option>
				<option>好友可见</option>
				<option>所有人</option>
			</select>	
		</c-input>
		<c-input inputText="好友验证设置" cStyle="box2" placeholder="" cTextAlign="right" :cDisabled="true">
			<select class="select-style" slot="right">
				<option selected="selected">需要验证</option>
				<option></option>
				<option></option>
			</select>
		</c-input>
		<c-button class="but">保存</c-button>
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
.head{
	display: flex;
	align-items: center;
	background-color: #FFFFFF;
	margin-bottom: 1px;
	padding: 10px 18px 10px 12px;
	.title{
		flex-grow: 1;
		font-size: 15px;
	}
	.img{
		width: 54px;
		height: 54px;
		border-radius: 4px;
		background-color: #C8C7CC;
	}
}
.right-arrow {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-right: 6px;
}	
.select-style{
	margin-right: 14px;
	font-size: 14px;
	color: #333333;
	padding-right: 14px;
	border: none;
	outline: none;
	// 去掉默认的下拉三角
	appearance:none;  
	-moz-appearance:none;  
	-webkit-appearance:none;
	// 添加下拉三角图标
	background: url("../../../static/icon/my/select.png") no-repeat right center;
	background-size: 8px 6px;    
}
.but{
	margin: 50px 12px 0;
}
</style>

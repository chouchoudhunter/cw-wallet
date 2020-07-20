<template>
	<view>
		<navbar title="商家入驻" :backBtn="true"></navbar>
		<view class="picture">上传门店-店招图片</view>
		<view class="license">
			<image src="../../../static/icon/my/add.png" mode=""></image>
			<view class="text">上传店铺营业执照</view>
		</view>
		<c-input inputText="统一社会信用代码" placeholder="统一社会信用代码" cTextAlign="right" cStyle="box2"></c-input>
		<c-input inputText="店铺名称" placeholder="请输入店铺名称" cTextAlign="right" cStyle="box2"></c-input>
	店铺地区<br>店铺定位 
		
		<c-input inputText="经营类型" placeholder="请输入经营类型" cTextAlign="right" cStyle="box2"></c-input>
		<c-input inputText="营业时间" placeholder="请输入请输入营业时间" cTextAlign="right" cStyle="box2"></c-input>
		<c-input inputText="服务电话" placeholder="请输入商家服务电话" cTextAlign="right" cStyle="box2"></c-input>
		<c-input inputText="联系人姓名" placeholder="请输入联系人姓名" cTextAlign="right" cStyle="box2"></c-input>
		<c-input inputText="长城钱包账户" placeholder="请输入钱包账户" cTextAlign="right" cStyle="box2"></c-input>
		<c-input inputText="推荐人" placeholder="请输入推荐人的长城钱包账户/手机号" cTextAlign="right" cStyle="box2"></c-input>
		<c-button class="but">提交申请</c-button>
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
.picture{
	height: 160px;
	background-color: #888888;
	font-size: 14px;
	color: #FFFFFF;
	text-align: center;
	line-height: 160px;
}
.license{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 184px;
	image{
		height: 113px;
		width: 100px;
	}
	.text{
		font-size: 14px;
		margin-top: 17px;
	}
}


.but {
	margin: 50px 12px 0;
}
</style>

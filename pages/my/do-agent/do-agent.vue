<template>
	<view>
		<navbar title="成为代理" :backBtn="true"></navbar>
		<view class="welcome">
			<p>欢迎加入<span class="red">长城钱包</span>，请填写申请信息</p>
		</view>
		<c-input class="in" inputText="*姓名:" placeholder="请输入您的姓名" cStyle="box2"></c-input>
		<c-input class="in" inputText="*身份证号:" placeholder="请输入您的身份证号" cStyle="box2"></c-input>
		<c-input class="in" inputText="*手机号:" placeholder="请输入您的手机号" cStyle="box2"></c-input>
		<view class="agree">
			<checkbox class="kuang"></checkbox>				
			<p class="text">我已经阅读并了解<a>《推广代理员申请协议》</a></p>
		</view>
		<c-button class="but" cFontSize="17px">申请成为代理商</c-button>
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
	.in{
		margin: 0 0 1px 0;
	}
	.welcome {
		margin: 13px 0;
		text-align: center;
		p {
			font-size: 13px;
			.red {
				color:#FF0000;
			}
		}
	}
	.agree {
		margin: 12px;
		display: flex;
		flex-direction: row;
		align-items: center;
		.kuang{
			transform: scale(0.6);
			border-color: red;
		}
		.text{
			font-size: 12px;
			margin-top: 2px;
			a {
				color: #E68531
			}	
		}	
	}
	.but {
		margin: 50px 12px 0;
	}
</style>

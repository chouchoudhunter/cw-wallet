<template>
	<view>
		<view class="c-button" :style="{'border-radius':cRadius,'font-size':cFontSize,'height':cHeight,'line-height':cHeight}">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			//圆角值
			cRadius:{
				type:String,
				default:"5px"
			},
			//按钮文字大小
			cFontSize:{
				type:String,
				default:"18px"
			},
			//按钮高度
			cHeight:{
				type:String,
				default:"20px"
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.c-button{
	background-color: $cw-base-color;
	padding: 10px;
	text-align: center;
	color: #ffffff;
}
.c-button:active{
	background-color: $cw-base-color-deep;	
}
</style>

<template>
	<view>
		<view class="list-go" @click="_onClick">
			<view class="img-text">									
				<image class="img" :src="'../../../static/recicon/'+iconSrc+'.png'" v-if="leftIcon" mode=""></image>	
				<p>{{leftText}}</p>
			</view>
			<view class="right">				
				<p>{{rightText}}</p>
				<image class="arrows" src="@/static/icon/member/arrows.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			//左边图标是否有
			leftIcon:{
				type: Boolean,
				default: true
			},
			//图标地址
			iconSrc:{
				type:String,
				default:''
			},
			//左边文字
			leftText:{
				type:String,
				default:''
			},
			//右边文字
			rightText:{
				type:String,
				default:''
			},
		},
		methods: {
			_onClick() {
				this.$emit('click')
			}
		}
			
	}
</script>

<style lang="scss">
.list-go {
		display: flex;
		height: 44px;
		padding:0 12px;
		background-color: #FFFFFF;
		margin-bottom: 5px;
		.img-text{
			display: flex;
			flex-direction: row;
			align-items: center;
			flex-grow: 1;
			
				.img{					
					width: 20px;
					height: 20px;
					margin-right: 15px;
				
			}
			p {				
				font-size: 15px;
			}
		}
		.right{
			display: flex;
			align-items: center;
			p{
				margin: 0 16px 0 0;
				font-size: 15px;
				line-height: 44px;
				color: #666666;
			}
			.arrows {
				width: 6.5px;
				height: 12px;
			}
		}
}
.list-go:active{
		background-color: $cw-background-grey;	
}	
</style>

<template>
	<view>
		<view class="list-go">
			<view class="img-text">					
				<view class="leftIcon" v-if="leftIcon">					
					<img  :src="iconSrc" mode=""></img>
				</view>
				<p>{{leftText}}</p>
			</view>
			<view class="right">				
				<p>{{rightText}}</p>
				<img class="arrows" src="@/static/icon/member/arrows.png" mode=""></img>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			//左边图标
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
			}				
		}		
	}
</script>

<style lang="scss">
.list-go {
		display: flex;
		height: 44px;
		margin: 0 0 5px 0;
		padding:0 12px;
		background-color: #FFFFFF;
		.img-text{
			display: flex;
			flex-direction: row;
			align-items: center;
			flex-grow: 1;
			.leftIcon {
				width: 20px;
				height: 20px;
				text-align: center;
				margin: 0 15px 0 0;
				img{					
					height: 100%;
				}
			}
			p {				
				font-size: 15px;
			}
		}
		.right{
			display: flex;
			p{
				margin: 0 16px 0 0;
				font-size: 15px;
				line-height: 44px;
				color: #666666;
			}
			.arrows {
				width: 6.5px;
				height: 12px;	
				margin: auto 0;
			}
		}
}
.list-go:active{
		background-color: $cw-background-grey;	
}	
</style>

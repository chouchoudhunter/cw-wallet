<template>
	<view>
		<view class="box">
			<image :src="iconSrc" mode=""></image>
			<p class="name">{{name}}</p>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			iconSrc:{
				type:String,
				default:''
			},
			name:{
				type:String,
				default:''
			},
			
		}
	}
</script>

<style lang="scss">
.box{
	width: 80px;
	height: 70px;
	background-color: white;
	image{
		width: 40%;
		height: 40%;
		
	}	
	p{
		text-align: center;
		font-size: 12px;
	}
}	

</style>

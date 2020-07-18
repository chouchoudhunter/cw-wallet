<template>
	<view>
		<view class="select-content">
			<view class="title">{{ title }}</view>
			<view class="hr"></view>
			<view class="content">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'UniPopupSelect',
	props: {
		title: {
			type: String,
			default: '请选择'
		}
	},
	// 直接把下面这一行代码，放到自己的组件内
	inject: ['popup'],
	// ...
	methons: {
		/**
		 * 定义的选择事件，选择内容后触发
		 */
		select(item, index) {
			// 将事件发送到页面，在页面进行监听
			this.$emit(
				'select',
				{
					item,
					index
				},
				() => {
					// 延迟操作，执行父组件的close事件，关闭弹出层
					this.popup.close();
				}
			);
		},
		/**
		 * 关闭窗口
		 */
		close() {
			// 执行父组件的close事件，关闭弹出层
			this.popup.close();
		}
	}
};
</script>

<style lang="scss">
.select-content {
	background-color: #ffffff;

	.title {
		padding: 10px;
	}
	.hr {
		border-bottom: $cw-background-grey 1px solid;
	}
	.content {
		display: flex;
		flex-direction: column;
	}
}
</style>

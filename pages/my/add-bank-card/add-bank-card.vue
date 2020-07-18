<template>
	<view>
		<navbar title="添加银行卡" :backBtn="true"></navbar>
		<view class="warning">
			上传
			<span>xxx</span>
			本人银行卡信息
		</view>
		<c-input inputText="持卡人" cStyle="box" placeholder="个人存储账户" cTextAlign="right"></c-input>
		<c-input inputText="银行卡号" cStyle="box" placeholder="上传银行卡照片自动识别" cTextAlign="right">
			<view slot="right" class="add-bank-item">
				<uni-icons type="arrowright" color="#b0b0b0" size="18"></uni-icons>
				<button @click="open">打开弹窗</button>
				<uni-popup ref="popup" type="dialog">
				    <uni-popup-dialog type="input" message="成功消息" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
				</uni-popup>
			</view>
		</c-input>
		<c-input inputText="开户银行" cStyle="box" placeholder="请选择开户银行" cTextAlign="right" :cDisabled="true">
			<view slot="right" class="add-bank-item"><uni-icons type="arrowright" color="#b0b0b0" size="18"></uni-icons></view>
		</c-input>
		<c-input inputText="开户城市" cStyle="box" placeholder="请选择开户城市" cTextAlign="right" :cDisabled="true">
			<view slot="right" class="add-bank-item"><uni-icons type="arrowright" color="#b0b0b0" size="18"></uni-icons></view>
		</c-input>
		<c-input inputText="开户支行" cStyle="box" placeholder="请选择开户支行" cTextAlign="right" :cDisabled="true">
			<view slot="right" class="add-bank-item"><uni-icons type="arrowright" color="#b0b0b0" size="18"></uni-icons></view>
		</c-input>
		<c-input inputText="银行卡有效期" cStyle="box" placeholder="请选择有效期限" cTextAlign="right" :cDisabled="true">
			<view slot="right" class="add-bank-item"><uni-icons type="arrowright" color="#b0b0b0" size="18"></uni-icons></view>
		</c-input>
		<c-button>确认提交</c-button>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue';
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
export default {
	data() {
		return {};
	},
	methods: {
		open() {
			this.$refs.popup.open();
		}
	}
};
</script>

<style lang="scss">
.warning {
	text-align: center;
	font-size: 13px;
	background-color: $cw-background-grey;
	span {
		color: $cw-base-color;
		display: inline-block;
		margin: 10px 0;
	}
}
.add-bank-item {
	display: flex;
	flex-direction: row;
	align-items: center;
}
</style>

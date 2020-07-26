<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
uni-page-body,
html,
body {
	background-color: $cw-background-grey;
	letter-spacing: 1px;
	color: $uni-text-color;
}

</style>

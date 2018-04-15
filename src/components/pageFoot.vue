<template>
	<div id="pageFoot">江苏科技大学<br />技术支持-嘿嘿嘿</div>
</template>
<script>
	export default {
		name:"pageFoot",
	}
</script>
<style scoped>
	#pageFoot {
		font-family: "microsoft yahei";
		padding-top: 5px;
		margin-bottom: 10px;
		border-top:1px solid #cccccc;
	}
	@media (max-width:768px) {
		#pageFoot {
			font-size: 12px;
		}
	}
</style>

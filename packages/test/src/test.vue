<template>
	<div>
		<div class="btn">{{ name }}</div>
	</div>
</template>

<script>
export default {
	name: 'dwaTest',
	data () {
		return {
			name: '按钮'
		}
	},
	methods: {

	}
}
</script>

<style scoped>
	.btn {
		width: 98px;
		height: 36px;
		line-height: 36px;
		border: 1px solid #409EFF;
		border-radius: 4px;
		font-size: 14px;
		color: #666;
		cursor: pointer;
		transition: all 0.25s;
	}

	.btn:hover {
		background: #409EFF;
		color: #fff;
	}
</style>
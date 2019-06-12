<template>
	<svg :class="['icon','show-more', dropDown > 0 ? 'drop-down' : 'drop-up']" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
	name: 'dwa-icon',
	props: {
		icon: {
			type: String,
			default: 'qm'
		},
		dropDown: {
			type: Number,
			default: ''
		}
	},
	computed: {
		iconName() {
			return `#dwa-${this.icon}`
		}
	}
}
</script>

<style scoped>
	.drop-down {
		transform: rotate(-180deg);
		transition: all .6s;
	}
	.drop-up {
		transform: rotate(0deg);
		transition: all .6s;
	}
</style>
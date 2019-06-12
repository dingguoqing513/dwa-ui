import DwaBlock from './src/dwa-block.vue'

DwaBlock.install = Vue => {
	Vue.component(DwaBlock.name, DwaBlock)
}

export default DwaBlock
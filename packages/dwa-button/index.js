// 导入组件，组件必须声明 name
import DwaButton from './src/dwa-button.vue'

DwaButton.install = Vue => {
    Vue.component(DwaButton.name, DwaButton)
}

export default DwaButton
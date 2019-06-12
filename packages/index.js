import '../public/css/cover.scss'
import '../public/css/dwa-ui-base.css'
import '../public/js/base.js'

import DwaTest from './test'
import DwaButton from './dwa-button'
import DwaAnchor from './dwa-anchor'
import DwaAnchorLink from './dwa-anchor-link'
import DwaBlock from './dwa-block'
import DwaTableSimple from './dwa-table-simple'
import DwaIcon from './dwa-icon'

// 所有组件列表
const components = [
	DwaTest,
	DwaButton,
	DwaAnchor,
	DwaAnchorLink,
	DwaBlock,
	DwaTableSimple,
	DwaIcon
]

const install = function (Vue) {
	if (install.installed) return
	install.installed = true
	components.map(component => Vue.component(component.name, component))
	// components.map(component => Vue.use(component)) 
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install,
	...components
}
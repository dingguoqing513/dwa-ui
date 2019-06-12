import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'

import components from './routers/components'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: home,
			redirect: '/component/installation',
			children: [
				...components
			]
		}
	]
})
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ErrorPlugin from '../public/js/errorPlugin.js'

// 导入组件库
import DwaUI from './../packages'
import VueHighlightJS from 'vue-highlightjs'
import '../public/css/cover.scss';
import '../public/iconfont/iconfont.js'
import 'highlight.js/styles/atom-one-dark.css'

// 注册组件库
Vue.use(DwaUI)
Vue.use(VueHighlightJS)
Vue.use(ErrorPlugin)

Vue.config.productionTip = false

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')

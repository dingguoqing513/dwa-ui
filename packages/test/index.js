import DwaTest from './src/test'
DwaTest.install = Vue => {
	Vue.component(DwaTest.name, DwaTest)
}
export default DwaTest
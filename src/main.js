import Vue from 'vue'
import * as echarts from 'echarts';
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
  render: h => h(App),
}).$mount('#app')

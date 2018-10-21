import Vue from 'vue'
import App from './App.vue'
import './assets/global.scss'
// import ElementUI from 'element-ui';
// Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mode:'history'
}).$mount('#app')

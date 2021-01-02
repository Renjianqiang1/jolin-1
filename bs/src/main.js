import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import $ from 'jquery';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min';
import  BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
// import echarts from 'echarts'
var echarts = require('echarts');



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$echarts = echarts 

Vue.use(BootstrapVue)

Vue.use(ElementUI);

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:3000/';           

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';  

Vue.prototype.$ajax = axios;  


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
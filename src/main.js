// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import originJsonp from 'jsonp'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.axios = axios;

// Headers("application/javascript; charset=utf-8");
let jsonp = function (url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    })
  })
};

function param(data) {
  let url = '';
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : '';
    url += '&' + k + '=' + encodeURIComponent(value);
  }
  return url ? url.substring(1) : '';
}
Vue.prototype.jsonp = jsonp;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

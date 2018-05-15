// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import jquery from 'jquery'
import ElementUI from 'element-ui'
import Vuex from 'vuex';
import moment from 'moment';
import 'element-ui/lib/theme-default/index.css'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
Vue.use(VideoPlayer);
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuex);

// axios.defaults.withCredentials=true;
Vue.prototype.axios = axios;
Vue.prototype.jquery = jquery;
Vue.prototype.moment = moment;
Vue.prototype.changeTime = time => moment(time).startOf('minute').fromNow().replace(/hours?/, '小时').replace('ago', '前').replace(/days?/, '天').replace(/minutes?/, '分钟').replace(/\ban?/, '1').replace(/months?/, '个月').replace(/\byears?/, '年').replace(/\s/g, '').replace('fewseconds','分钟');

const store = new Vuex.Store({
  state: {
    tab: 'all',
    articleList: [],
    collectTopics: [],
    isLoading: false,
    isMore: false,
    isShowAsideMenu: false,
    isShowNewArticle: false,
    scrollTop: 0,
  },

  mutations: {
    changeTab(state, payload) {
      state.isLoading = payload.hasOwnProperty('isLoading') ? payload.isLoading : state.isLoading;
      state.tab = payload.type || state.tab;
      state.articleList = payload.articleList || state.articleList;
    },
    viewArcticle(state, flag) {
      state.isLoading = flag;
    },
    changeMore(state, flag) {
      state.isMore = flag;
    },
    changeScrollTop(state, scrollTop) {
      state.scrollTop = scrollTop;
    },
    showAsideMenu(state, flag) {
      state.isShowAsideMenu = flag;
    },
    showNewArticle(state, flag) {
      state.isShowNewArticle = flag;
    },
    updateCollect(state, collectTopics) {
      state.collectTopics = collectTopics;
    }
    },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

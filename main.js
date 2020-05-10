import Vue from 'vue'
import App from './App'

/**
 * 引入页面
 */
import indexPage from '@/pages/index';
Vue.component('indexPage',indexPage);

import libraryPage from '@/pages/library/library.vue';
Vue.component('libraryPage',libraryPage);

import minePage from '@/pages/mine/mine.vue';
Vue.component('minePage',minePage);

import circlePage from '@/pages/circle/circle.vue';
Vue.component('circlePage',circlePage);

import recommend from '@/pages/components/recommend/recommend.vue';
Vue.component('recommend',recommend);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

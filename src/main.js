import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index';
import App from './App.vue'
import VueAwesomeSwiper from "vue-awesome-swiper"; //轮播插件
import 'swiper/css/swiper.css';
import CKEditor from '@ckeditor/ckeditor5-vue'; //富文本编辑器

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
Vue.use(CKEditor);


new Vue({
  router,
  render: h => h(App)

}).$mount('#app')

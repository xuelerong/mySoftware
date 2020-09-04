import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/*引入vant轮播图组件*/
import { Swipe, SwipeItem ,Sidebar, SidebarItem  } from 'vant';
/*引入van样式*/
import 'vant/lib/index.css';
/*导入图片懒加载*/
import VueLazyLoad from 'vue-lazyload'
/*引入全局的事件总线*/
import VueBus from 'vue-bus'
/*注册使用VueLazyLoad*/
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/loading/placeHolder.gif')
});
/*注册使用轮播图组件*/
Vue.use(Swipe);
Vue.use(SwipeItem);
/*注册使用侧边导航栏组件*/
Vue.use(Sidebar);
Vue.use(SidebarItem);

/*注册使用表单*/
Vue.use(Form);


/*引入注册按钮和输入框*/
import Form  from 'vant';
import Button from 'vant/lib/button';
Vue.use(Button);
Vue.use(Form);
/*引入vat toast*/
import { Toast } from 'vant';

Vue.use(Toast);
/*注册使用事件中心*/
Vue.use(VueBus);

Vue.config.productionTip = false;

import axios from 'axios'
axios.defaults.baseURL = 'http://123.207.32.32:8000/api/x6';
/*把axios挂在到vue的原型对象上*/
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

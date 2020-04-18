import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/home/Home";
import Category from "../views/category/Category";
import Cart from "../views/cart/Cart";
import Profile from "../views/profile/Profile";
import SituationMessage from "../components/situationMessage/SituationMessage";
import Music from "../views/music/Music";
import Detail from "../views/detail/Detail";
import Login from "../components/login/Login";

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:Login
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/profile',
    component:Profile
  },
  {
    path: '/situationMessage',
    component:SituationMessage
  },
  {
    path: '/music',
    component:Music,
  },
  {
    path: '/detail/:id',
    component:Detail
  }

];

const router = new VueRouter({
  mode: "history",

  routes
});

/*vue 路由切换时，重复点击相同路由会报错，解决方案*/
const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;

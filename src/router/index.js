import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OtpView from "@/views/OtpView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/otp",
    name: 'otp',
    component: OtpView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

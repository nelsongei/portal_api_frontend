import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OtpView from "@/views/OtpView.vue";
import DashboardView from "@/views/DashboardView.vue";
import AuthorView from "@/views/AuthorView.vue";

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
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/author",
    name:"author",
    component: AuthorView,
    meta:{
      requiresAuth: true,
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const api_token = localStorage.getItem("api_token");
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !api_token) {
    next("/login");
  } else {
    next();
  }
});

export default router

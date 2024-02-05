import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css';
import Vue from "@vue/cli-plugin-eslint/eslintOptions";

import ToastPlugin from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-bootstrap.css';

Vue.config.productionTip = false;

createApp(App).use(
    router,
    ToastPlugin
).mount('#app')



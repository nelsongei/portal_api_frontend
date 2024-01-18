import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css';
import Vue from "@vue/cli-plugin-eslint/eslintOptions";

Vue.config.productionTip = false;

createApp(App).use(router).mount('#app')

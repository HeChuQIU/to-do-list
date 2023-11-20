import { createApp } from 'vue'
import './app.css'
import {createRouter, createWebHistory} from "vue-router";
import TimeLine from "@/components/TimeLine.vue";
import Setting from "@/components/Setting.vue";
// import {router} from './router'

export const routes = [
  {path: '/setting', component: Setting},
  {path: '/timeLine', component: TimeLine},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const App = createApp({
  onShow (options) {
    console.log('App onShow.')
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(router);

export default App

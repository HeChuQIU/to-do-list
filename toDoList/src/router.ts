import {createRouter, createWebHistory} from 'vue-router'
import Setting from "@/components/Setting.vue";
import TimeLine from "@/components/TimeLine.vue";

export const routes = [
  {path: '/setting', component: Setting},
  {path: '/timeLine', component: TimeLine},
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

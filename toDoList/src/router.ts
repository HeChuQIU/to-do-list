import {createRouter, createWebHistory} from 'vue-router'

const Home = {template: '<div>Home</div>'}
const About = {template: '<div>About</div>'}

export const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
];

export const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

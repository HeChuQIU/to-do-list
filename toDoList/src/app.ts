import { createApp } from 'vue'
import './app.css'
import {router} from "@/router";
// import {router} from './router'

const App = createApp({
  onShow (options) {
    console.log('App onShow.')
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(router);

export default App

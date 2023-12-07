import { createSSRApp } from "vue";
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}

wx.cloud.init({
  env: '5175aa',  //环境
  traceUser: true, //是否在将用户访问记录到用户管理中，在控制台中可见
})

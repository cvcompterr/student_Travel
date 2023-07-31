import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import "./assets/global.css"  // 清除默认样式
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css';
import * as  echarts from "echarts";
//引入stores暴露出的pinia的实例
import { createPinia } from "pinia"
const pinia = createPinia();
import axios from "axios"
const app = createApp(App) //注册elementPlus组件
app.use(router)
app.use(pinia)
app.config.globalProperties.echarts = echarts;
app.use(ElementPlus, axios)
app.mount('#app')  
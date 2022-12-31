import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import {initial} from './enum/LocalFileAdress'

initial()//本地存储初始化方法
const app = createApp(App)
app.use(ElementPlus);
app.mount('#app')
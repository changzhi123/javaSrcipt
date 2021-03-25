import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

import router from './router'//路由
import store from './store'//vuex


import Antd from 'ant-design-vue';//全局ui组件
import 'ant-design-vue/dist/antd.css';//ui组件样式


const appRoot = createApp(App)
    .use(router)
    .use(store)
    .use(Antd)

appRoot.mount('#app')

import * as Icons from "@ant-design/icons-vue";

Object.keys(Icons).filter(key=>{
    appRoot.component(key, Icons[key]);//全局引入icon图标
})

import Vue from 'vue'
// 配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//vue-resource
import  VueResource from 'vue-resource'
Vue.use(VueResource)

//引入懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    error: './images/error.jpg',//这个是请求失败后显示的图片
    loading: './images/load.gif',//这个是加载的loading过渡效果
    try: 2 // 这个是加载图片数量
})


//引入MUI和css样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './css/index.css'

import router from './js/route.js'
import app from './App.vue'
new Vue({
    el:'#app',
    data:{

    },
    router,
    method:{},
    render:c=>c(app)
})

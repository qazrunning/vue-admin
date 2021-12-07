import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/pages/Home'
Vue.use(VueRouter)
const routes = [
    {
    path:'/home',
    component:Home ,
    name: 'home',
    }
]
const router = new VueRouter({
    routes
})

export default router
// const routes = []

// // 引入modules文件夹的路由js
// const files = require.context('./modules', false, /\.js$/)
// files.keys().forEach(key => {
//   routes.push(...files(key).default)
// })
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
const routes = []
const independentRouter = []
// // 文件夹的路由js
const files = require.context('../router/', true, /\.(js|ts)$/)
files.keys().forEach(key => {
    /**
     * 这里我提供independent 来判断是否使用layout true为不使用
     */
    if (files(key).default) {
        files(key).default.forEach(item => {
            if (item.independent) {
                independentRouter.push(item)
            } else {
                routes.push(item)
            }
        })
    }

})
const router = new VueRouter({
    routes: [{
            path: '/',
            component: () => import('@/components/Layout'),
            name: 'Layout',
            children: [...routes]
        },
        ...independentRouter
    ]
})

export default router
import Vue from 'vue'
import Router from 'vue-router'
import { routerBeforeEachFunc, routerAfterEachFunc } from '@/interceptors/router'

Vue.use(Router)

let routerInstance = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '@/views/Home/Index')
        },{
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ '@/views/About/Index')
        },
    ]
})

routerInstance.beforeEach(routerBeforeEachFunc)
routerInstance.afterEach(routerAfterEachFunc)

export default routerInstance

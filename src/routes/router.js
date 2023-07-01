import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('@page/Home.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory( process.env.BASE_URL )
})

export default router
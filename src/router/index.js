import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/game_mat',
        name: 'game_mat',
        component: () =>
            import ('../views/game_mat.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
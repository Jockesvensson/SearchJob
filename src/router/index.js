import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import Navbar from '../components/Navbar.vue'
import Annonser from '../views/Annonser.vue'
import SinglePage from '../views/SinglePage.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Start',
        component: Start
    },
    {
        path: '/navbar',
        name: 'Navbar',
        component: Navbar
    },
    {
        path: '/annonser',
        name: 'Annonser',
        component: Annonser
    },
    {
        path: '/annonser/:id',
        name: 'SinglePage',
        component: SinglePage
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
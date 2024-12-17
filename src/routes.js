import { createRouter, createWebHistory } from 'vue-router';
import HomePageComponent from '@/pages/home-page.component.vue'
import AboutPageComponent from '@/pages/about-page.component.vue'

const routerHistory = createWebHistory();

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: HomePageComponent
        },
        {
            path: '/about',
            component: AboutPageComponent
        }
    ]
});

export default routers;
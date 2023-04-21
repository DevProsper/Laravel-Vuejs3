import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from "../components/HomeComponent.vue";

import BusinessHourComponent from "../components/BusinessHourComponent.vue";

const routes = [
    {
        path: '/',
        component: HomeComponent,
        name: 'home.index'
    },
    {
        path: '/hour',
        component: BusinessHourComponent,
        name: 'hour.index'
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
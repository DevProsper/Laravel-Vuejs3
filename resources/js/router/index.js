import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from "../components/HomeComponent.vue";

const routes = [{
    path: '/laravel-vue-test',
    component: HomeComponent,
    name: 'home.index'
}]

export default createRouter({
    history: createWebHistory(),
    routes
})
require('./bootstrap');

import { createApp } from 'vue';
import router from './router';

import App from './App.vue';

import RightbarComponent from './components/template/RightbarComponent.vue'
import SidebarComponent from './components/template/SidebarComponent.vue'
import TopbarComponent from './components/template/TopbarComponent.vue'

const app = createApp(App);
app.component('top-bar', TopbarComponent);
app.component('right-bar', RightbarComponent);
app.component('side-bar', SidebarComponent);
app.use(router).mount("#app");
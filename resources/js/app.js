require('./bootstrap');

import { createApp } from 'vue';
import router from './router';

import App from './App.vue';

import RightbarComponent from './components/template/RightbarComponent.vue'
import SidebarComponent from './components/template/SidebarComponent.vue'
import TopbarComponent from './components/template/TopbarComponent.vue'

import BusinessHourComponent from './components/BusinessHourComponent.vue'

const app = createApp(App);
app.component('top-bar', TopbarComponent);
app.component('right-bar', RightbarComponent);
app.component('side-bar', SidebarComponent);
app.component('business-hour', BusinessHourComponent);
app.use(router).mount("#app");
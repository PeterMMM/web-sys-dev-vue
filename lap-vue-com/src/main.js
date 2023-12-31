import './style.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue';

const app = createApp(App);
app.component('Header', Header);
app.mount('#app');
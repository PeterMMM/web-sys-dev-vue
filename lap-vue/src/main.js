import { createApp } from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Cookies from './components/Cookies.vue';
import Login from './components/Login.vue';
import LoginForm from './components/form/LoginForm.vue';
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createPinia } from 'pinia';


const routes = [
  { path: '/', name:'Home', component: Home },
  {   
      path: '/cookies',
      name: 'Cookies',
      component: Cookies,
  },
  { path: '/about', name: 'About', component: About },
  { path: '/login', name: 'Login', component: Login },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


const pinia = createPinia();
const app = createApp(App);
app.use(router);
app
  .component('Nav', Nav)
  .component('Footer', Footer)
  .component('LoginForm', LoginForm);

app.use(pinia);
app.mount('#app');

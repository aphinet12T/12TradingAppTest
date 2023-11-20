import { createRouter, createWebHistory } from 'vue-router';
import StoreRouter from './store.router'

const routes = [
  { path: '/cms/login', component: () => import('../views/authentication/login.vue') },
  ...StoreRouter,
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

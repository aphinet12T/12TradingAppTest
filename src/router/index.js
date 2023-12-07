import { createRouter, createWebHistory } from 'vue-router';
import StoreRouter from './store.router'
import RouteRouter from './route.router'
import OrderRouter from './order.router'

const routes = [
  { path: '/cms/login', component: () => import('../views/authentication/login.vue') },
  { path: '/cms/test', component: () => import('../components/DrawerPolicy.vue') },
  ...StoreRouter,
  ...RouteRouter,
  ...OrderRouter,
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

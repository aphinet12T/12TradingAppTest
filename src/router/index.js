import { createRouter, createWebHistory } from 'vue-router';
import StoreRouter from './store.router'
import RouteRouter from './route.router'
import OrderRouter from './order.router'
import ManageRouter from './manage.router'

const routes = [
  { path: '/cms/login', component: () => import('../views/authentication/login.vue') },
  { path: '/cms/test', component: () => import('../components/TableProduct.vue') },
  ...StoreRouter,
  ...RouteRouter,
  ...OrderRouter,
  ...ManageRouter,
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

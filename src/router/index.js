import { createRouter, createWebHistory } from 'vue-router';
import LayoutMain from '../views/LayoutMain.vue';
import StoreRouter from './store.router'
import RouteRouter from './route.router'
import OrderRouter from './order.router'
import ManageRouter from './manage.router'
import ReportRouter from './report.router'

const routes = [
  { path: '/cms/login', component: () => import('../views/authentication/Login.vue') },
  {
    path: '/cms',
    component: LayoutMain,
    children: [
      {
        path: 'home',
        component: () => import('../views/Home.vue'),
      },
    ],
  },
  { path: '/cms/test', component: () => import('../components/OptionAddress.vue') },
  ...StoreRouter,
  ...RouteRouter,
  ...OrderRouter,
  ...ManageRouter,
  ...ReportRouter,
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

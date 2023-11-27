import LayoutMain from '../views/LayoutMain.vue';
import LayoutSub from '../views/LayoutSub.vue';

const routeRoutes = [
  {
    path: '/cms',
    component: LayoutMain,
    children: [
      {
        path: 'route',
        component: () => import('../views/route/routeMain.vue'),
      },
    ],
  },
  {
    path: '/cms/store',
    component: LayoutSub,
    children: [
      {
        path: 'detail',
        component: () => import('../views/store/StoreDetail.vue'),
      },
      {
        path: 'add',
        component: () => import('../views/store/StoreAdd.vue'),
      },
    ],
  },
];

export default routeRoutes;

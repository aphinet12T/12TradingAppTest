import LayoutMain from '../views/LayoutMain.vue';
import LayoutSub from '../views/LayoutSub.vue';

const routeRoutes = [
  {
    path: '/cms',
    component: LayoutMain,
    children: [
      {
        path: 'route',
        component: () => import('../views/route/RouteMain.vue'),
      },
    ],
  },
  {
    path: '/cms/route',
    component: LayoutSub,
    children: [
      {
        path: 'detail',
        component: () => import('../views/route/RouteDetail.vue'),
      },
    ],
  },
];

export default routeRoutes;

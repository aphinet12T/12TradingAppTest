import LayoutMain from '../views/LayoutMain.vue';
import LayoutSub from '../views/LayoutSub.vue';

const routeRoutes = [
  {
    path: '/cms',
    component: LayoutMain,
    children: [
      {
        path: 'order',
        component: () => import('../views/order/OrderMain.vue'),
      },
    ],
  },
];

export default routeRoutes;

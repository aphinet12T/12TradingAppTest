import LayoutMain from '../views/LayoutMain.vue';
import LayoutSub from '../views/LayoutSub.vue';

const orderRoutes = [
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
  {
    path: '/cms/order',
    component: LayoutSub,
    children: [
      {
        path: 'add',
        component: () => import('../views/order/OrderAdd.vue'),
      }
    ],
  },
];

export default orderRoutes;

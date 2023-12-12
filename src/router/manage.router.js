import LayoutMain from '../views/LayoutMain.vue';
import LayoutSub from '../views/LayoutSub.vue';

const manageRoutes = [
  {
    path: '/cms',
    component: LayoutMain,
    children: [
      {
        path: 'manage',
        component: () => import('../views/manage/ManageMain.vue'),
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

export default manageRoutes;

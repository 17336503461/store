import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LESSON: AppRouteRecordRaw = {
  path: '/authority',
  name: 'Authority',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '权限管理',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 8,
  },
  children: [
    {
      path: 'user',
      name: 'User',
      component: () => import('@/views/authority/user/index.vue'),
      meta: {
        locale: '用户管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'auth',
      name: 'Auth',
      component: () => import('@/views/authority/auth/index.vue'),
      meta: {
        locale: '权限管理',
        requiresAuth: true,
        roles: ['*'],
      },
    }
  ],
};

export default LESSON;

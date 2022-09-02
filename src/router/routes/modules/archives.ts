import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const ARCHIVES: AppRouteRecordRaw = {
  path: '/student',
  name: 'Student',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '学员档案',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 2,
  },
  children: [
    {
      path: 'list',
      name: 'List',
      component: () => import('@/views/archives/list/index.vue'),
      meta: {
        locale: '学员列表',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'detail',
      name: 'Detail',
      component: () => import('@/views/StudentDetail/index.vue'),
      meta: {
        locale: '学员详情',
        requiresAuth: true,
        roles: ['*'],
      },
    }
  ],
};

export default ARCHIVES;

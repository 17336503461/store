import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const VISUALIZATION: AppRouteRecordRaw = {
  path: '/visualization',
  name: 'visualization',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.visualization',
    requiresAuth: true,
    icon: 'icon-apps',
    order: 1,
  },
  children: [
    {
      path: 'data-analysis',
      name: 'DataAnalysis',
      component: () => import('@/views/visualization/data-analysis/index.vue'),
      meta: {
        locale: 'menu.teaching.material.management',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    {
      path: 'class-manage',
      name: 'ClassManage',
      component: () => import('@/views/visualization/class-manage/index.vue'),
      meta: {
        locale: '班级管理',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
};

export default VISUALIZATION;

import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const REPOSITORY: AppRouteRecordRaw = {
  path: '/repository',
  name: 'Repository',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '题库管理',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 7,
  },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: () => import('@/views/repository/index/index.vue'),
      meta: {
        locale: '题库',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'judgment',
      name: 'Judgment',
      component: () => import('@/views/repository/judgment/index.vue'),
      meta: {
        locale: '判断题',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'picking',
      name: 'Picking',
      component: () => import('@/views/repository/picking/index.vue'),
      meta: {
        locale: '选择题',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'machine',
      name: 'Machine',
      component: () => import('@/views/repository/machine/index.vue'),
      meta: {
        locale: '真机题',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'judgment-record',
      name: 'JudgmentRecord',
      component: () => import('@/views/repository/judgmentRecord/index.vue'),
      meta: {
        locale: '判断题录入',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'picking-record',
      name: 'PickingRecord',
      component: () => import('@/views/repository/pickingRecord/index.vue'),
      meta: {
        locale: '选择题录入',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'machine-record',
      name: 'MachineRecord',
      component: () => import('@/views/repository/machineRecord/index.vue'),
      meta: {
        locale: '真机题录入',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'unit-submit',
      name: 'UnitSubmit',
      component: () => import('@/views/repository/unitSubmit/index.vue'),
      meta: {
        locale: '单元提交',
        requiresAuth: true,
        roles: ['*'],
      },
    }
  ],
};

export default REPOSITORY;

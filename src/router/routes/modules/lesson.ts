import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LESSON: AppRouteRecordRaw = {
  path: '/lesson',
  name: 'Lesson',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '课程管理',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'series',
      name: 'Series',
      component: () => import('@/views/lesson/series/index.vue'),
      meta: {
        locale: '技术栈管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'subject',
      name: 'Subject',
      component: () => import('@/views/lesson/subject/index.vue'),
      meta: {
        locale: '科目管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'group',
      name: 'Group',
      component: () => import('@/views/lesson/group/index.vue'),
      meta: {
        locale: '班级管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'timetable',
      name: 'Timetable',
      component: () => import('@/views/lesson/timetable/index.vue'),
      meta: {
        locale: '排课管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'schedule',
      name: 'Schedule',
      component: () => import('@/views/lesson/schedule/index.vue'),
      meta: {
        locale: '计划排课',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'single-schedule',
      name: 'Single',
      component: () => import('@/views/lesson/singleSchedule/index.vue'),
      meta: {
        locale: '个性化排课',
        requiresAuth: true,
        roles: ['*'],
      },
    }
  ],
};

export default LESSON;

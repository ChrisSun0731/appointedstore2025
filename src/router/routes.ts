import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  /*{
    path: '/map',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MapPage.vue') }],
  },
  {
    path: '/book',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/BookPage.vue') }],
  },
  {
    path: '/ckhs',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/StorePage/CKHSPage.vue') }],
  },
  {
    path: '/zsgh',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/StorePage/ZSGHPage.vue') }],
  },
  {
    path: '/cghs',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/StorePage/CGHSPage.vue') }],
  },
  {
    path: '/taipeimainstation',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/StorePage/TaipeiMainStationPage.vue') },
    ],
  },
  {
    path: '/ximen',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/StorePage/XimenPage.vue') }],
  },
  {
    path: '/gongguan',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/StorePage/GongGuanPage.vue') }],
  },
  {
    path: '/guting',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/StorePage/GuTingPage.vue') }],
  },
  {
    path: '/other',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/StorePage/OtherPage.vue') }],
  },*/
  {
    path: '/ckhs',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/ComingSoonPage.vue') }],
  },
  {
    path: '/zsgh',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/ComingSoonPage.vue') }],
  },
  {
    path: '/cghs',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/ComingSoonPage.vue') }],
  },
  {
    path: '/taipeimainstation',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/ComingSoonPage.vue') }],
  },
  {
    path: '/ximen',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/ComingSoonPage.vue') }],
  },
  {
    path: '/gongguan',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/ComingSoonPage.vue') }],
  },
  {
    path: '/guting',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/ComingSoonPage.vue') }],
  },
  {
    path: '/other',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/ComingSoonPage.vue') }],
  },
  {
    path: '/contact',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ContactPage.vue') }],
  },
  {
    path: '/about',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AboutPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

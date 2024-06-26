import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/demo/display',
    },
    {
      path: '/demo',
      children: [
        {
          path: 'border',
          component: () => import('@/views/BorderView/index.vue'),
        },
        {
          path: 'display',
          component: () => import('@/views/DisplayView/index.vue'),
        },
        {
          path: 'layout',
          component: () => import('@/views/LayoutView/index.vue'),
        },
        {
          path: 'flex',
          component: () => import('@/views/FlexView/index.vue'),
        },
        {
          path: 'cursor',
          component: () => import('@/views/CursorView/index.vue'),
        },
        {
          path: 'flex-composition',
          component: () => import('@/views/FlexCompositionView/index.vue'),
        },
        {
          path: 'float',
          component: () => import('@/views/FloatView/index.vue'),
        },
        {
          path: 'font',
          component: () => import('@/views/FontView/index.vue'),
        },
        {
          path: 'spacing',
          component: () => import('@/views/SpacingView/index.vue'),
        },
        {
          path: 'text-and-typesetting',
          component: () => import('@/views/TextAndTypesettingView/index.vue'),
        },
        {
          path: 'scss-vars',
          component: () => import('@/views/ScssVarsView/index.vue'),
        },
      ],
    },
  ],
})

export default router

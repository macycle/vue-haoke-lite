import Layout from '@/layout'

export default {
  path: '/article',
  name: 'article',
  component: Layout,
  redirect: '/article/list',
  meta: {
    title: 'articleManage',
    icon: 'icon-wenzhang'
  },
  children: [
    {
      path: '/article/list',
      component: () => import(/* webpackChunkName: "article" */ '@/views/article/list.vue'),
      meta: {
        title: 'articleList'
      }
    },
    {
      path: '/article/type',
      component: () => import(/* webpackChunkName: "article" */ '@/views/article/type.vue'),
      meta: {
        title: 'articleType'
      }
    },
    {
      path: '/article/type-add',
      component: () => import(/* webpackChunkName: "article" */ '@/views/article/type-add.vue'),
      meta: {
        title: 'articleTypeAdd'
      },
      hidden: true
    },
    {
      path: '/article/list-add',
      component: () => import(/* webpackChunkName: "article" */ '@/views/article/list-add.vue'),
      meta: {
        title: 'articleListAdd'
      },
      hidden: true
    }
  ]
}

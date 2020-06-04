import Layout from '@/layout'

export default {
  path: '/admin',
  component: Layout,
  name: 'admin',
  redirect: '/admin',
  meta: {
    title: 'admin',
    icon: 'icon-zhuye',
    roles: ['staff']
  },
  children: [
    {
      path: '/admin',
      component: () => import(/* webpackChunkName: "admin" */ '@/views/admin/index.vue'),
      meta: {
        roles: ['staff']
      }
    }
  ]
}

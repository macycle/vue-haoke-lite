import Layout from '@/layout'

export default {
  path: '/data',
  component: Layout,
  redirect: '/data',
  meta: {
    title: 'data',
    icon: 'icon-wangguan'
  },
  children: [
    {
      path: '/data',
      component: () => import(/* webpackChunkName: "data" */ '@/views/data/index.vue'),
      meta: {}
    }
  ]
}

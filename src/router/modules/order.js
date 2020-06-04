import Layout from '@/layout'

export default {
  path: '/order',
  name: 'order',
  component: Layout,
  redirect: '/order/list',
  meta: {
    title: 'orderManage',
    icon: 'icon-dingdan'
  },
  children: [
    {
      path: '/order/list',
      component: () => import(/* webpackChunkName: "order" */ '@/views/order/list.vue'),
      meta: {
        title: 'orderList'
      }
    },
    {
      path: '/order/refund',
      component: () => import(/* webpackChunkName: "order" */ '@/views/order/refund.vue'),
      meta: {
        title: 'orderRefund'
      }
    },
    {
      path: '/order/comment',
      component: () => import(/* webpackChunkName: "order" */ '@/views/order/comment.vue'),
      meta: {
        title: 'orderComment'
      }
    }
  ]
}

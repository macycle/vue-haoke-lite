import Layout from '@/layout'

export default {
  path: '/product',
  name: 'product',
  component: Layout,
  redirect: '/product/list',
  meta: {
    title: 'productManage',
    icon: 'icon-shangpin'
  },
  children: [
    {
      path: '/product/list',
      component: () => import(/* webpackChunkName: "product" */ '@/views/product/list.vue'),
      meta: {
        title: 'productList'
      }
    },
    {
      path: '/product/type',
      component: () => import(/* webpackChunkName: "product" */ '@/views/product/type.vue'),
      meta: {
        title: 'productType'
      }
    },
    {
      path: '/product/type-add',
      component: () => import(/* webpackChunkName: "product" */ '@/views/product/type-add.vue'),
      meta: {
        title: 'productTypeAdd'
      },
      hidden: true
    },
    {
      path: '/product/list-add',
      component: () => import(/* webpackChunkName: "product" */ '@/views/product/list-add.vue'),
      meta: {
        title: 'productListAdd'
      },
      hidden: true
    }
  ]
}

import Layout from '@/layout'

export default {
  path: '/user',
  name: 'user',
  component: Layout,
  redirect: '/user/list',
  meta: {
    title: 'userManage',
    icon: 'icon-yonghu'
  },
  children: [
    {
      path: '/user/list',
      component: () => import(/* webpackChunkName: "user" */ '@/views/user/list.vue'),
      meta: {
        title: 'userList'
      }
    },
    {
      path: '/user/grade',
      component: () => import(/* webpackChunkName: "user" */ '@/views/user/grade.vue'),
      meta: {
        title: 'userGrade'
      }
    },
    {
      path: '/user/grade-add',
      component: () => import(/* webpackChunkName: "user" */ '@/views/user/grade-add.vue'),
      meta: {
        title: 'userGradeAdd'
      },
      hidden: true
    },
    {
      path: '/user/list-add',
      component: () => import(/* webpackChunkName: "user" */ '@/views/user/list-add.vue'),
      meta: {
        title: 'userListAdd'
      },
      hidden: true
    }
  ]
}

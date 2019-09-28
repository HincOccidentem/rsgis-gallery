import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/user',
      name: 'User HomePage',
      component: () => import('./views/UserHomePage.vue')
    },
    {
      path: '/item',
      name: 'Item',
      component: () => import('./views/UserItem.vue')
    },
    {
      path: '/create',
      name: 'Create Item',
      component: () => import('./views/CreateNewItem.vue')
    },
    {
      path: '/modify',
      name: 'Modify Information',
      component: () => import('./views/ModifyInfo.vue')
    },
    {
      path: '/login',
      name: 'Login Page',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/admin',
      name: 'Admin Dashboard',
      component: () => import('./views/AdminDashboard.vue'),
      redirect: '/ad-main',
      children: [
        {
          path: '/ad-main',
          name: 'Admin Dashboard Main Page',
          component: () => import('./views/AdmMainPage.vue'),
          meta: { title: '系统首页' }
        },
        {
          path: '/ad-stats',
          name: 'Admin Dashboard Statistic',
          component: () => import('./views/AdmStatsPage.vue'),
          meta: { title: '数据统计' }
        },
        {
          path: '/ad-user',
          name: 'Admin Dashboard User Manager',
          component: () => import('./views/AdmUserPage.vue'),
          meta: { title: '用户管理' }
        },
        {
          path: '/ad-rank',
          name: 'Admin Dashboard User Rank',
          component: () => import('./views/AdmRankPage.vue'),
          meta: { title: '排名管理' }
        },
        {
          path: '/ad-files',
          name: 'Admin Dashboard File Manager',
          component: () => import('./views/AdmFilesPage.vue'),
          meta: { title: '文件管理' }
        }
      ]
    },
  ]
})

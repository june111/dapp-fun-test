import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: 'dapp-lab/',
  routes: [{
    path: '/',
    component: () => import('./components/layout.vue'),
    redirect: '/home',
    children: [{
      path: 'home',
      component: () => import('./views/home.vue')
    }, {
      path: 'create',
      component: () => import('./views/create.vue')
    },  {
      path: 'my-zombie',
      component: () => import('./views/myZombie.vue')
    }, ]
  }, {
    path: '*',
    component: () => import('@/components/404.vue')
  }]
})

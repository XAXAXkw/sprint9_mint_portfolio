import { createRouter, createWebHashHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'

const routes = [
  {
    path: '/',
    name: 'start',
    component: StartPage
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  
  {
    path: '/contract',
    name: 'contract',

    component: () => import('../views/ContractView.vue')
  },
  {
    path: '/audio',
    name: 'audio',

    component: () => import('../components/AudioCard.vue')
  },
  {
    path: '/pic',
    name: 'pic',

    component: () => import('../components/PicCard.vue')
  },
  
  {
    path: '/biblio',
    name: 'biblio',

    component: () => import('../components/BiblioComponent.vue')
  },
  
  {
    path: '/visor/:id',
    name: 'visor',

    component: () => import('../components/VisorComponent.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

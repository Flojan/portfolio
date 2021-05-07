import { createRouter, createWebHistory } from 'vue-router'
import OnePager from './views/OnePager.vue'
import PageNotFound from './views/PageNotFound.vue'


const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    { 
      path: '/',
      name: 'onepager',
      component: OnePager,
      meta: { showNavBar: true }
    },
    {
      path: '/:catchAll(.*)',
      name: 'PageNotFound',
      component: PageNotFound,
      meta: { showNavBar: false }
    }
  ]
})

export default router

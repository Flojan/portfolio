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
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: PageNotFound,
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import OnePager from './views/OnePager.vue'
import Feature from './components/Feature.vue'


const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/welcome',
      name: 'welcome',
      component: OnePager,
    },
    { 
      path: '/',
      name: 'Feature',
      component: Feature,
    }
  ]
})

export default router

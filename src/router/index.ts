import { createRouter, createWebHistory } from 'vue-router'
import HelloWorldVue from '../components/HelloWorld.vue'


const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/kategorien/',
      name: 'kategorie',
      component: HelloWorldVue,
      meta: { showNavBar: true }
    }
  ]
})

export default router

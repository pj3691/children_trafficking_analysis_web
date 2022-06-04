import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomePage from '../components/HomePage/HomePage.vue'
import DataAnalysis from '../components/DataAnalysis/DataAnalysis.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
]

const router = new VueRouter({
  routes: [
    {
      path: '/homepage',
      component: HomePage
    },
    {
      path: '/DataAnalysis',
      component: DataAnalysis
    }
  ]
})

export default router

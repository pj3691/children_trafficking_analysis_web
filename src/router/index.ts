import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import DataAnalysis from '../components/DataAnalysis.vue'
import ConTent from '../views/Layout/ConTent.vue'
import APP from '../App.vue'
import MyMenux from '../views/Layout/MyMenux.vue'
import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
]

const router = new VueRouter({
  routes: [
    {
      path: '',
      component: HomePage
    },
    {
      path: '/DataAnalysis',
      component: DataAnalysis
    }
  ]
})

export default router

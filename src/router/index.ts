import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MapPage from '../components/MapPage.vue'
import DataAnalysis from '../components/DataAnalysis.vue'
import LogIn from '../components/LogIn.vue'
import CaseEntry from '../components/CaseEntry.vue'
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
      component: DataAnalysis
    },
    {
      path: '/DataAnalysis',
      component: DataAnalysis
    },
    {
      path: '/LogIn',
      component: LogIn
    },
    {
      path: '/MapPage',
      component: MapPage
    },
    {
      path: '/CaseEntry',
      component: CaseEntry
    }
  ]
})

export default router

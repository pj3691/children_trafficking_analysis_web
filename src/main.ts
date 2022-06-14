import Vue from 'vue'
import App from './App.vue'
import MapPage from './components/MapPage.vue'
import router from './router'
import store from './store'
import { Form, FormItem, Menu, Submenu, MenuItem, MenuItemGroup, Option, OptionGroup, Input, Select, Button, Col, TimePicker, DatePicker, Upload } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import DataV from '@jiaminghi/data-view'
import Charts from '@jiaminghi/charts'
import VCharts from 'v-charts'
import pie from 'v-charts/lib/pie.common'
Vue.config.productionTip = false
Vue.use(Form)
Vue.use(Col)
Vue.use(TimePicker)
Vue.use(DatePicker)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Upload)
Vue.use(FormItem)
Vue.use(Option)
Vue.use(Input)
Vue.use(Select)
Vue.use(OptionGroup)
Vue.use(DataV)
Vue.use(VCharts)
Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

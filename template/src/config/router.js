import Vue from 'vue'
import Router from 'vue-router'
import test from '../page/test.vue'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      component:test
    }
  ]
})

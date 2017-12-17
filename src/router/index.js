import Vue from 'vue'
import Router from 'vue-router'
import backEnd from '@/components/backEnd'
import frontEnd from '@/components/frontEnd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/backEnd',
      name: 'backEnd',
      component: backEnd
    },
    {
      path: '/frontEnd',
      name: 'frontEnd',
      component: frontEnd
    }
  ]
})

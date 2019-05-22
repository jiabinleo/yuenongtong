import Vue from 'vue'
import Router from 'vue-router'

const Index = (resolve) => {
  import('../pages/index').then(module => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})

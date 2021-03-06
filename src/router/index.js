import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => {
  import('../pages/index').then(module => {
    resolve(module)
  })
}
const Fwzx = (resolve) => {
  import('../pages/fuwuzhongxin').then(module => {
    resolve(module)
  })
}
const Nyzx = (resolve) => {
  import('../pages/nyzx').then(module => {
    resolve(module)
  })
}
const Xw = resolve => {
  import('../pages/xw').then(module => {
    resolve(module)
  })
}
const Bd = (resolve) => {
  import('../pages/baodan').then(module => {
    resolve(module)
  })
}
const Wo = (resolve) => {
  import('../pages/wo').then(module => {
    resolve(module)
  })
}
const Zxtb = (resolve) => {
  import('../pages/zxtb').then(module => {
    resolve(module)
  })
}
const Wydk = (resolve) => {
  import('../pages/wydk').then(module => {
    resolve(module)
  })
}
const Nyqx = (resolve) => {
  import('../pages/nyqx').then(module => {
    resolve(module)
  })
}
const Zwyy = (resolve) => {
  import('../pages/zwyy').then(module => {
    resolve(module)
  })
}
const Gqsc = (resolve) => {
  import('../pages/gqsc').then(module => {
    resolve(module)
  })
}
const Login = (resolve) => {
  import('../pages/login').then(module => {
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
    },
    {
      path: '/fwzx',
      name: 'fwzx',
      component: Fwzx
    },
    {
      path: '/nyzx',
      name: 'nyzx',
      component: Nyzx
    },
    {
      path: '/bd',
      name: 'bd',
      component: Bd
    },
    {
      path: '/wo',
      name: 'wo',
      component: Wo
    },
    {
      path: '/zxtb',
      name: 'zxtb',
      component: Zxtb
    },
    {
      path: '/wydk',
      name: 'wydk',
      component: Wydk
    },
    {
      path: '/nyqx',
      name: 'nyqx',
      component: Nyqx
    },
    {
      path: '/zwyy',
      name: 'zwyy',
      component: Zwyy
    },
    {
      path: '/zwyy',
      name: 'zwyy',
      component: Zwyy
    },
    {
      path: '/gqsc',
      name: 'gqsc',
      component: Gqsc
    },
    {
      path: '/xw/:id',
      name: 'xw',
      component: Xw
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

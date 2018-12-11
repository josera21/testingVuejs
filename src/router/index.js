import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Users from '@/components/Users'
import DeleteUsers from '@/components/DeleteUsers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/deleteUsers',
      name: 'DeleteUsers',
      component: DeleteUsers
    }
  ]
})

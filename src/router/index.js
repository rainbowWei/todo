import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

const todo = r => require.ensure([], () => r(require('../pages/todo/todo')), 'todo')
const hello = r => require.ensure([], () => r(require('../components/HelloWorld')), 'hello')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
          path: '/',
          redirect: 'todo'
        }, {
          path: '/todo',
          name: 'todo',
          component: todo
        }, {
          path: '/hello',
          name: 'hello',
          component: hello
        }
      ]
    }
  ]
})

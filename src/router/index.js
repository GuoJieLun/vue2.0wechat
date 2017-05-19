import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'


const chat = r => require.ensure([], () => r(require('../views/chat/chat')), 'chat');
const contact = r => require.ensure([], () => r(require('../views/contact/contact')), 'contact');
const find = r => require.ensure([], () => r(require('../views/find/find')), 'find');
const user = r => require.ensure([], () => r(require('../views/user/user')), 'user');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      mode: 'hash',
      children: [
        {
          path: '',
          redirect: '/chat'
        },
        {
          path:'/chat',
          component:chat
        },
        {
          path:'/contact',
          component:contact
        },
        {
          path:'/find',
          component:find
        },
        {
          path:'/user',
          component:user
        }
      ]
    }
  ]
})

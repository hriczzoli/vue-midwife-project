import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Log from '@/components/Log'
import Log4 from '@/components/Log4'
import Notes from '@/components/Notes'
import Progress from '@/components/Progress'
import Export from '@/components/Export'
import Export2 from '@/components/Export2'
import Profile from '@/components/Profile'


import firebase from 'firebase'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/log',
      name: 'Log',
      component: Log,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/log4',
      name: 'Log4',
      component: Log4,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/notes',
      name: 'Notes',
      component: Notes,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/progress',
      name: 'Progress',
      component: Progress,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/export',
      name: 'Export',
      component: Export,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/export2',
      name: 'Export2',
      component: Export2,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('hello')
  else if (!requiresAuth && currentUser) next('log')
  else next()
})

export default router

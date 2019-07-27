import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Alumno from '@/components/Alumno'
import Profesor from '@/components/Profesor'
import Asignatura from '@/components/Asignatura'
//import Profesor from '@/components/Profesor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/alumno',
      name: 'alumno',
      component: Alumno
    },   
    {
      path: '/profesor',
      name: 'profesor',
      component: Profesor
    }, 
    {
      path: '/asignatura',
      name: 'asignatura',
      component: Asignatura
    }, 
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

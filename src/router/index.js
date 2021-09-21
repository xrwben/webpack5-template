import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../pages/home.vue')
const Notice = () => import('../pages/notice.vue')
const CourseList = () => import('../pages/course-list.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/notice',
      component: Notice
    },
    {
      path: '/course',
      component: CourseList
    }
  ]
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EditForm from '../components/EditForm.vue'
import AddFormEmployee from '../components/AddFormEmployee'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addFormEmployee',
    name: 'AddFormEmployee',
    component: AddFormEmployee
  },
  {
    path: '/:id',
    name: 'EditForm',
    component: EditForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

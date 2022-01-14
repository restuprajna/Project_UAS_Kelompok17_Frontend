import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/customer/Home.vue'
import Explore from '../views/customer/Explore.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import Customer from '../views/admin/Customer.vue'
import Order from '../views/admin/Order.vue'
import Product from '../views/admin/Product.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Billing from '../components/Billing.vue'
import AddProduct from '../components/AddProduct.vue'
import Footer from '../components/Footer.vue'
import PaymentSuccess from '../components/PaymentSuccess.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/billing',
    name: 'Billing',
    component: Billing
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },

  {
    path: '/customer',
    name: 'Customer',
    component: Customer
  },

  {
    path: '/order',
    name: 'Order',
    component: Order
  },

  {
    path: '/product',
    name: 'Product',
    component: Product
  },

  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  },

  {
    path: '/footer',
    name: 'Footer',
    component: Footer
  },

  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },

  {
    path: '/paymentsuccess',
    name: 'PaymentSuccess',
    component: PaymentSuccess
  },
  
  {
    path: '/explore',
    name: 'Explore',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

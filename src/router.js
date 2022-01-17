import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Dashboard from "./views/admin/Dashboard.vue"
import Customer from "./views/admin/Customer.vue"
import Order from "./views/admin/Order.vue"
import Product from "./views/admin/Product.vue"
import AddProduct from "./components/AddProduct.vue"
import Footer from "./components/Footer.vue"
import Billing from "./components/Billing.vue"
import EditProduct from "./components/EditProduct.vue"
import DelProduct from "./components/DelProduct.vue"
import Explore from "./views/customer/Explore.vue"
import PaymentSuccess from "./components/PaymentSuccess.vue"

// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./components/BoardUser.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    // lazy-loaded
    component: Dashboard,
  },
  {
    path: "/customer",
    name: "Customer",
    // lazy-loaded
    component: Customer,
  },
  {
    path: "/order",
    name: "Order",
    // lazy-loaded
    component: Order,
  },
  {
    path: "/product",
    name: "Product",
    // lazy-loaded
    component: Product,
  },
  {
    path: "/addproduct",
    name: "AddProduct",
    // lazy-loaded
    component: AddProduct,
  },
  {
    path: "/footer",
    name: "Footer",
    // lazy-loaded
    component: Footer,
  },
  {
    path: "/explore",
    name: "Explore",
    // lazy-loaded
    component: Explore,
  },
  {
    path: "/billing",
    name: "Billing",
    // lazy-loaded
    component: Billing,
  },
  {
    path: "/editproduct/:id",
    name: "EditProduct",
    // lazy-loaded
    component: EditProduct,
  },
  {
    path: "/delproduct/:id",
    name: "DelProduct",
    // lazy-loaded
    component: DelProduct,
  },
  {
    path: "/paymentsuccess",
    name: "PaymentSuccess",
    // lazy-loaded
    component: PaymentSuccess,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;
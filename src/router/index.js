import { createRouter,createWebHistory } from "vue-router";
import Layout from '../components/Layout.vue'
import home from '../views/home.vue'
import about from '../views/about.vue'
import post from '../views/post.vue'
import create from '../views/create.vue'
import cart from '../views/cart.vue'
const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [   
      {
        path: '/',
        name: 'home',
        component: home
      },
      {
        path: '/about',
        name: 'about',
        component: about
      },
      {
        path: '/post',
        name: 'post',
        component: post
      },
      {
        path: '/create',
        name: 'create',
        component: create
      },
       {
        path: '/cart',
        name: 'cart',
        component: cart
      }

    ]  
  },
  {
    path: '/signup',
    component:()=>import ('../components/Signup.vue')
  },
   {
    path: '/login',
    component:()=>import ('../components/Login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../components/NotFoundPage.vue')
  }


];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

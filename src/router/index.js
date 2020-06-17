import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from "firebase";




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:postId',
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/event',
    name: 'Event',
    component: () => import(/* webpackChunkName: "about" */ '../views/Event.vue')
  },
  {
    path: '/question',
    name: 'Question',
    component: () => import(/* webpackChunkName: "about" */ '../views/Question.vue')
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ranking.vue')
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
},
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    meta:{
        requiresAuth:true
         }
    }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})


router.beforeEach((to,from,next)=>{
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('dashboard')
  else next();
    });

export default router;

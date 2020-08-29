import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/login',
    name: 'Login',
    meta: { isLogin: true },
    component: () => import('@/views/Login'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.isLogin && !localStorage.getItem('guarder')) return next('/login');
  next();
});

export default router;

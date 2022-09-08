import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/reactive',
      name: 'Reactive',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Reactive.vue'),
    },
    {
      path: '/computed',
      name: 'Computed',
      component: () => import('../views/ComputedAttr.vue'),
    },
    {
      path: '/lifecycle',
      name: 'Lifecycle',
      component: () => import('../views/LifeCircle.vue'),
    },
    {
      path: '/watch',
      name: 'Watch',
      component: () => import('../views/Watch.vue'),
    },
  ],
});

export default router;

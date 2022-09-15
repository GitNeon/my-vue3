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
    {
      path: '/domRef',
      name: 'DomRef',
      component: () => import('../views/DOMRef.vue'),
    },
    {
      path: '/pc',
      component: () => import('../views/Pc/Index.vue'),
    },
    {
      path: '/event',
      component: () => import('../views/Event/Index.vue'),
    },
    {
      path: '/slot',
      component: () => import('../views/Slot/Index.vue'),
    },
    {
      path: '/compose',
      component: () => import('../views/Composables/Index.vue'),
    },
    {
      path: '/transition',
      component: () => import('../views/Transition/Index.vue'),
    },
    {
      path: '/transitionGroup',
      component: () => import('../views/TransitionGroup/Index.vue'),
    },
    {
      path: '/nestedRoute',
      component: () => import('../views/NestedRoutes/Index.vue'),
      children: [
        {
          path: 'ItemOne',
          component: () => import('../views/NestedRoutes/Item/ItemOne.vue'),
        },
        {
          path: 'ItemTwo',
          component: () => import('../views/NestedRoutes/Item/ItemTwo.vue'),
        },
      ],
    },
  ],
});

export default router;

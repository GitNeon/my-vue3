import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      beforeEnter: (to, from) => {
        console.log('Home组件独享守卫---beforeEnter');
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/reactive',
      name: 'Reactive',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Reactive.vue')
    },
    {
      path: '/computed',
      name: 'Computed',
      component: () => import('../views/ComputedAttr.vue')
    },
    {
      path: '/lifecycle',
      name: 'Lifecycle',
      component: () => import('../views/LifeCircle.vue')
    },
    {
      path: '/watch',
      name: 'Watch',
      component: () => import('../views/Watch.vue')
    },
    {
      path: '/domRef',
      name: 'DomRef',
      component: () => import('../views/DOMRef.vue')
    },
    {
      path: '/pc',
      component: () => import('../views/Pc/Index.vue')
    },
    {
      path: '/event',
      component: () => import('../views/Event/Index.vue')
    },
    {
      path: '/slot',
      component: () => import('../views/Slot/Index.vue')
    },
    {
      path: '/compose',
      component: () => import('../views/Composables/Index.vue')
    },
    {
      path: '/transition',
      component: () => import('../views/Transition/Index.vue')
    },
    {
      path: '/transitionGroup',
      component: () => import('../views/TransitionGroup/Index.vue')
    },
    {
      path: '/nestedRoute',
      component: () => import('../views/NestedRoutes/Index.vue'),
      children: [
        {
          path: 'ItemOne/:id',
          component: () => import('../views/NestedRoutes/Item/ItemOne.vue')
        },
        {
          path: 'ItemTwo',
          component: () => import('../views/NestedRoutes/Item/ItemTwo.vue')
        },
        {
          path: 'ItemThree/:username',
          props: true,
          component: () => import('../views/NestedRoutes/Item/ItemThree.vue')
        },
        {
          path: 'ItemFour',
          props: {
            name: 'xiaoming',
            age: 18,
            address: {
              code: '002355555'
            }
          },
          component: () => import('../views/NestedRoutes/Item/ItemFour.vue')
        }
      ]
    },
    {
      path: '/gsap',
      component: () => import('../views/Gsap/Index.vue')
    },
    {
      path: '/bigScreen',
      component: () => import('../views/BigScreen/Index.vue')
    },
    {
      path: '/bigScreen/vwvh',
      component: () => import('../views/BigScreen/vwvh/Index.vue')
    },
    {
      path: '/bigScreen/scale',
      component: () => import('../views/BigScreen/scale/Index.vue')
    },
    {
      path: '/bigScreen/vscale',
      component: () => import('../views/BigScreen/vScaleScreen/Index.vue')
    },
    {
      path: '/ps-ui',
      component: () => import('../views/PristineUI.vue')
    }
  ]
});

console.log(router.getRoutes());

/*router.beforeEach((to, from) => {
  console.log('全局前置守卫', 'beforeEach', to, from)
})

router.beforeResolve((to, from) => {
  console.log('全局解析守卫', 'beforeResolve', to, from)
})

router.afterEach((to, from) => {
  console.log('全局后置守卫', 'afterEach', to, from)
})*/

export default router;

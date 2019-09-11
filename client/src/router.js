import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router= new Router({
  routes: [
    {
      path: "/",
      redirect: "/login",
      name:'login',
      component: () => import('./views/Login.vue'),
      hidden: true,
      children: [
        {
          path: '/login',
          name:'login',
          component: () => import('./views/Login.vue'),
        }
      ]
     
    },
    {
      path: "/bookList",
      component: () => import('./views/BookList.vue'),
      name: "bookList",
    },
    {
      path: "/bookDetail",
      component:  () => import('./views/BookDetail.vue'),
      name: "bookDetail",
      meta: { keepAlive: false },
    },
  ]
})


export default router;

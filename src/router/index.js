import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../components/login.vue";
import RegisterView from "../components/register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },

  
  ],
});

export default router;
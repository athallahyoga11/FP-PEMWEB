import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../components/login.vue";
import RegisterView from "../components/register.vue";
import DashboardView from "../components/dashboard.vue";


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

    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
  
  ],
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import HomeView from '../views/HomeView.vue';
import TicketCreate from '../views/TicketCreate.vue';
import TicketList from '../views/TicketList.vue';
import TicketOverview from '../views/TicketOverview.vue';
import TicketUpdate from '../views/TicketUpdate.vue';
import LoginView from '@/views/LoginView.vue';
import AboutView from '@/views/AboutView.vue';
import SignupView from '@/views/Signupview.vue';
// Define the routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },{
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/ticket-create',
    name: 'TicketCreate',
    component: TicketCreate,
  },
  {
    path: '/ticket-list',
    name: 'TicketList',
    component: TicketList,
  },
  {
    path: '/ticket-overview/:id', // assuming :id is a placeholder for the ticket ID
    name: 'TicketOverview',
    component: TicketOverview,
    props: true,
  },
  {
    path: '/ticket-update/:id', // assuming :id is a placeholder for the ticket ID
    name: 'TicketUpdate',
    component: TicketUpdate,
    props: true,
  },
  {
    path: '/login', // assuming :id is a placeholder for the ticket ID
    name: 'Login',
    component: LoginView,
    props: true,
  },
  {
    path: '/signup', // assuming :id is a placeholder for the ticket ID
    name: 'SignUp',
    component: SignupView,
    props: true,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ReportFormView from '@/views/ReportFormView.vue'
import LeaderboardView from '@/views/LeaderboardView.vue'
import SignUp from '@/components/Auth/SignUp.vue'
import ResetPassword from '@/components/Auth/ResetPassword.vue'
import EditBio from '@/components/Auth/EditBio.vue'
import CompleteLogin from '@/components/Auth/CompleteLogin.vue'
import MyReports from '@/components/Dashboard/MyReports.vue'
import Payments from '@/components/Dashboard/ Payments.vue'
import TotalReportsCard from '@/components/Dashboard/TotalReportsCard.vue'
import Earnings from '@/components/Dashboard/Earnings.vue'
import Vulnerability from '@/components/Vulnerability/Vulnerability.vue'
import index from '@/components/Management/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // authentication page
  {
    path:'/signUp',
    name:'signUp',
    component:SignUp
  },
  {
    path:'/reset',
    name:'reset',
    component:ResetPassword
  },
  {
    path:'/bio',
    name:'bio',
    component:EditBio
  },
  {
    path:'/login',
    name:'login',
    component:LoginView
  },
  {
    path:'/complete',
    name:'complete',
    component:CompleteLogin
  },

  // dashbaord page
  {
    path:'/dashboard',
    name:'dashboard',
    component:DashboardView
  },
  {
    path:'/report-Form',
    name:'ReportForm',
    component:ReportFormView
  },
  {
    path:'/leaderboard',
    name:'leaderboard',
    component:LeaderboardView
  },
  {
    path: '/my-reports',
    name: 'MyReports',
    component: MyReports,
  },
  {
    path: '/program-details',
    name: 'ProgramDetails',
    component: TotalReportsCard,
  },
  {
    path: '/payments',
    name: 'payments',
    component: Payments,
  },
  {
    path: '/earnings',
    name: 'earnings',
    component: Earnings,
  },
  // Vulnerability
  {
    path:'/vulnerability',
    name:'vulnerability',
    component: Vulnerability
  },
  {
    path:'/management',
    name:'management',
    component:index
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

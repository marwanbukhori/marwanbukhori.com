import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import views
import { Home, Projects, Certifications, Contact } from '@/views'

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/certifications',
      name: 'certifications',
      component: Certifications
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

// Create and mount app
const app = createApp(App)
app.use(router)
app.mount('#app')

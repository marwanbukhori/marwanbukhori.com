import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./style.css";

// Import views
import {
  Home,
  Projects,
  ProjectDetails,
  Blog,
  BlogPost,
  Certifications,
  Contact,
  About,
} from "@/views";

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/projects/:id",
      name: "project-details",
      component: ProjectDetails,
    },
    {
      path: "/certifications",
      name: "certifications",
      component: Certifications,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost,
    },
  ],
});

// Create and mount app
const app = createApp(App);
app.use(router);
app.mount("#app");

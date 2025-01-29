<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TechCategory {
  title: string;
  items: {
    name: string;
    icon: string;
  }[];
}

const techStack: TechCategory[] = [
  {
    title: "Programming Languages",
    items: [
      { name: "TypeScript", icon: "/icons/TypeScript.svg" },
      { name: "Javascript", icon: "/icons/JavaScript.svg" },
      { name: "PHP", icon: "/icons/PHP.svg" },
      { name: "Python", icon: "/icons/Python.svg" },
      { name: "Dart", icon: "/icons/Dart.svg" }
    ]
  },
  {
    title: "Frontend & Mobile",
    items: [
      { name: "Vue", icon: "/icons/Vue.js.svg" },
      { name: "HTML", icon: "/icons/HTML5.svg" },
      { name: "CSS", icon: "/icons/CSS3.svg" },
      { name: "Tailwind", icon: "/icons/Tailwind_CSS.svg" },
      { name: "Flutter", icon: "/icons/Flutter.svg" },
    ]
  },
  {
    title: "Backend & Databases",
    items: [
      { name: "Node", icon: "/icons/Node.js.svg" },
      { name: "NestJS", icon: "/icons/Nest.js.svg" },
      { name: "Laravel", icon: "/icons/Laravel.svg" },
      { name: "Livewire", icon: "/icons/Livewire.svg" },
      { name: "Django", icon: "/icons/Django.svg" },
      { name: "MySQL", icon: "/icons/MySQL.svg" },
      { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
      { name: "Redis", icon: "/icons/Redis.svg" }
    ]
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", icon: "/icons/Docker.svg" },
      { name: "AWS", icon: "/icons/AWS.svg" },
      { name: "Kubernetes", icon: "/icons/Kubernetes.svg" },
      { name: "Git", icon: "/icons/Git.svg" },
      { name: "Jest", icon: "/icons/Jest.svg" },
      { name: "Cypress", icon: "/icons/Cypress.svg" },
      { name: "Yaml", icon: "/icons/YAML.svg" },
      { name: "GitLab", icon: "/icons/GitLab.svg" },
      { name: "Jira", icon: "/icons/Jira.svg" },
      { name: "Confluence", icon: "/icons/Confluence.svg" }
    ]
  }
];

// Default image for fallback
const DEFAULT_ICON = '/icons/default-tech.svg';

// Handle image loading errors
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = DEFAULT_ICON;
};
</script>

<template>
  <div class="space-y-8">
    <div v-for="category in techStack" :key="category.title">
      <h3 class="font-semibold text-lg mb-4">{{ category.title }}</h3>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        <div
          v-for="tech in category.items"
          :key="tech.name"
          class="flex flex-col items-center p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
        >
          <img
            :src="tech.icon"
            :alt="tech.name"
            @error="handleImageError"
            class="w-12 h-12 mb-2 object-contain"
          />
          <span class="text-sm font-medium">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

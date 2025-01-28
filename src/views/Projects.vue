<script setup lang="ts">
import { ref, computed } from "vue";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TheNavigation from "@/components/TheNavigation.vue";

const projects = [
  {
    title: "RONPOS E-Invoice System",
    description:
      "Microservice for handling e-invoicing in RONPOS POS system, serving major clients like Shell and BH Petrol.",
    image: "/projects/ronpos.png",
    technologies: ["NestJS", "Vue 3", "AWS", "Docker", "TypeScript"],
    type: "Professional",
    highlights: [
      "Implemented serverless architecture using AWS services",
      "Built microservices with NestJS and Vue 3",
      "Integrated with AWS Kinesis, Lambda, SQS, DynamoDB",
      "Implemented comprehensive testing with Jest and Cypress",
    ],
    links: {
      live: null, // Private project
      github: null, // Private repository
    },
  },
  {
    title: "Site Business Operation Module",
    description:
      "Core module in RONPOS for managing business operations, handling large-scale data processing and reporting.",
    image: "/projects/sbo.png",
    technologies: ["Laravel", "Vue", "MySQL", "AWS", "Docker"],
    type: "Professional",
    highlights: [
      "Optimized SQL queries for billion-row tables",
      "Implemented database indexing strategies",
      "Enhanced report generation workflows",
      "Integrated with multiple POS systems",
    ],
    links: {
      live: null,
      github: null,
    },
  },
  {
    title: "Individual Portfolio",
    description:
      "Modern, responsive personal portfolio website built with Vue 3 and Tailwind CSS.",
    image: "/projects/portfolio.png",
    technologies: ["Vue 3", "TypeScript", "Tailwind CSS", "shadcn-vue"],
    type: "Individual",
    highlights: [
      "Modern UI with shadcn-vue components",
      "Responsive design for all devices",
      "Dark mode support",
      "Performance optimized",
    ],
    links: {
      live: "https://marwanbukhori.dev",
      github: "https://github.com/marwanbukhori/portfolio",
    },
  },
  // Add more projects as needed
];

const filterTypes = ["All", "Professional", "Individual"];
const selectedFilter = ref("All");

// Computed stats
const stats = computed(() => {
  const allTechnologies = projects.flatMap((p) => p.technologies);
  const uniqueTechnologies = new Set(allTechnologies);

  return {
    total: projects.length,
    professional: projects.filter((p) => p.type === "Professional").length,
    individual: projects.filter((p) => p.type === "Individual").length,
    technologies: uniqueTechnologies.size,
  };
});
</script>

<template>
  <div class="min-h-screen bg-background">
    <TheNavigation />

    <main class="container px-4 py-8">
      <!-- Header -->
      <div class="space-y-4 mb-12">
        <h1 class="text-3xl font-bold tracking-tight">Projects</h1>
        <p class="text-lg text-muted-foreground">
          A collection of my professional and personal projects, showcasing my
          experience in full-stack development.
        </p>
      </div>

      <!-- Dashboard Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium">Total Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.total }}</div>
            <p class="text-xs text-muted-foreground">
              Completed and ongoing projects
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium"
              >Professional Projects</CardTitle
            >
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.professional }}</div>
            <p class="text-xs text-muted-foreground">
              Enterprise-level projects
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium">Personal Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.individual }}</div>
            <p class="text-xs text-muted-foreground">
              Side projects and experiments
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium">Technologies Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.technologies }}</div>
            <p class="text-xs text-muted-foreground">
              Unique technologies across projects
            </p>
          </CardContent>
        </Card>
      </div>

      <!-- Filter Buttons -->
      <div class="flex gap-2 mb-8">
        <Button
          v-for="type in filterTypes"
          :key="type"
          :variant="selectedFilter === type ? 'default' : 'outline'"
          @click="selectedFilter = type"
        >
          {{ type }}
        </Button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="project in projects.filter(
            (p) => selectedFilter === 'All' || p.type === selectedFilter
          )"
          :key="project.title"
          class="flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300"
        >
          <!-- Project Image -->
          <div class="relative aspect-video overflow-hidden bg-muted">
            <img
              :src="project.image"
              :alt="project.title"
              class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div class="absolute top-2 right-2">
              <Badge>{{ project.type }}</Badge>
            </div>
          </div>

          <CardHeader>
            <CardTitle>{{ project.title }}</CardTitle>
            <CardDescription>{{ project.description }}</CardDescription>
          </CardHeader>

          <CardContent class="flex-1">
            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-4">
              <Badge
                v-for="tech in project.technologies"
                :key="tech"
                variant="secondary"
              >
                {{ tech }}
              </Badge>
            </div>

            <!-- Highlights -->
            <div class="space-y-2">
              <h4 class="font-medium">Key Highlights:</h4>
              <ul
                class="list-disc list-inside text-sm text-muted-foreground space-y-1"
              >
                <li v-for="highlight in project.highlights" :key="highlight">
                  {{ highlight }}
                </li>
              </ul>
            </div>
          </CardContent>

          <CardFooter class="flex gap-2">
            <Button v-if="project.links.live" variant="default" size="sm">
              <a :href="project.links.live" target="_blank" class="w-full">
                View Live
              </a>
            </Button>
            <Button v-if="project.links.github" variant="outline" size="sm">
              <a :href="project.links.github" target="_blank" class="w-full">
                View Code
              </a>
            </Button>
            <Button
              v-if="!project.links.live && !project.links.github"
              variant="outline"
              size="sm"
              disabled
            >
              Private Project
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  </div>
</template>

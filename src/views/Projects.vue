<script setup lang="ts">
import { ref } from "vue";
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
import { useProjects, type Project } from "@/composables/useProjects";

const { projects, filterTypes, stats, DEFAULT_IMAGE, handleImageError } = useProjects();
const selectedFilter = ref("All");
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
              Projects related to professional work
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
             Projects related to personal projects and experiments
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium">Freelance Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.freelance }}</div>
            <p class="text-xs text-muted-foreground">
              Projects related to clients and freelance work
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
            (p: Project) => selectedFilter === 'All' || p.type === selectedFilter
          )"
          :key="project.title"
          class="flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300"
        >
          <!-- Project Image -->
          <div class="relative aspect-video overflow-hidden bg-muted">
            <img
              :src="project.image || DEFAULT_IMAGE"
              :alt="project.title"
              @error="handleImageError"
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

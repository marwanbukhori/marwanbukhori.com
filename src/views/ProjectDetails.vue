<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProjects, type Project } from "@/composables/useProjects";
import TheNavigation from "@/components/TheNavigation.vue";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const route = useRoute();
const { getProjectById } = useProjects();
const project = ref<Project | null>(null);

onMounted(async () => {
  const projectId = route.params.id as string;
  project.value = await getProjectById(projectId);
});
</script>

<template>
  <div class="min-h-screen bg-background">
    <TheNavigation />

    <main v-if="project" class="container px-4 py-8">
      <!-- Project Header -->
      <div class="space-y-6 mb-12">
        <div class="flex items-center gap-4">
          <Button variant="outline" @click="$router.back()">
            Back to Projects
          </Button>
          <Badge>{{ project.type }}</Badge>
        </div>

        <h1 class="text-4xl font-bold tracking-tight">{{ project.title }}</h1>
        <p class="text-xl text-muted-foreground">{{ project.description }}</p>
      </div>

      <!-- Project Image -->
      <Card class="mb-12 overflow-hidden">
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-[400px] object-cover"
        />
      </Card>

      <!-- Project Details -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="md:col-span-2 space-y-8">
          <!-- Overview -->
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <div v-if="project.overview" v-html="project.overview"></div>
              <div v-else>{{ project.description }}</div>
            </CardContent>
          </Card>

          <!-- Key Features -->
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul class="list-disc list-inside space-y-2">
                <li v-for="highlight in project.highlights" :key="highlight">
                  {{ highlight }}
                </li>
              </ul>
            </CardContent>
          </Card>

          <!-- Technical Details -->
          <Card v-if="project.technicalDetails">
            <CardHeader>
              <CardTitle>Technical Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div v-html="project.technicalDetails"></div>
            </CardContent>
          </Card>

          <!-- Challenges and Solutions -->
          <Card v-if="project.challenges">
            <CardHeader>
              <CardTitle>Challenges & Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <div v-html="project.challenges"></div>
            </CardContent>
          </Card>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Project Links -->
          <Card>
            <CardHeader>
              <CardTitle>Project Links</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <Button
                v-if="project.links?.live"
                class="w-full"
                variant="default"
              >
                <a :href="project.links.live" target="_blank" class="w-full">
                  View Live Project
                </a>
              </Button>
              <Button
                v-if="project.links?.github"
                class="w-full"
                variant="outline"
              >
                <a :href="project.links.github" target="_blank" class="w-full">
                  View Source Code
                </a>
              </Button>
            </CardContent>
          </Card>

          <!-- Technologies -->
          <Card>
            <CardHeader>
              <CardTitle>Technologies Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="flex flex-wrap gap-2">
                <Badge
                  v-for="tech in project.technologies"
                  :key="tech"
                  variant="secondary"
                >
                  {{ tech }}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <!-- Project Info -->
          <Card>
            <CardHeader>
              <CardTitle>Project Information</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <div>
                <div class="font-medium">Type</div>
                <div class="text-muted-foreground">{{ project.type }}</div>
              </div>
              <div v-if="project.completedAt">
                <div class="font-medium">Completed</div>
                <div class="text-muted-foreground">
                  {{ project.completedAt }}
                </div>
              </div>
              <div v-if="project.duration">
                <div class="font-medium">Duration</div>
                <div class="text-muted-foreground">{{ project.duration }}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>

    <!-- Loading State -->
    <div v-else class="container px-4 py-8">
      <div class="flex items-center justify-center h-[60vh]">
        <div class="text-lg text-muted-foreground">
          Loading project details...
        </div>
      </div>
    </div>
  </div>
</template>

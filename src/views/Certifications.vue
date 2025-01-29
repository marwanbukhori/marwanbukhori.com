<template>
  <div class="min-h-screen bg-background">
    <TheNavigation />

    <main class="container px-4 py-8">
      <!-- Header -->
      <div class="space-y-4 mb-12">
        <h1 class="text-3xl font-bold tracking-tight">Certifications</h1>
        <p class="text-lg text-muted-foreground">
          Professional certifications and technical achievements
        </p>
      </div>

      <!-- Dashboard Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium">Latest Achievement</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.latest }}</div>
            <p class="text-xs text-muted-foreground">Most recent certification</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium">Total Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.total }}</div>
            <p class="text-xs text-muted-foreground">Total earned certifications</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium">Technical Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.technical }}</div>
            <p class="text-xs text-muted-foreground">Technical and IT-related certifications</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium">Non-Technical Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.nonTechnical }}</div>
            <p class="text-xs text-muted-foreground">Professional development and soft skills</p>
          </CardContent>
        </Card>
      </div>

      <!-- Certifications Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="cert in certifications"
          :key="cert.id"
          class="flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300"
        >
          <!-- Certificate Image -->
          <div class="relative aspect-video overflow-hidden bg-muted">
            <img
              :src="cert.image || DEFAULT_IMAGE"
              :alt="cert.title"
              @error="handleImageError"
              class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div class="absolute top-2 right-2">
              <Badge>{{ cert.type }}</Badge>
            </div>
          </div>

          <CardHeader>
            <CardTitle>{{ cert.title }}</CardTitle>
            <CardDescription>{{ cert.platform }}</CardDescription>
          </CardHeader>

          <CardContent class="flex-1">
            <!-- Skills -->
            <div class="flex flex-wrap gap-2 mb-4">
              <Badge
                v-for="skill in cert.skills"
                :key="skill"
                variant="secondary"
              >
                {{ skill }}
              </Badge>
            </div>

            <!-- Details -->
            <div class="space-y-2">
              <div class="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Issued: {{ cert.issueDate }}</span>
                <span>•</span>
                <span>Expires: {{ cert.expiryDate }}</span>
              </div>
              <div class="text-sm text-muted-foreground">
                <span>Credential ID: {{ cert.credentialId }}</span>
              </div>
            </div>
          </CardContent>

          <CardFooter class="flex gap-2">
            <Button variant="outline" size="sm" class="w-full">
              <a
                :href="cert.verificationUrl"
                target="_blank"
                class="w-full"
              >
                Verify Certificate
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
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
import { useCertifications, type Certification } from "@/composables/useCertifications";

const { certifications, stats, DEFAULT_IMAGE, handleImageError } = useCertifications();

onMounted(() => {
  console.log('Component mounted');
  console.log('Initial certifications:', certifications.value);
});
</script>

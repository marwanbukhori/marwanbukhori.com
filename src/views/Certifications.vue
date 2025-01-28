<template>
  <div class="min-h-screen bg-background">
    <TheNavigation />

    <main class="container px-4 py-8">
      <!-- Header -->
      <div class="space-y-4 mb-12">
        <h1 class="text-3xl font-bold tracking-tight">Certifications</h1>
        <p class="text-lg text-muted-foreground">
          Professional certifications and technical achievements demonstrating
          expertise in various technologies.
        </p>
      </div>

      <!-- Dashboard Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium"
              >Total Certifications</CardTitle
            >
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.total }}</div>
            <p class="text-xs text-muted-foreground">Earned certifications</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium">Skills Certified</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.skills }}</div>
            <p class="text-xs text-muted-foreground">Validated skills</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium">Platforms</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.platforms }}</div>
            <p class="text-xs text-muted-foreground">Certification providers</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium"
              >Latest Achievement</CardTitle
            >
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.latest }}</div>
            <p class="text-xs text-muted-foreground">
              Most recent certification
            </p>
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
              :src="cert.image"
              :alt="cert.title"
              class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div class="absolute top-2 right-2">
              <Badge>{{ cert.platform }}</Badge>
            </div>
          </div>

          <CardHeader>
            <CardTitle>{{ cert.title }}</CardTitle>
            <CardDescription>{{ cert.description }}</CardDescription>
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
              <div
                class="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span>Issued: {{ cert.date }}</span>
                <span>•</span>
                <span>{{ cert.platform }}</span>
              </div>
            </div>
          </CardContent>

          <CardFooter class="flex gap-2">
            <Button v-if="cert.links.verify" variant="default" size="sm">
              <a :href="cert.links.verify" target="_blank" class="w-full">
                Verify
              </a>
            </Button>
            <Button v-if="cert.links.certificate" variant="outline" size="sm">
              <a :href="cert.links.certificate" target="_blank" class="w-full">
                View Certificate
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  </div>
</template>

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

const certifications = [
  {
    id: 1,
    title: "AWS Solutions Architect Associate",
    platform: "AWS",
    image: "/certifications/aws-saa.png",
    date: "Dec 2023",
    description: "Certified in designing distributed systems on AWS.",
    skills: ["AWS", "Cloud Architecture", "DevOps"],
    links: {
      verify: "#",
      certificate: "#",
    },
  },
  {
    id: 2,
    title: "Full Stack Development",
    platform: "Udacity",
    image: "/certifications/fullstack.png",
    date: "Nov 2023",
    description: "Advanced web development using modern technologies.",
    skills: ["React", "Node.js", "PostgreSQL"],
    links: {
      verify: "#",
      certificate: "#",
    },
  },
  // Add more certifications as needed
];

// Computed stats
const stats = computed(() => {
  const allSkills = certifications.flatMap((c) => c.skills);
  const uniqueSkills = new Set(allSkills);
  const uniquePlatforms = new Set(certifications.map((c) => c.platform));
  const latestCert = [...certifications].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];

  return {
    total: certifications.length,
    skills: uniqueSkills.size,
    platforms: uniquePlatforms.size,
    latest: latestCert.title,
  };
});
</script>

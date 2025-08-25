<script setup lang="ts">
import { ref } from "vue";
import { useProjects } from "@/composables/useProjects";
import { useBlogs } from "@/composables/useBlogs";
import TheNavigation from "@/components/TheNavigation.vue";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Github, Linkedin, ArrowRight } from "lucide-vue-next";

const { getFeaturedBlogs } = useBlogs();
const { getFeaturedProjects } = useProjects();

const featuredBlogs = getFeaturedBlogs();
const featuredProjects = getFeaturedProjects();

const images = [
  {
    src: "/images/gallery/coding.webp",
    alt: "Coding session",
    caption: "Deep in code",
    placeholder: "/images/default.png",
  },
  {
    src: "/images/gallery/workspace.webp",
    alt: "My workspace",
    caption: "Where the magic happens",
    placeholder: "/images/default.png",
  },
  {
    src: "/images/gallery/team.webp",
    alt: "Team collaboration",
    caption: "Working with the team",
    placeholder: "/images/default.png",
  },
  {
    src: "/images/gallery/conference.webp",
    alt: "Tech conference",
    caption: "Learning and sharing",
    placeholder: "/images/default.png",
  },
  // Second row
  {
    src: "/images/gallery/meetup.webp",
    alt: "Tech Meetup",
    caption: "Community events",
    placeholder: "/images/default.png",
  },
  {
    src: "/images/gallery/planning.webp",
    alt: "Project Planning",
    caption: "Brainstorming sessions",
    placeholder: "/images/default.png",
  },
  {
    src: "/images/gallery/deployment.webp",
    alt: "Deployment Day",
    caption: "Shipping to production",
    placeholder: "/images/default.png",
  },
  {
    src: "/images/gallery/celebration.webp",
    alt: "Team Success",
    caption: "Celebrating milestones",
    placeholder: "/images/default.png",
  },
];

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const handleImageError = (event: Event, placeholder: string) => {
  const img = event.target as HTMLImageElement;
  img.src = placeholder;
};
</script>

<template>
  <div class="min-h-screen bg-background">
    <TheNavigation />

    <!-- Hero Section -->
    <section class="container px-4 py-16 md:py-24">
      <div class="flex flex-col items-center text-center space-y-8">
        <div class="relative w-32 h-32 md:w-40 md:h-40">
          <div
            class="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-full animate-gradient p-1"
          >
            <img
              src="/images/profile/marwanbukhori.jpeg"
              alt="Marwan Bukhori"
              class="w-full h-full object-cover rounded-full bg-background"
              @error="handleImageError($event, '/images/default.png')"
            />
          </div>
        </div>
        <div class="space-y-4 max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I'm Marwan Bukhori 👋
          </h1>
          <p class="text-xl text-muted-foreground">
            A software engineer passionate about building impactful solutions.
            Currently focused on backend development and cloud architecture.
          </p>
          <div class="flex justify-center gap-4">
            <Button size="lg" asChild>
              <router-link to="/about">More About Me</router-link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <router-link to="/contact">Get in Touch</router-link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Grid -->
    <section class="container px-4 py-16 space-y-8">
      <div class="text-center space-y-4">
        <h2 class="text-3xl font-bold tracking-tight">Life in Code</h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          A glimpse into my journey as a software engineer, from coding sessions
          to team collaborations.
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <HoverCard v-for="image in images" :key="image.alt">
          <HoverCardTrigger asChild>
            <div
              class="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                @error="handleImageError($event, image.placeholder)"
                class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <div class="space-y-2">
              <h4 class="text-sm font-semibold">{{ image.alt }}</h4>
              <p class="text-sm text-muted-foreground">{{ image.caption }}</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="container px-4 py-16 space-y-8">
      <div class="flex justify-between items-center">
        <div class="space-y-2">
          <h2 class="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p class="text-lg text-muted-foreground">
            Some of my recent work and contributions.
          </p>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <router-link to="/projects" class="flex items-center gap-2">
            View All
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </Button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="project in featuredProjects"
          :key="project.id"
          class="flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300"
        >
          <div class="relative aspect-video overflow-hidden bg-muted">
            <img
              :src="project.image"
              :alt="project.title"
              @error="handleImageError($event, '/images/default.png')"
              class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute top-2 right-2">
              <Badge>{{ project.type }}</Badge>
            </div>
          </div>
          <CardHeader>
            <CardTitle>{{ project.title }}</CardTitle>
            <CardDescription>{{ project.description }}</CardDescription>
          </CardHeader>
          <CardFooter class="mt-auto">
            <Button asChild>
              <router-link :to="`/projects/${project.id}`">
                View Details
              </router-link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>

    <!-- Latest Blog Posts -->
    <section class="container px-4 py-16 space-y-8">
      <div class="flex justify-between items-center">
        <div class="space-y-2">
          <h2 class="text-3xl font-bold tracking-tight">Latest Posts</h2>
          <p class="text-lg text-muted-foreground">
            Thoughts, learnings, and experiences.
          </p>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <router-link to="/blog" class="flex items-center gap-2">
            View All
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </Button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="blog in featuredBlogs"
          :key="blog.id"
          class="flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300"
        >
          <div class="relative aspect-video overflow-hidden bg-muted">
            <img
              :src="blog.coverImage"
              :alt="blog.title"
              @error="handleImageError($event, '/images/default.png')"
              class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute top-2 right-2">
              <Badge>{{ blog.category }}</Badge>
            </div>
          </div>
          <CardHeader>
            <CardTitle class="line-clamp-2">{{ blog.title }}</CardTitle>
            <CardDescription class="line-clamp-2">
              {{ blog.description }}
            </CardDescription>
          </CardHeader>
          <CardContent class="flex-1">
            <div class="flex flex-wrap gap-2">
              <Badge v-for="tag in blog.tags" :key="tag" variant="secondary">
                {{ tag }}
              </Badge>
            </div>
          </CardContent>
          <CardFooter class="flex items-center justify-between text-sm">
            <div class="flex items-center gap-2">
              <img
                :src="blog.author.avatar"
                :alt="blog.author.name"
                @error="handleImageError($event, '/images/default.png')"
                class="w-6 h-6 rounded-full"
                loading="lazy"
              />
              <span>{{ formatDate(blog.publishedAt) }}</span>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <router-link :to="`/blog/${blog.slug}`">Read More</router-link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>

    <!-- Connect Section -->
    <section class="container px-4 py-16">
      <Card>
        <CardContent
          class="p-8 flex flex-col items-center text-center space-y-6"
        >
          <h2 class="text-3xl font-bold tracking-tight">Let's Connect</h2>
          <p class="text-lg text-muted-foreground max-w-2xl">
            Whether you want to discuss a project, share ideas, or just say hi,
            I'm always open to new connections and opportunities.
          </p>
          <div class="flex gap-4">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/marwanbukhori"
                target="_blank"
                class="flex items-center gap-2"
              >
                <Github class="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://linkedin.com/in/marwanbukhori"
                target="_blank"
                class="flex items-center gap-2"
              >
                <Linkedin class="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" asChild>
              <router-link to="/contact" class="flex items-center gap-2">
                Contact Me
              </router-link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  </div>
</template>

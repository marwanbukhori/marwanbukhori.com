<script setup lang="ts">
import { ref, computed } from "vue";
import { useBlogs, type Blog } from "@/composables/useBlogs";
import TheNavigation from "@/components/TheNavigation.vue";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const {
  blogs,
  categories,
  stats,
  DEFAULT_COVER,
  handleImageError,
  searchBlogs,
  getAllTags,
} = useBlogs();

const selectedCategory = ref("All");
const selectedTags = ref<string[]>([]);
const searchQuery = ref("");
const allTags = getAllTags();

const filteredBlogs = computed(() => {
  let filtered = searchQuery.value
    ? searchBlogs(searchQuery.value)
    : [...blogs.value];

  if (selectedCategory.value !== "All") {
    filtered = filtered.filter((b) => b.category === selectedCategory.value);
  }

  if (selectedTags.value.length > 0) {
    filtered = filtered.filter((b) =>
      selectedTags.value.some((tag) => b.tags.includes(tag))
    );
  }

  return filtered;
});

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<template>
  <div class="min-h-screen bg-background">
    <TheNavigation />

    <main class="container px-4 py-8">
      <!-- Header -->
      <div class="space-y-4 mb-12">
        <h1 class="text-3xl font-bold tracking-tight">Blog</h1>
        <p class="text-lg text-muted-foreground">
          Sharing my thoughts, experiences, and technical discoveries in
          software development.
        </p>
      </div>

      <!-- Blog Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium">Total Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.total }}</div>
            <p class="text-xs text-muted-foreground">Published blog posts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium">Featured Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.featured }}</div>
            <p class="text-xs text-muted-foreground">
              Highlighted and featured content
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium">Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.categories }}</div>
            <p class="text-xs text-muted-foreground">
              Different topics covered
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-medium">Tags</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{{ stats.tags }}</div>
            <p class="text-xs text-muted-foreground">
              Unique tags across all posts
            </p>
          </CardContent>
        </Card>
      </div>

      <!-- Search and Filters -->
      <div class="space-y-6 mb-8">
        <!-- Search -->
        <div class="max-w-md">
          <Input
            v-model="searchQuery"
            type="search"
            placeholder="Search blogs..."
            class="w-full"
          />
        </div>

        <!-- Category Filter -->
        <div class="flex gap-2 overflow-x-auto pb-2">
          <Button
            :variant="selectedCategory === 'All' ? 'default' : 'outline'"
            @click="selectedCategory = 'All'"
          >
            All
          </Button>
          <Button
            v-for="category in categories"
            :key="category"
            :variant="selectedCategory === category ? 'default' : 'outline'"
            @click="selectedCategory = category"
          >
            {{ category }}
          </Button>
        </div>

        <!-- Tag Filter -->
        <div class="flex flex-wrap gap-2">
          <Badge
            v-for="tag in allTags"
            :key="tag"
            :variant="selectedTags.includes(tag) ? 'default' : 'secondary'"
            class="cursor-pointer"
            @click="
              selectedTags.includes(tag)
                ? (selectedTags = selectedTags.filter((t) => t !== tag))
                : selectedTags.push(tag)
            "
          >
            {{ tag }}
          </Badge>
        </div>

        <!-- Active Filters -->
        <div
          v-if="selectedTags.length > 0 || searchQuery"
          class="flex gap-2 items-center"
        >
          <span class="text-sm text-muted-foreground">Active filters:</span>
          <div class="flex flex-wrap gap-2">
            <Badge
              v-if="searchQuery"
              variant="outline"
              class="cursor-pointer"
              @click="searchQuery = ''"
            >
              Search: {{ searchQuery }}
              <span class="ml-2">&times;</span>
            </Badge>
            <Badge
              v-for="tag in selectedTags"
              :key="tag"
              variant="outline"
              class="cursor-pointer"
              @click="selectedTags = selectedTags.filter((t) => t !== tag)"
            >
              {{ tag }}
              <span class="ml-2">&times;</span>
            </Badge>
          </div>
        </div>
      </div>

      <!-- Blog Grid -->
      <div
        v-if="filteredBlogs.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <Card
          v-for="blog in filteredBlogs"
          :key="blog.id"
          class="flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer"
          @click="$router.push(`/blog/${blog.slug}`)"
        >
          <!-- Blog Image -->
          <div class="relative aspect-video overflow-hidden bg-muted">
            <img
              :src="blog.coverImage"
              :alt="blog.title"
              @error="handleImageError"
              class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
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
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <Badge v-for="tag in blog.tags" :key="tag" variant="secondary">
                {{ tag }}
              </Badge>
            </div>
          </CardContent>

          <CardFooter
            class="flex items-center justify-between text-sm text-muted-foreground"
          >
            <div class="flex items-center gap-2">
              <img
                :src="blog.author.avatar"
                :alt="blog.author.name"
                class="w-6 h-6 rounded-full"
              />
              <span>{{ blog.author.name }}</span>
            </div>
            <div class="flex items-center gap-4">
              <span>{{ formatDate(blog.publishedAt) }}</span>
              <span>{{ blog.readingTime }}</span>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div v-else class="text-center py-12">
        <div class="text-2xl font-semibold mb-2">No blogs found</div>
        <p class="text-muted-foreground">
          Try adjusting your search or filters to find what you're looking for.
        </p>
        <Button
          variant="outline"
          class="mt-4"
          @click="
            () => {
              searchQuery = '';
              selectedCategory = 'All';
              selectedTags = [];
            }
          "
        >
          Clear all filters
        </Button>
      </div>
    </main>
  </div>
</template>

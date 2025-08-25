<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useBlogs, type Blog } from "@/composables/useBlogs";
import { useMarkdown } from "@/composables/useMarkdown";
import TheNavigation from "@/components/TheNavigation.vue";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const route = useRoute();
const { getBlogBySlug, DEFAULT_COVER, handleImageError } = useBlogs();
const { renderMarkdown } = useMarkdown();
const blog = ref<Blog | null>(null);
const content = ref<string>("");
const renderedContent = ref<string>("");

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

onMounted(async () => {
  const slug = route.params.slug as string;
  blog.value = getBlogBySlug(slug);

  if (blog.value) {
    renderedContent.value = renderMarkdown(blog.value.content);
  }
});
</script>

<template>
  <div class="min-h-screen bg-background">
    <TheNavigation />

    <main v-if="blog" class="container px-4 py-8">
      <!-- Blog Header -->
      <div class="space-y-6 mb-12">
        <div class="flex items-center gap-4">
          <Button variant="outline" @click="$router.back()">
            Back to Blog
          </Button>
          <Badge>{{ blog.category }}</Badge>
        </div>

        <h1 class="text-4xl font-bold tracking-tight">{{ blog.title }}</h1>
        <p class="text-xl text-muted-foreground">{{ blog.description }}</p>

        <!-- Author and Meta Info -->
        <div class="flex items-center justify-between border-y py-4">
          <div class="flex items-center gap-4">
            <img
              :src="blog.author.avatar"
              :alt="blog.author.name"
              class="w-12 h-12 rounded-full"
            />
            <div>
              <div class="font-medium">{{ blog.author.name }}</div>
              <div class="text-sm text-muted-foreground">
                {{ formatDate(blog.publishedAt) }} · {{ blog.readingTime }}
              </div>
            </div>
          </div>
          <div class="flex gap-2">
            <Badge v-for="tag in blog.tags" :key="tag" variant="secondary">
              {{ tag }}
            </Badge>
          </div>
        </div>
      </div>

      <!-- Cover Image -->
      <Card class="mb-12 overflow-hidden">
        <img
          :src="blog.coverImage"
          :alt="blog.title"
          @error="handleImageError"
          class="w-full h-[400px] object-cover"
        />
      </Card>

      <!-- Blog Content -->
      <div
        class="prose prose-lg dark:prose-invert max-w-none"
        v-html="renderedContent"
      />
    </main>

    <!-- Loading State -->
    <div v-else class="container px-4 py-8">
      <div class="flex items-center justify-center h-[60vh]">
        <div class="text-lg text-muted-foreground">Loading blog post...</div>
      </div>
    </div>
  </div>
</template>

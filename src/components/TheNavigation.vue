<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-vue-next";
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div class="container flex h-14 items-center justify-between">
      <!-- Logo -->
      <div class="flex-none">
        <a class="flex items-center space-x-2" href="/">
          <span class="font-bold text-xl">MB</span>
        </a>
      </div>

      <!-- Navigation - All items aligned right -->
      <nav class="hidden md:flex items-center space-x-6">
        <router-link
          to="/"
          class="text-sm font-medium transition-colors hover:text-foreground/80"
          :class="{
            'text-foreground': $route.path === '/',
            'text-foreground/60': $route.path !== '/'
          }"
        >
          Home
        </router-link>
        <router-link
          to="/projects"
          class="text-sm font-medium transition-colors hover:text-foreground/80"
          :class="{
            'text-foreground': $route.path === '/projects',
            'text-foreground/60': $route.path !== '/projects'
          }"
        >
          Projects
        </router-link>
        <router-link
          to="/certifications"
          class="text-sm font-medium transition-colors hover:text-foreground/80"
          :class="{
            'text-foreground': $route.path === '/certifications',
            'text-foreground/60': $route.path !== '/certifications'
          }"
        >
          Certifications
        </router-link>
        <router-link
          to="/contact"
          class="text-sm font-medium transition-colors hover:text-foreground/80"
          :class="{
            'text-foreground': $route.path === '/contact',
            'text-foreground/60': $route.path !== '/contact'
          }"
        >
          Contact
        </router-link>
      </nav>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu class="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" class="w-[250px]">
            <nav class="flex flex-col space-y-4 mt-4">
              <router-link
                to="/"
                class="text-lg font-medium transition-colors hover:text-foreground/80"
                :class="{
                  'text-foreground': $route.path === '/',
                  'text-foreground/60': $route.path !== '/'
                }"
              >
                Home
              </router-link>
              <router-link
                to="/projects"
                class="text-lg font-medium transition-colors hover:text-foreground/80"
                :class="{
                  'text-foreground': $route.path === '/projects',
                  'text-foreground/60': $route.path !== '/projects'
                }"
              >
                Projects
              </router-link>
              <router-link
                to="/certifications"
                class="text-lg font-medium transition-colors hover:text-foreground/80"
                :class="{
                  'text-foreground': $route.path === '/certifications',
                  'text-foreground/60': $route.path !== '/certifications'
                }"
              >
                Certifications
              </router-link>
              <router-link
                to="/contact"
                class="text-lg font-medium transition-colors hover:text-foreground/80"
                :class="{
                  'text-foreground': $route.path === '/contact',
                  'text-foreground/60': $route.path !== '/contact'
                }"
              >
                Contact
              </router-link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>

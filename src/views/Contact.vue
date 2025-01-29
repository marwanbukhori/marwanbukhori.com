<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input/";
import { Label } from "@/components/ui/label/";
import { Textarea } from "@/components/ui/textarea/";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/";
import TheNavigation from "@/components/TheNavigation.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";
import { Mail, MapPin, Briefcase, Clock, Github, Linkedin, Twitter } from 'lucide-vue-next';
import type { FunctionalComponent } from 'vue';
import type { LucideIcon } from 'lucide-vue-next';

const { contact } = usePortfolioData();

const name = ref("");
const email = ref("");
const projectType = ref("");
const message = ref("");
const budget = ref("");

type SocialIconName = 'LinkedIn' | 'GitHub' | 'Twitter';

const icons: Record<SocialIconName, FunctionalComponent> = {
  'LinkedIn': Linkedin,
  'GitHub': Github,
  'Twitter': Twitter
};

const getSocialIcon = (name: string): FunctionalComponent | undefined => {
  return icons[name as SocialIconName];
};

const projectTypes = [
  "Web Application",
  "Mobile App",
  "Backend Development",
  "DevOps & Cloud",
  "Consulting",
  "Other",
];

const budgetRanges = [
  "< $5,000",
  "$5,000 - $10,000",
  "$10,000 - $20,000",
  "$20,000+",
  "To be discussed",
];

const handleSubmit = () => {
  // Handle form submission
  console.log({
    name: name.value,
    email: email.value,
    projectType: projectType.value,
    budget: budget.value,
    message: message.value,
  });
};
</script>

<template>
  <div class="min-h-screen bg-background">
    <TheNavigation />

    <main class="container px-4 py-8">
      <!-- Header -->
      <div class="space-y-4 mb-12 text-center">
        <h1 class="text-3xl font-bold tracking-tight">{{ contact.title }}</h1>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          {{ contact.description }}
        </p>
      </div>

      <div class="flex justify-center">
        <div class="w-full max-w-md">
          <!-- Contact Information -->
          <Card>
            <CardHeader class="text-center">
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Ways to reach me directly</CardDescription>
            </CardHeader>
            <CardContent class="space-y-6">
              <!-- Contact Details -->
              <div class="space-y-4">
                <div class="flex items-start space-x-4">
                  <Mail class="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <h3 class="font-medium">Email</h3>
                    <a
                      :href="`mailto:${contact.contactInfo.email}`"
                      class="text-sm text-muted-foreground hover:text-primary"
                    >
                      {{ contact.contactInfo.email }}
                    </a>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <MapPin class="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <h3 class="font-medium">Location</h3>
                    <p class="text-sm text-muted-foreground">
                      {{ contact.contactInfo.location }}
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <Briefcase class="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <h3 class="font-medium">Availability</h3>
                    <p class="text-sm text-muted-foreground">
                      {{ contact.contactInfo.availability }}
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <Clock class="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <h3 class="font-medium">Response Time</h3>
                    <p class="text-sm text-muted-foreground">
                      {{ contact.contactInfo.response }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div class="space-y-4">
                <h3 class="font-medium text-center">Connect with me</h3>
                <div class="flex justify-center space-x-4">
                  <a
                    v-for="link in contact.socialLinks"
                    :key="link.name"
                    :href="link.url"
                    target="_blank"
                    class="p-2 rounded-full hover:bg-muted transition-colors"
                  >
                    <component
                      :is="getSocialIcon(link.name)"
                      class="w-5 h-5"
                    />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TheNavigation from "@/components/TheNavigation.vue";
import { Github, Linkedin, Download, Send } from "lucide-vue-next";
import TechStack from "@/components/TechStack.vue";
import { RouterLink } from "vue-router";

const activeTab = ref("about");
const progress = ref(0);

// Actual data based on resume
const stats = {
  totalProjects: 3,
  totalCertifications: 3,
};

const skills = [
  {
    category: "Backend Development",
    items: [
      "NestJS",
      "Laravel",
      "PHP",
      "TypeScript",
      "Livewire",
      "Django",
      "MySQL",
      "REST",
    ],
    proficiency: 90,
  },
  {
    category: "Frontend Development",
    items: ["Vue", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
    proficiency: 85,
  },
  {
    category: "Mobile Development",
    items: ["Dart", "Flutter", "React Native"],
    proficiency: 75,
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Kubernetes", "Jest", "Cypress", "AWS", "Git"],
    proficiency: 80,
  },
];

const certifications = [
  {
    title: "Certified Kubernetes Administrator",
    issuer: "The Linux Foundation",
  },
  {
    title: "Certified DevOps Foundation",
    issuer: "CCSD Council Europe",
  },
  {
    title: "Program Bimbingan Pembangunan Aplikasi Mobile Dengan Flutter",
    issuer: "Taming Tech Sdn. Bhd.",
  },
];

const timeline = [
  {
    year: "2024 - Present",
    events: [
      {
        title: "Software Engineer",
        company: "Silentmode Sdn. Bhd.",
        period: "Aug 2024 - Present",
        description:
          "Joined RONPOS core team through sister company (Terato Tech) acquisition, focusing on E-Invoice System (EIS) development",
      },
    ],
  },
  {
    year: "2023 - 2024",
    events: [
      {
        title: "Junior Software Engineer",
        company: "Terato Tech Sdn. Bhd.",
        period: "Feb 2023 - Aug 2024",
        description:
          "Joined Terato Tech as a Junior Software Engineer - outsourced to Silentmode's project. Back Office System (BOS) Developer working on RONPOS - POS fuel system for Shell, BHPetrol and PETRONAS",
      },
    ],
  },
  {
    year: "2022 - 2023",
    events: [
      {
        title: "Internship Software Developer",
        company: "Terato Tech Sdn. Bhd.",
        period: "Sept 2022 - Feb 2023",
        description:
          "Intern as Backend and Mobile Developer utilizing Laravel Livewire and React Native. Working on Betaqwa - a platform for Masjid / Kuliah management and Islamic activities",
      },
    ],
  },
];

onMounted(() => {
  setTimeout(() => {
    progress.value = 85;
  }, 100);
});
</script>

<template>
  <div class="min-h-screen bg-background">
    <TheNavigation />

    <!-- Hero Section -->
    <section class="container px-4 py-8">
      <div class="flex flex-col md:flex-row gap-8 items-start">
        <!-- Profile Card -->
        <div class="w-full md:w-[400px] md:sticky md:top-[5rem]">
          <Card class="h-full">
            <CardHeader class="text-center">
              <Avatar class="w-32 h-32 mx-auto mb-4">
                <AvatarImage
                  src="/images/profile/marwanbukhori.jpeg"
                  alt="Marwan Bukhori"
                />
                <AvatarFallback class="text-4xl">MB</AvatarFallback>
              </Avatar>
              <CardTitle class="text-2xl">Marwan Bukhori</CardTitle>
              <CardDescription class="text-base"
                >Software Engineer @ Silentmode</CardDescription
              >
            </CardHeader>
            <CardContent class="space-y-6">
              <Separator />

              <div class="space-y-4">
                <h3 class="font-semibold text-sm">Education</h3>
                <div class="space-y-2 text-sm">
                  <div>
                    <div class="font-medium">
                      Universiti Kebangsaan Malaysia
                    </div>
                    <div class="text-muted-foreground">
                      Bachelor of Software Engineering (Information System)
                    </div>
                    <div class="text-muted-foreground">
                      First Class - CGPA 3.76
                    </div>
                  </div>

                  <div>
                    <div class="font-medium">Kedah Matriculation College</div>
                    <div class="text-muted-foreground">
                      A-Level in Computer Science
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div class="space-y-4">
                <h3 class="font-semibold text-sm">Contact</h3>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center">
                    <span class="text-muted-foreground">Email:</span>
                    <a
                      href="mailto:your@email.com"
                      class="ml-2 hover:text-primary"
                      >marwanbukhori.dev@email.com</a
                    >
                  </div>
                  <div class="flex items-center">
                    <span class="text-muted-foreground">Location:</span>
                    <span class="ml-2">Cyberjaya, Selangor, Malaysia</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div class="space-y-4">
                <h3 class="font-semibold text-sm">Social Links</h3>
                <div class="flex gap-2">
                  <Button variant="outline" size="sm" class="w-full">
                    <a
                      href="https://github.com/marwanbukhori"
                      target="_blank"
                      class="w-full flex items-center justify-center gap-2"
                    >
                      <Github class="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" class="w-full">
                    <a
                      href="https://linkedin.com/in/marwanbukhori"
                      target="_blank"
                      class="w-full flex items-center justify-center gap-2"
                    >
                      <Linkedin class="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
              <Separator />
              <div class="space-y-4">
                <h3 class="font-semibold text-sm">Action</h3>
                <div class="flex gap-2">
                  <Button variant="outline" size="sm" class="w-full">
                    <a
                      href="/documents/MarwanBukhori_Resume_2025.pdf"
                      download="MarwanBukhori_Resume_2025.pdf"
                      class="w-full flex items-center justify-center gap-2"
                    >
                      <Download class="w-4 h-4" />
                      Download Resume
                    </a>
                  </Button>
                  <router-link to="/contact" custom v-slot="{ navigate }">
                    <Button size="sm" class="w-full" @click="navigate">
                      <div
                        class="w-full flex items-center justify-center gap-2"
                      >
                        <Send class="w-4 h-4" />
                        Contact Me
                      </div>
                    </Button>
                  </router-link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <!-- Main Content -->
        <div class="flex-1 space-y-8">
          <div class="space-y-4">
            <h1 class="text-3xl font-bold tracking-tight">Welcome! 👋</h1>
            <p class="text-lg text-muted-foreground text-justify">
              A backend developer with passion and strong desire to expand
              knowledge across multiple different domains within the tech
              industry. See myself as a soft. engineer who's driven to deliver
              impactful, meaningful work.
              <span class="italic font-bold"
                >Aspired to be 1% better every day.</span
              >
              Every line of code is a chance to make life easier, more
              efficient, or just a little better for someone out there.
            </p>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader class="pb-2">
                <CardTitle class="text-sm font-medium"
                  >Years of Experiences</CardTitle
                >
              </CardHeader>
              <CardContent>
                <div class="text-2xl font-bold">2.5+</div>
              </CardContent>
            </Card>
            <router-link
              to="/projects"
              class="cursor-pointer transition-transform hover:scale-105"
            >
              <Card>
                <CardHeader class="pb-2">
                  <CardTitle class="text-sm font-medium"
                    >Total Projects</CardTitle
                  >
                </CardHeader>
                <CardContent>
                  <div class="text-2xl font-bold">
                    {{ stats.totalProjects }}
                  </div>
                  <p class="text-xs text-muted-foreground">Click to view</p>
                </CardContent>
              </Card>
            </router-link>
            <router-link
              to="/certifications"
              class="cursor-pointer transition-transform hover:scale-105"
            >
              <Card>
                <CardHeader class="pb-2">
                  <CardTitle class="text-sm font-medium"
                    >Total Certifications</CardTitle
                  >
                </CardHeader>
                <CardContent>
                  <div class="text-2xl font-bold">
                    {{ stats.totalCertifications }}
                  </div>
                  <p class="text-xs text-muted-foreground">Click to view</p>
                </CardContent>
              </Card>
            </router-link>
          </div>

          <!-- Timeline -->
          <Card>
            <CardHeader>
              <CardTitle>Professional Experience</CardTitle>
              <CardDescription>
                Detailed overview of my work experience and achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div class="space-y-8">
                <div
                  v-for="period in timeline"
                  :key="period.year"
                  class="relative"
                >
                  <div
                    class="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full -translate-x-1/2"
                  ></div>
                  <div class="ml-8 space-y-4">
                    <!-- <div class="font-bold text-xl">{{ period.year }}</div> -->
                    <div
                      v-for="event in period.events"
                      :key="event.title"
                      class="space-y-4"
                    >
                      <div>
                        <div class="font-semibold text-lg">
                          {{ event.title }}
                        </div>
                        <div
                          class="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span>{{ event.company }}</span>
                          <span>•</span>
                          <span class="font-medium">{{ event.period }}</span>
                        </div>
                      </div>
                      <div class="space-y-4">
                        <p class="text-sm text-muted-foreground">
                          {{ event.description }}
                        </p>
                        <div class="ml-4 space-y-2">
                          <template v-if="event.title === 'Software Engineer'">
                            <li class="text-sm">
                              Member of E-Invoice System (EIS) Team which is
                              core functionalities for RONPOS which used on
                              thousands of petrol stations nationwide
                            </li>
                            <li class="text-sm">
                              Experienced in using monorepo pattern with Vue3
                              frontend and NestJS microservices backend in
                              TypeScript
                            </li>
                            <li class="text-sm">
                              Implemented serverless architecture using AWS
                              services including Kinesis, Lambda, SQS, DynamoDB
                              and CloudWatch
                            </li>
                            <li class="text-sm">
                              Managed containerized applications using Docker
                              and LocalStack for local AWS environment
                              simulation
                            </li>
                            <li class="text-sm">
                              Monitored and troubleshooted incidents through
                              CloudWatch logs and Sentry error tracking
                            </li>
                            <li class="text-sm">
                              Implemented comprehensive testing using Jest for
                              unit tests and Cypress for end-to-end testing
                            </li>
                            <li class="text-sm">
                              Configured and maintained Gitlab CICD pipelines
                              using YAML for deployments to staging, UAT and
                              production
                            </li>
                            <li class="text-sm">
                              Primary maintainer of EIS repository, responsible
                              for development, issue resolution and release
                              management
                            </li>
                            <li class="text-sm">
                              Performed Linux operations to monitor and
                              troubleshoot application performance in Ubuntu and
                              Windows environments using MeshCentral
                            </li>
                          </template>
                          <template
                            v-else-if="
                              event.title === 'Junior Software Engineer'
                            "
                          >
                            <li class="text-sm">
                              Member of Site Business Operation (SBO) Team which
                              is the largest component in RONPOS, handling core
                              platform development and maintenance
                            </li>
                            <li class="text-sm">
                              Tech stack: Laravel, Vue, VueX, NestJS
                              Microservices, Docker, AWS, MySQL, PostgreSQL and
                              REST APIs
                            </li>

                            <li class="text-sm">
                              Enhanced system workflows by implementing dynamic
                              input calculations for report generation,
                              improving user experience
                            </li>
                            <li class="text-sm">
                              Proactively learned new technologies and tools to
                              deliver high-quality solutions while maintaining
                              code readability
                            </li>
                            <li class="text-sm">
                              Actively engaged with team members to solicit
                              feedback, address critical issues, and offer
                              assistance as needed
                            </li>
                            <li class="text-sm">
                              Collaborated with senior developers on new feature
                              development while continuously improving code
                              structure through knowledge sharing
                            </li>
                            <li class="text-sm">
                              Developed and optimized SQL queries for tables
                              with 1B+ rows through efficient indexing and query
                              structuring
                            </li>
                          </template>
                          <template
                            v-else-if="
                              event.title === 'Internship Software Developer'
                            "
                          >
                            <li class="text-sm">
                              Tech stack: React Native, TypeScript, Nativewind,
                              RTK Query for mobile; Laravel, Livewire, MySQL,
                              AlpineJS for backend CMS
                            </li>
                            <li class="text-sm">
                              Converted Figma designs into multiple working
                              mobile app screens by learning React Native for
                              in-house app development
                            </li>
                            <li class="text-sm">
                              Set up API endpoints and response interfaces using
                              TypeScript types and RTK Query for API handling
                            </li>
                            <li class="text-sm">
                              Developed MVP mobile app using Nativewind CSS,
                              React Native and Redux for state management
                            </li>
                            <li class="text-sm">
                              Created bulk import feature in Laravel CMS using
                              Google Sheets integration to facilitate data entry
                              via spreadsheet templates
                            </li>
                            <li class="text-sm">
                              Proactively gathered new tasks, resolved backend
                              issues and suggested workflow improvements
                            </li>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="absolute left-0 top-6 bottom-0 w-px bg-border -translate-x-1/2"
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="container px-4 py-8 space-y-8">
      <!-- Tech Stack -->
      <Card>
        <CardHeader>
          <CardTitle>Tech Stack</CardTitle>
          <CardDescription>
            Technologies and tools I work with
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TechStack />
        </CardContent>
      </Card>
    </section>
  </div>
</template>

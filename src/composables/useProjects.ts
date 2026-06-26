import { ref, computed } from "vue";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  type: string;
  highlights: string[];
  links: {
    live: string | null;
    github: string | null;
  };
  featured?: boolean;
  category?: string;
  completedAt?: string;
  duration?: string;
  overview?: string;
  technicalDetails?: string;
  challenges?: string;
}

export function useProjects() {
  const projects = ref<Project[]>([
    {
      id: "commit-life",
      title: "Commit Garden",
      description:
        "Gamified habit tracker where daily habits grow a virtual pixel-art farm.",
      image: "/projects/commit-life.png",
      technologies: [
        "Next.js 16",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Stripe",
        "NextAuth",
        "Tailwind CSS",
        "Docker",
      ],
      type: "Individual",
      highlights: [
        "Built full-stack on Next.js 16 App Router with Server Actions",
        "Transactional habit commit flow using Prisma + PostgreSQL prevents double-counting across timezones",
        "Stripe subscriptions for Pro tier",
        "NextAuth JWT session management",
        "Containerized with Nginx + Docker Compose, deployed on DigitalOcean",
      ],
      links: {
        live: "https://commitgarden.com",
        github: null,
      },
      completedAt: "2025-12",
      duration: "Ongoing",
      featured: true,
      overview:
        "A gamified habit tracker that turns daily discipline into a growing pixel-art ecosystem. Users commit habits and see their farm evolve, with a virtual pet system reinforcing streaks and consistency.",
      technicalDetails:
        "Containerized monolith: Nginx reverse-proxies a Next.js 16 app backed by PostgreSQL, orchestrated with Docker Compose. Prisma ORM with transactional writes for habit commits, NextAuth for auth, Stripe for billing. Self-hosted on a DigitalOcean Droplet for predictable cost.",
      challenges:
        "Ensuring habit commits are idempotent across timezones and preventing double-counting on rapid taps required a transactional write path with unique constraints per (user, habit, day). Shipping a self-hosted containerized stack with zero-downtime deploys was the other big one — solved with Nginx as the front door and rolling container restarts.",
    },
    {
      id: "rerumah",
      title: "ReRumah (SewaKita)",
      description:
        "All-in-one property management platform for Malaysian landlords and tenants.",
      image: "/projects/rerumah.png",
      technologies: [
        "React 19",
        "Vite",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Row-Level Security",
        "PWA",
        "Tailwind CSS",
        "toyyibPay",
      ],
      type: "Individual",
      highlights: [
        "Single-backend architecture on Supabase — Auth, Postgres, RLS, Storage",
        "Row-Level Security policies enforce strict per-landlord data isolation at the DB layer",
        "Installable PWA with offline-friendly UX",
        "toyyibPay payment gateway for rent collection (migrated from Billplz)",
        "WhatsApp deep links for zero-cost tenant messaging",
        "Malay-first bilingual UI built for the local market",
      ],
      links: {
        live: "https://rerumah.my",
        github: null,
      },
      completedAt: "2026-04",
      duration: "Ongoing",
      featured: true,
      overview:
        "A bilingual (Malay-first) PWA helping Malaysian landlords manage tenancies, billing, payments, and agreements in one place. Lightweight enough to feel native on mobile while running entirely on a Supabase backend.",
      technicalDetails:
        "React 19 + Vite frontend talking directly to Supabase — no custom backend. Data isolation enforced via RLS policies rather than application code, so cross-tenant leaks are structurally impossible. Payments through toyyibPay. PWA manifest + service worker give install-to-home-screen without the App Store tax.",
      challenges:
        "Choosing Supabase + RLS over a traditional Node/Express backend meant every access pattern had to be expressible as a SQL policy — demanding but structurally secure. Migrating payment gateway from Billplz to toyyibPay mid-flight while paying users were transacting required careful feature flagging.",
    },
    {
      id: "fire",
      title: "Fire — AI Sales Agent",
      description:
        "Internal tool: AI-powered diploma sales agent generating TikTok content and running a WhatsApp CRM.",
      image: "/images/default.png",
      technologies: [
        "Hono",
        "React",
        "TypeScript",
        "Prisma",
        "SQLite",
        "Claude API",
        "Wassenger API",
      ],
      type: "Professional",
      highlights: [
        "Hono-based API server with typed routes and Prisma ORM",
        "Claude API integration for content generation and conversational responses",
        "Wassenger integration for programmatic WhatsApp messaging at scale",
        "Internal React portal for sales team to review and action leads",
        "Queueing and retry logic for reliable WhatsApp delivery at volume",
      ],
      links: {
        live: null,
        github: null,
      },
      completedAt: "2026-03",
      duration: "Ongoing",
      featured: true,
      overview:
        "Internal tool automating the top of a diploma education sales funnel. Generates TikTok content ideas, drafts scripts, and runs downstream WhatsApp conversations through a lightweight CRM portal — with Claude as the reasoning layer.",
      technicalDetails:
        "Hono picked over Express for edge-ready ergonomics and first-class TypeScript. Prisma + SQLite keeps the data layer dead simple for an internal tool. Claude drives both content generation and reply drafting; Wassenger handles WhatsApp without requiring WhatsApp Business API overhead.",
      challenges:
        "Keeping AI-generated replies on-brand and safe required prompt iteration plus human-in-the-loop review for high-stakes messages. Reliable WhatsApp delivery at volume meant building queueing and retry around Wassenger.",
    },
    {
      id: "belanjawan",
      title: "Belanjawan",
      description:
        "Personal-finance PWA for Malaysian households — track spending, scan receipts, and auto-generate LHDN tax-relief and zakat reports.",
      image: "/images/default.png",
      technologies: [
        "Next.js 16",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Row-Level Security",
        "Tesseract.js",
        "shadcn/ui",
        "Tailwind CSS",
        "PWA",
        "Playwright",
      ],
      type: "Individual",
      highlights: [
        "Single Supabase backend — Postgres, Auth, Storage, Edge Functions, and pg_cron — with no separate API server",
        "Client-side receipt OCR via Tesseract.js to capture transactions straight from a photo",
        "Auto-generates LHDN tax-relief summaries and zakat calculations tailored to Malaysian households",
        "Installable, mobile-first PWA that also works on desktop",
        "Three-tier test suite: vitest unit tests, RLS integration tests against local Supabase, and Playwright mobile e2e",
      ],
      links: {
        live: "https://belanjawan.vercel.app",
        github: "https://github.com/marwanbukhori/belanjawan",
      },
      completedAt: "2026-05",
      duration: "Ongoing",
      featured: false,
      overview:
        "A personal-finance PWA built for Malaysian households. Belanjawan tracks day-to-day spending, captures receipts through on-device OCR, and turns a year of transactions into LHDN tax-relief summaries and zakat calculations — replacing spreadsheets and shoeboxes of receipts.",
      technicalDetails:
        "Next.js 16 (App Router) frontend on a pure Supabase backend — Postgres with Row-Level Security for per-household data isolation, Auth, Storage for receipt images, Edge Functions, and pg_cron for scheduled jobs. Receipt OCR runs client-side with Tesseract.js, with an LLM-vision upgrade planned. The codebase ships with unit (vitest), integration (RLS against a local Supabase stack), and Playwright mobile e2e tests.",
      challenges:
        "Modelling Malaysian-specific tax-relief categories and zakat thresholds accurately meant encoding LHDN rules into the data layer. Enforcing strict per-household isolation through Postgres RLS — rather than application code — made cross-household leaks structurally impossible, but required every access pattern to be expressible as a SQL policy.",
    },
    {
      id: "source-of-truth",
      title: "Source of Truth",
      description:
        "Full-stack knowledge platform that centralizes structured documentation for backend and cloud concepts.",
      image: "/images/default-2.png",
      technologies: [
        "NestJS",
        "Vue 3",
        "TypeScript",
        "PostgreSQL",
        "JWT",
        "Docker Compose",
        "Swagger",
      ],
      type: "Individual",
      highlights: [
        "Monorepo pairing a NestJS API with a Vue 3 frontend",
        "JWT-based authentication with registration, login, and protected routes",
        "PostgreSQL persistence with migrations and seed data",
        "Swagger / OpenAPI documentation for the API",
        "Separate Docker Compose stacks for development and production",
      ],
      links: {
        live: "https://source-of-truth.vercel.app",
        github: "https://github.com/marwanbukhori/source-of-truth",
      },
      completedAt: "2025-01",
      duration: "Ongoing",
      featured: false,
      overview:
        "A knowledge platform designed to be the definitive 'source of truth' for backend and cloud programming concepts — structured, versioned documentation for development teams, built as a NestJS + Vue monorepo with auth, a documented API, and Dockerized dev/prod environments.",
      technicalDetails:
        "NestJS backend and Vue 3 frontend in a single monorepo. Authentication is JWT-based with route guards. Data lives in PostgreSQL with migrations and seeding, and the API is documented with Swagger. Two Docker Compose configurations cleanly separate development and production, with migrations and seeds run through the backend container.",
      challenges:
        "The core design challenge was structuring documentation content for long-term maintainability — versioning, categorization, and search — while keeping the backend production-grade with proper auth, API docs, and reproducible Docker environments from day one.",
    },
    {
      id: "vinland",
      title: "Engage360",
      description:
        "Flutter volunteer-management app connecting organizations with volunteers through QR/PIN check-ins, gamification, and real-time chat.",
      image: "/images/default.png",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase Auth",
        "Cloud Firestore",
        "Firebase Storage",
        "Provider",
      ],
      type: "Individual",
      highlights: [
        "Role-based experience for volunteers and organization admins, with per-organization data isolation",
        "Activity check-in by QR-code scan or a unique 6-digit PIN, with real-time status updates",
        "Gamification — points for check-ins, redeemable for vouchers and rewards",
        "Real-time per-activity group chat plus an in-app notification center",
        "Local reminders an hour before an activity, and an admin dashboard with live metrics",
      ],
      links: {
        live: null,
        github: "https://github.com/marwanbukhori/vinland",
      },
      completedAt: "2026-01",
      duration: "Ongoing",
      featured: false,
      overview:
        "Engage360 is a Flutter + Firebase mobile app connecting organizations with volunteers. Volunteers browse and check in to activities (QR or PIN), earn points redeemable for rewards, and chat in real time; organizations create and manage activities, generate access codes, and track participation from an admin dashboard — all with strict per-organization data isolation.",
      technicalDetails:
        "Flutter (Dart) frontend on a Firebase backend: Authentication for volunteer/organization roles, Cloud Firestore as the real-time database for activities, users, chats, and registrations, and Firebase Storage for posters and avatars. State is managed with Provider and StreamBuilder for live updates, with a feature-first project structure and Firestore security rules that restrict each admin to their own organization's data.",
      challenges:
        "Designing a check-in flow that works both online (QR scan) and manually (6-digit PIN) while keeping statuses consistent in real time across volunteer and admin views. Enforcing multi-tenant isolation through Firestore security rules so each organization sees only its own data.",
    },
    {
      id: "studyatinnovative",
      title: "StudyAtInnovative.my",
      description:
        "Conversion-focused landing page for Innovative University College (IUC) diploma programs with DPI bursary.",
      image: "/projects/studyatinnovative.png",
      technologies: [
        "Vue 3",
        "Vite",
        "Three.js",
        "Vercel Functions",
        "Meta CAPI",
        "JavaScript",
      ],
      type: "Freelance",
      highlights: [
        "Bilingual (Malay / English) with locale persisted in localStorage",
        "Animated Three.js hero canvas with a lightweight fallback for mobile",
        "Server-side Meta Conversions API integration via Vercel Function with deduplicated event_id — complements the browser Pixel for resilient ad tracking",
        "SHA-256 PII hashing server-side before forwarding to Meta Graph API",
        "Full SEO setup: sitemap.xml, robots.txt, web manifest, and OG/favicon pipeline",
        "Dynamic intake month label that auto-updates every month — no manual edits",
      ],
      links: {
        live: "https://studyatinnovative.my",
        github: null,
      },
      completedAt: "2025-10",
      duration: "1 month",
      featured: false,
      overview:
        "A conversion-optimized landing page for Innovative University College's Diploma in Business Administration (ODL) program, paired with the Dana Pendidikan Inovatif (DPI) bursary offer. Built as a single-purpose marketing site to drive paid-ad leads into a WhatsApp sales funnel.",
      technicalDetails:
        "Vue 3 + Vite frontend with a single-file App.vue containing all sections for maximum render speed. Three.js powers the hero with a feature-detected mobile-lite variant. A Vercel Function (api/meta-capi.js) receives client tracking events and forwards them to Meta's Graph API v21.0 server-side, using event_id deduplication with the browser Pixel — so events still count even when ad blockers strip the client-side Pixel. PII (email, phone, external_id) is SHA-256 hashed before leaving the server, following Meta's Advanced Matching spec.",
      challenges:
        "Ad tracking reliability was the core challenge — modern ad blockers and iOS Safari's ITP silently break browser-only Pixel setups, which makes paid-ad optimization unreliable. Solved by pairing the Pixel with server-side CAPI via a Vercel Function, using a shared event_id so Meta deduplicates when both fire. Secondary challenge: keeping the Three.js hero performant on mid-range Android phones without killing the conversion-critical first paint — solved with a feature-detected lite mode that falls back to a CSS gradient + static composition."
    },
    {
      id: "ronpos-einvoice",
      title: "RONPOS E-Invoice System",
      description:
        "Microservice handling e-invoicing for the RONPOS POS system, serving major clients like Shell and BH Petrol.",
      image: "/projects/ronpos.png",
      technologies: ["NestJS", "Vue 3", "AWS", "Docker", "TypeScript"],
      type: "Professional",
      highlights: [
        "Serverless architecture on AWS Kinesis, Lambda, SQS, DynamoDB",
        "Built microservices with NestJS and Vue 3",
        "Real-time invoice processing with high throughput",
        "Comprehensive testing with Jest and Cypress",
      ],
      links: {
        live: null,
        github: null,
      },
      completedAt: "2023-12",
      duration: "8 months",
      featured: false,
      overview:
        "E-invoicing system built for RONPOS POS, serving major clients in the oil and gas industry. Handles high-volume invoice processing with real-time data synchronization.",
      technicalDetails:
        "Microservices architecture with NestJS and Vue 3. Leverages AWS services including Kinesis for real-time data streaming, Lambda for serverless processing, SQS for message queuing, and DynamoDB for scalable storage.",
      challenges:
        "Handling high-volume data processing while maintaining reliability — addressed through careful architecture design, retry mechanisms, and monitoring. Ensuring consistency across systems was solved using event-driven patterns and robust error handling.",
    },
    {
      id: "ronpos-sbo",
      title: "Site Business Operation Module",
      description:
        "Core RONPOS module for managing business operations, handling large-scale data processing and reporting.",
      image: "/projects/sbo.png",
      technologies: ["Laravel", "Vue", "MySQL", "AWS", "Docker"],
      type: "Professional",
      highlights: [
        "Optimized SQL queries for billion-row tables",
        "Database indexing and partitioning strategies",
        "Enhanced report generation workflows",
        "Integrated with multiple POS systems",
      ],
      links: {
        live: null,
        github: null,
      },
      completedAt: "2023-06",
      duration: "12 months",
      featured: false,
      overview:
        "Core business operations module handling critical data processing and reporting for RONPOS. Processes billions of records while maintaining high performance and reliability.",
      technicalDetails:
        "Built with Laravel and Vue.js on MySQL. Advanced database optimization: partitioning, indexing, query optimization. Docker for containerization, AWS for infrastructure.",
      challenges:
        "Biggest challenge was optimizing performance on billion-row tables — solved through careful DB design, indexing strategies, and query optimization. Maintaining consistency during high-volume processing was addressed through transaction management and error handling.",
    },
    {
      id: "portfolio",
      title: "This Portfolio",
      description:
        "Personal portfolio website built with Vue 3 and Tailwind CSS.",
      image: "/projects/portfolio.png",
      technologies: ["Vue 3", "TypeScript", "Tailwind CSS", "shadcn-vue"],
      type: "Individual",
      highlights: [
        "Vue 3 Composition API with TypeScript",
        "Responsive design for all devices",
        "Dark mode support",
        "Performance-optimized with lazy loading",
      ],
      links: {
        live: "https://marwanbukhori.com",
        github: "https://github.com/marwanbukhori/portfolio",
      },
      completedAt: "2024-01",
      duration: "2 months",
      featured: false,
      overview:
        "A modern, responsive portfolio website to showcase my work. Clean, minimalist design with smooth animations.",
      technicalDetails:
        "Vue 3 Composition API + TypeScript. Styled with Tailwind CSS and shadcn-vue. Hosted on Vercel.",
      challenges:
        "Keeping content updates friction-free so the site stays current — solved with a centralized data layer in typed composables.",
    },
  ]);

  const filterTypes = ["All", "Professional", "Individual", "Freelance"];

  const stats = computed(() => {
    const allTechnologies = projects.value.flatMap((p) => p.technologies);
    const uniqueTechnologies = new Set(allTechnologies);

    return {
      total: projects.value.length,
      professional: projects.value.filter((p) => p.type === "Professional")
        .length,
      individual: projects.value.filter((p) => p.type === "Individual").length,
      freelance: projects.value.filter((p) => p.type === "Freelance").length,
      technologies: uniqueTechnologies.size,
    };
  });

  const DEFAULT_IMAGE = "/images/default.png";

  const handleImageError = (event: Event) => {
    const img = event.target as HTMLImageElement;
    img.src = DEFAULT_IMAGE;
  };

  const getProjectById = (id: string): Project | null => {
    return projects.value.find((p) => p.id === id) || null;
  };

  const getFeaturedProjects = (): Project[] => {
    return projects.value.filter((p) => p.featured).slice(0, 3);
  };

  return {
    projects,
    filterTypes,
    stats,
    DEFAULT_IMAGE,
    handleImageError,
    getFeaturedProjects,
    getProjectById,
  };
}

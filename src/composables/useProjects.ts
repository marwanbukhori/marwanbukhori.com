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

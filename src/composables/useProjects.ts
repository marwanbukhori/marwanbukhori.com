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
      id: "1",
      title: "RONPOS E-Invoice System",
      description:
        "Microservice for handling e-invoicing in RONPOS POS system, serving major clients like Shell and BH Petrol.",
      image: "/projects/ronpos.png",
      technologies: ["NestJS", "Vue 3", "AWS", "Docker", "TypeScript"],
      type: "Professional",
      highlights: [
        "Implemented serverless architecture using AWS services",
        "Built microservices with NestJS and Vue 3",
        "Integrated with AWS Kinesis, Lambda, SQS, DynamoDB",
        "Implemented comprehensive testing with Jest and Cypress",
      ],
      links: {
        live: null,
        github: null,
      },
      completedAt: "2023-12",
      duration: "8 months",
      featured: true,
      overview:
        "A comprehensive e-invoicing system built for RONPOS POS system, serving major clients in the oil and gas industry. The system handles high-volume invoice processing with real-time data synchronization.",
      technicalDetails:
        "Built using a microservices architecture with NestJS and Vue 3. Leverages AWS services including Kinesis for real-time data streaming, Lambda for serverless processing, SQS for message queuing, and DynamoDB for scalable data storage.",
      challenges:
        "The main challenge was handling high-volume data processing while maintaining system reliability. This was addressed through careful architecture design, implementing retry mechanisms, and extensive monitoring. Another challenge was ensuring data consistency across multiple systems, which was solved using event-driven architecture and robust error handling.",
    },
    {
      id: "2",
      title: "Site Business Operation Module",
      description:
        "Core module in RONPOS for managing business operations, handling large-scale data processing and reporting.",
      image: "/projects/sbo.png",
      technologies: ["Laravel", "Vue", "MySQL", "AWS", "Docker"],
      type: "Professional",
      highlights: [
        "Optimized SQL queries for billion-row tables",
        "Implemented database indexing strategies",
        "Enhanced report generation workflows",
        "Integrated with multiple POS systems",
      ],
      links: {
        live: null,
        github: null,
      },
      completedAt: "2023-06",
      duration: "12 months",
      featured: true,
      overview:
        "A core business operations module that handles critical data processing and reporting functions for RONPOS. The system processes billions of records while maintaining high performance and reliability.",
      technicalDetails:
        "Built with Laravel and Vue.js, utilizing MySQL for data storage. Implements advanced database optimization techniques including partitioning, indexing, and query optimization. Uses Docker for containerization and AWS for cloud infrastructure.",
      challenges:
        "The biggest challenge was optimizing performance for tables with billions of rows. This was solved through careful database design, implementing efficient indexing strategies, and query optimization. Another challenge was maintaining data consistency during high-volume processing, which was addressed through transaction management and robust error handling.",
    },
    {
      id: "3",
      title: "Individual Portfolio",
      description:
        "Modern, responsive personal portfolio website built with Vue 3 and Tailwind CSS.",
      image: "/projects/portfolio.png",
      technologies: ["Vue 3", "TypeScript", "Tailwind CSS", "shadcn-vue"],
      type: "Individual",
      highlights: [
        "Modern UI with shadcn-vue components",
        "Responsive design for all devices",
        "Dark mode support",
        "Performance optimized",
      ],
      links: {
        live: "https://marwanbukhori.dev",
        github: "https://github.com/marwanbukhori/portfolio",
      },
      completedAt: "2024-01",
      duration: "2 months",
      featured: true,
      overview:
        "A modern, responsive portfolio website built to showcase my work and skills. The site features a clean, minimalist design with smooth animations and a focus on user experience.",
      technicalDetails:
        "Built using Vue 3 with the Composition API and TypeScript for better code organization and type safety. The UI is styled using Tailwind CSS and shadcn-vue components for a consistent and modern look.",
      challenges:
        "The main challenge was creating a responsive design that works well across all devices while maintaining a consistent look and feel. This was solved using Tailwind CSS's responsive utilities and careful component structure planning.",
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

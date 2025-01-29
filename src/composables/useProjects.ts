import { ref, computed } from 'vue';

export interface Project {
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
}

export function useProjects() {
  const projects = ref<Project[]>([
    {
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
    },
    {
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
    },
    {
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
    },
  ]);

  const filterTypes = ["All", "Professional", "Individual", "Freelance"];

  const stats = computed(() => {
    const allTechnologies = projects.value.flatMap(p => p.technologies);
    const uniqueTechnologies = new Set(allTechnologies);

    return {
      total: projects.value.length,
      professional: projects.value.filter(p => p.type === "Professional").length,
      individual: projects.value.filter(p => p.type === "Individual").length,
      freelance: projects.value.filter(p => p.type === "Freelance").length,
      technologies: uniqueTechnologies.size,
    };
  });

  const DEFAULT_IMAGE = '/images/default.png';

  const handleImageError = (event: Event) => {
    const img = event.target as HTMLImageElement;
    img.src = DEFAULT_IMAGE;
  };

  return {
    projects,
    filterTypes,
    stats,
    DEFAULT_IMAGE,
    handleImageError,
  };
}

import { ref, computed } from "vue";

export interface Author {
  name: string;
  avatar: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  author: Author;
  category: string;
  tags: string[];
  readingTime: string;
  featured: boolean;
}

export function useBlogs() {
  const blogs = ref<Blog[]>([
    {
      id: "1",
      title: "Building a Modern Portfolio with Vue 3 and TypeScript",
      slug: "building-modern-portfolio-vue3-typescript",
      description:
        "A deep dive into creating a modern, type-safe portfolio website using Vue 3, TypeScript, and Tailwind CSS.",
      content: "content/building-modern-portfolio-vue3-typescript.md",
      coverImage: "/blog/portfolio-cover.png",
      publishedAt: "2024-03-15",
      author: {
        name: "Marwan Bukhori",
        avatar: "/images/profile/marwanbukhori.jpeg",
      },
      category: "Development",
      tags: ["Vue.js", "TypeScript", "Tailwind CSS", "Web Development"],
      readingTime: "8 min",
      featured: true,
    },
    {
      id: "2",
      title: "Optimizing Database Performance at Scale",
      slug: "optimizing-database-performance-scale",
      description:
        "Lessons learned from optimizing MySQL databases handling billions of rows in a production environment.",
      content: "content/optimizing-database-performance-scale.md",
      coverImage: "/blog/database-optimization.png",
      publishedAt: "2024-03-10",
      author: {
        name: "Marwan Bukhori",
        avatar: "/images/profile/marwanbukhori.jpeg",
      },
      category: "Development",
      tags: ["Database", "MySQL", "Performance", "Optimization"],
      readingTime: "12 min",
      featured: true,
    },
  ]);

  const categories = [
    "Development",
    "DevOps",
    "Architecture",
    "Best Practices",
    "Tutorials",
    "Career",
  ];

  const stats = computed(() => {
    const allTags = blogs.value.flatMap((b) => b.tags);
    const uniqueTags = new Set(allTags);

    return {
      total: blogs.value.length,
      featured: blogs.value.filter((b) => b.featured).length,
      categories: new Set(blogs.value.map((b) => b.category)).size,
      tags: uniqueTags.size,
    };
  });

  const getBlogBySlug = (slug: string): Blog | null => {
    return blogs.value.find((b) => b.slug === slug) || null;
  };

  const getFeaturedBlogs = (): Blog[] => {
    return blogs.value.filter((b) => b.featured);
  };

  const getLatestBlogs = (limit: number = 5): Blog[] => {
    return [...blogs.value]
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
      .slice(0, limit);
  };

  const getBlogsByCategory = (category: string): Blog[] => {
    return blogs.value.filter((b) => b.category === category);
  };

  const getBlogsByTag = (tag: string): Blog[] => {
    return blogs.value.filter((b) => b.tags.includes(tag));
  };

  const searchBlogs = (query: string): Blog[] => {
    const searchTerm = query.toLowerCase();
    return blogs.value.filter((blog) => {
      return (
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.description.toLowerCase().includes(searchTerm) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
        blog.category.toLowerCase().includes(searchTerm)
      );
    });
  };

  const getAllTags = (): string[] => {
    const tags = blogs.value.flatMap((b) => b.tags);
    return Array.from(new Set(tags)).sort();
  };

  const DEFAULT_COVER = "/images/default-2.png";

  const handleImageError = (event: Event) => {
    const img = event.target as HTMLImageElement;
    img.src = DEFAULT_COVER;
  };

  return {
    blogs,
    categories,
    stats,
    getBlogBySlug,
    getFeaturedBlogs,
    getLatestBlogs,
    getBlogsByCategory,
    getBlogsByTag,
    searchBlogs,
    getAllTags,
    DEFAULT_COVER,
    handleImageError,
  };
}

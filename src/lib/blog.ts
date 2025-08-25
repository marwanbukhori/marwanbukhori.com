import matter from "gray-matter";
import { readFileSync, readdirSync, Dirent } from "fs";
import { join } from "path";
import type { PathLike } from "fs";

/**
 * Interface for blog post frontmatter metadata
 */
export interface BlogFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  readingTime: string;
  featured: boolean;
  coverImage: string;
}

/**
 * Interface for a complete blog post including content and slug
 */
export interface BlogPost extends BlogFrontmatter {
  slug: string;
  content: string;
}

const BLOG_DIR = join(process.cwd(), "src/content/blogs");

/**
 * Gets all blog post slugs from the blogs directory
 * @returns Array of blog post slugs
 */
export function getAllBlogSlugs(): string[] {
  return readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((dirent: Dirent) => dirent.isDirectory())
    .map((dirent: Dirent) => dirent.name);
}

/**
 * Gets a specific blog post by its slug
 * @param slug - The blog post slug
 * @returns The blog post or null if not found
 */
export function getBlogBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = join(BLOG_DIR, slug, "index.md");
    const fileContents = readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      ...(data as BlogFrontmatter),
      slug,
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

/**
 * Gets all blog posts sorted by publish date (newest first)
 * @returns Array of all blog posts
 */
export function getAllBlogs(): BlogPost[] {
  const slugs = getAllBlogSlugs();
  return slugs
    .map((slug) => getBlogBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

/**
 * Gets all blog posts in a specific category
 * @param category - The category to filter by
 * @returns Array of blog posts in the category
 */
export function getBlogsByCategory(category: string): BlogPost[] {
  return getAllBlogs().filter((post) => post.category === category);
}

/**
 * Gets all blog posts with a specific tag
 * @param tag - The tag to filter by
 * @returns Array of blog posts with the tag
 */
export function getBlogsByTag(tag: string): BlogPost[] {
  return getAllBlogs().filter((post) => post.tags.includes(tag));
}

/**
 * Searches blog posts by title, description, tags, and category
 * @param query - The search query
 * @returns Array of matching blog posts
 */
export function searchBlogs(query: string): BlogPost[] {
  const searchTerm = query.toLowerCase();
  return getAllBlogs().filter((post) => {
    return (
      post.title.toLowerCase().includes(searchTerm) ||
      post.description.toLowerCase().includes(searchTerm) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
      post.category.toLowerCase().includes(searchTerm)
    );
  });
}

/**
 * Gets a sorted list of all unique categories
 * @returns Array of category names
 */
export function getAllCategories(): string[] {
  return Array.from(new Set(getAllBlogs().map((post) => post.category))).sort();
}

/**
 * Gets a sorted list of all unique tags
 * @returns Array of tag names
 */
export function getAllTags(): string[] {
  const tags = getAllBlogs().flatMap((post) => post.tags);
  return Array.from(new Set(tags)).sort();
}

/**
 * Gets statistics about the blog posts
 * @returns Object containing total posts, featured posts, category count, and tag count
 */
export function getBlogStats() {
  const blogs = getAllBlogs();
  const tags = getAllTags();
  const categories = getAllCategories();

  return {
    total: blogs.length,
    featured: blogs.filter((post) => post.featured).length,
    categories: categories.length,
    tags: tags.length,
  };
}

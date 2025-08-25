# Blog System Documentation

This document describes the blog system implementation for the portfolio website.

## Directory Structure

```
src/
├── content/
│   └── blogs/
│       ├── blog-post-slug/
│       │   ├── index.md        # Blog post content with frontmatter
│       │   ├── cover.png       # Blog post cover image
│       │   └── assets/         # Other blog-specific assets
│       └── another-blog-post/
│           └── ...
├── lib/
│   └── blog.ts                 # Blog utility functions
└── scripts/
    └── create-blog-post.js     # Blog post creation script
```

## Creating a New Blog Post

### Using the CLI Tool

1. Run the creation script:

   ```bash
   npm run new-blog
   ```

2. Follow the prompts to enter:

   - Blog post title
   - Description
   - Category
   - Tags (comma-separated)
   - Reading time
   - Featured status (y/n)

3. The script will:
   - Create a new directory for your blog post
   - Generate an index.md file with frontmatter
   - Set up the basic structure

### Manual Creation

1. Create a new directory under `src/content/blogs/` with a URL-friendly slug
2. Create an `index.md` file with the following frontmatter structure:

```markdown
---
title: Your Blog Title
description: A brief description of your blog post
publishedAt: 2024-03-15
author:
  name: Marwan Bukhori
  avatar: /images/profile/marwanbukhori.jpeg
category: Development
tags:
  - Tag1
  - Tag2
readingTime: 5 min
featured: true
coverImage: /blog/your-slug/cover.png
---

# Your Blog Content Here
```

## Blog Post Structure

### Frontmatter Fields

| Field       | Type     | Description                    |
| ----------- | -------- | ------------------------------ |
| title       | string   | The blog post title            |
| description | string   | Brief description for previews |
| publishedAt | string   | Publication date (YYYY-MM-DD)  |
| author      | object   | Author information             |
| category    | string   | Primary category               |
| tags        | string[] | Array of related tags          |
| readingTime | string   | Estimated reading time         |
| featured    | boolean  | Whether to feature the post    |
| coverImage  | string   | Path to cover image            |

### Content

- Use Markdown for content
- Supports code blocks with syntax highlighting
- Images can be included from the post's directory
- Supports all standard Markdown features

## Utility Functions

### Blog Management (`src/lib/blog.ts`)

```typescript
// Get all blog posts
const blogs = getAllBlogs();

// Get a specific blog post
const post = getBlogBySlug("post-slug");

// Search blogs
const results = searchBlogs("search term");

// Filter by category
const categoryPosts = getBlogsByCategory("Development");

// Filter by tag
const tagPosts = getBlogsByTag("Vue.js");

// Get statistics
const stats = getBlogStats();
```

### Available Functions

| Function                     | Description                                |
| ---------------------------- | ------------------------------------------ |
| getAllBlogs()                | Returns all blog posts sorted by date      |
| getBlogBySlug(slug)          | Gets a specific blog post by slug          |
| getBlogsByCategory(category) | Filters posts by category                  |
| getBlogsByTag(tag)           | Filters posts by tag                       |
| searchBlogs(query)           | Searches posts by title, description, tags |
| getAllCategories()           | Gets list of all categories                |
| getAllTags()                 | Gets list of all unique tags               |
| getBlogStats()               | Gets blog statistics                       |

## Blog Features

1. **Search and Filtering**

   - Full-text search across titles, descriptions, and tags
   - Category-based filtering
   - Tag-based filtering
   - Multiple filter support

2. **Markdown Support**

   - Code syntax highlighting
   - Images and assets
   - Headers and formatting
   - Lists and tables

3. **Metadata**

   - Reading time
   - Publication date
   - Author information
   - Categories and tags

4. **Organization**
   - Each post in its own directory
   - Asset co-location
   - Clear URL structure

## Best Practices

1. **Naming Conventions**

   - Use kebab-case for directory names
   - Keep filenames lowercase
   - Use descriptive slugs

2. **Images and Assets**

   - Optimize images before adding
   - Use relative paths in markdown
   - Keep assets organized in post directory

3. **Content Writing**

   - Use clear headings
   - Include code examples where relevant
   - Add descriptive alt text for images
   - Keep paragraphs focused and concise

4. **Metadata**
   - Choose relevant categories and tags
   - Write clear, concise descriptions
   - Update reading time based on content length
   - Use high-quality cover images

## Development Notes

- The blog system uses `gray-matter` for frontmatter parsing
- Markdown rendering is handled by `markdown-it`
- Code syntax highlighting uses `highlight.js`
- All dates should be in ISO format (YYYY-MM-DD)
- Cover images should be optimized for web use

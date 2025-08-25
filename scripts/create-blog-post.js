#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const BLOG_DIR = path.join(process.cwd(), "src/content/blogs");

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function createBlogPost() {
  try {
    // Get blog post details
    const title = await prompt("Enter blog post title: ");
    const description = await prompt("Enter blog post description: ");
    const category = await prompt("Enter category: ");
    const tags = (await prompt("Enter tags (comma-separated): "))
      .split(",")
      .map((tag) => tag.trim());
    const readingTime = await prompt('Enter reading time (e.g., "5 min"): ');
    const featured =
      (await prompt("Is this a featured post? (y/n): ")).toLowerCase() === "y";

    // Create slug and directory
    const slug = slugify(title);
    const postDir = path.join(BLOG_DIR, slug);

    if (fs.existsSync(postDir)) {
      console.error(`Blog post "${slug}" already exists!`);
      process.exit(1);
    }

    fs.mkdirSync(postDir, { recursive: true });

    // Create frontmatter
    const frontmatter = {
      title,
      description,
      publishedAt: new Date().toISOString().split("T")[0],
      author: {
        name: "Marwan Bukhori",
        avatar: "/images/profile/marwanbukhori.jpeg",
      },
      category,
      tags,
      readingTime,
      featured,
      coverImage: `/blog/${slug}/cover.png`,
    };

    // Create markdown content
    const content = `---
${Object.entries(frontmatter)
  .map(
    ([key, value]) =>
      `${key}: ${
        typeof value === "object"
          ? `\n${Object.entries(value)
              .map(([k, v]) => `  ${k}: ${v}`)
              .join("\n")}`
          : value
      }`
  )
  .join("\n")}
---

# ${title}

Start writing your blog post here...

## Introduction

## Main Content

## Conclusion
`;

    // Write the file
    fs.writeFileSync(path.join(postDir, "index.md"), content);

    console.log(
      `\nBlog post created successfully at: ${path.join(postDir, "index.md")}`
    );
    console.log("\nRemember to:");
    console.log("1. Add your blog content");
    console.log(`2. Add a cover image at: ${path.join(postDir, "cover.png")}`);
    console.log("3. Review the frontmatter");
  } catch (error) {
    console.error("Error creating blog post:", error);
  } finally {
    rl.close();
  }
}

createBlogPost();

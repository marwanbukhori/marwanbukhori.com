# Portfolio Data Management System

This documentation outlines the data structure and management system for the portfolio website.

## Directory Structure

```
src/
├── data/
│   ├── contact.json       # Contact information and form configurations
│   ├── projects.json      # Projects data and categories
│   ├── certifications.json # Certifications and skills data
│   └── README.md          # This documentation
├── composables/
│   └── usePortfolioData.ts # Central data management composable
```

## Data Files

### 1. contact.json

Contains all contact-related information and form configurations.

```typescript
{
  title: string;              // Page title
  description: string;        // Page description
  contactInfo: {
    email: string;           // Contact email
    location: string;        // Location information
    availability: string;    // Availability status
    response: string;        // Response time information
  };
  socialLinks: Array<{
    name: string;           // Platform name
    url: string;            // Profile URL
    icon: string;           // Icon class name
  }>;
  projectTypes: string[];    // Available project types for form
  budgetRanges: string[];   // Available budget ranges for form
}
```

### 2. projects.json

Manages project portfolio data and related configurations.

```typescript
{
  title: string;              // Page title
  description: string;        // Page description
  projects: Array<{
    id: string;              // Unique project identifier
    title: string;           // Project title
    description: string;     // Project description
    image: string;           // Project image path
    technologies: string[];  // Technologies used
    category: string;        // Project category
    github?: string;         // GitHub repository URL
    demo?: string;          // Live demo URL
    featured: boolean;       // Featured project flag
    completedAt: string;    // Completion date (YYYY-MM format)
  }>;
  categories: string[];      // Available project categories
  technologies: string[];    // All available technologies
}
```

### 3. certifications.json

Manages certification data and related configurations.

```typescript
{
  title: string;              // Page title
  description: string;        // Page description
  certifications: Array<{
    id: string;              // Unique certification identifier
    title: string;           // Certification title
    platform: string;        // Issuing platform/organization
    issueDate: string;       // Issue date (YYYY-MM format)
    expiryDate: string;      // Expiry date (YYYY-MM format)
    credentialId: string;    // Credential identifier
    verificationUrl: string; // Verification URL
    skills: string[];       // Related skills
    image: string;          // Certificate image path
  }>;
  platforms: string[];       // Available certification platforms
  skillCategories: string[]; // Skill categories
}
```

## Data Management Composable

The `usePortfolioData` composable provides centralized data management with automatic calculations and filtering capabilities.

### Usage

```typescript
import { usePortfolioData } from '@/composables/usePortfolioData';

const {
  contact,
  projects,
  certifications,
  projectStats,
  certificationStats,
  uniqueTechnologies,
  uniqueSkills,
  filterProjectsByCategory,
  filterCertificationsByPlatform
} = usePortfolioData();
```

### Available Properties and Methods

#### Reactive Data
- `contact`: Contact information and configurations
- `projects`: Projects data and configurations
- `certifications`: Certifications data and configurations

#### Computed Statistics
- `projectStats`: Automatically calculated project statistics
  - `total`: Total number of projects
  - `featured`: Number of featured projects
  - `technologies`: Number of unique technologies
  - `categories`: Number of unique categories

- `certificationStats`: Automatically calculated certification statistics
  - `total`: Total number of certifications
  - `platforms`: Number of unique platforms
  - `skills`: Number of unique skills
  - `active`: Number of active certifications

#### Helper Methods
- `filterProjectsByCategory(category: string)`: Filter projects by category
- `filterCertificationsByPlatform(platform: string)`: Filter certifications by platform

#### Computed Collections
- `uniqueTechnologies`: List of unique technologies across all projects
- `uniqueSkills`: List of unique skills across all certifications

## Maintaining the Data

### Adding a New Project

1. Open `src/data/projects.json`
2. Add a new object to the `projects` array following the structure
3. Ensure all required fields are provided
4. Add any new technologies to the `technologies` array if needed
5. Add any new categories to the `categories` array if needed

### Adding a New Certification

1. Open `src/data/certifications.json`
2. Add a new object to the `certifications` array following the structure
3. Ensure all required fields are provided
4. Add any new platforms to the `platforms` array if needed
5. Add any new skill categories to `skillCategories` if needed

### Updating Contact Information

1. Open `src/data/contact.json`
2. Update the relevant fields in the `contactInfo` object
3. Modify social links in the `socialLinks` array as needed
4. Update form options in `projectTypes` or `budgetRanges` if needed

## Best Practices

1. Always maintain the correct date format (YYYY-MM) for dates
2. Keep image paths relative to the public directory
3. Ensure IDs are unique within each collection
4. Update the relevant arrays when adding new categories/technologies
5. Keep descriptions concise and informative
6. Verify URLs before adding them to the data
7. Maintain consistent naming conventions for technologies and categories
